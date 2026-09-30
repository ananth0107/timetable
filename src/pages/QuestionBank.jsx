import React, { useState, useMemo } from 'react';
import { useAcademic } from '../context/AcademicContext';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Database,
  Search,
  Plus,
  Filter,
  Trash2,
  Edit2,
  Eye,
  FileSpreadsheet,
  BookOpen,
  FileText,
  Check,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Table } from '../components/common/Table';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { ConfirmDialog } from '../components/common/ConfirmDialog';

export const QuestionBank = () => {
  const { questionBank, addQuestion, updateQuestion, deleteQuestion, showToast } = useAcademic();
  const location = useLocation();
  const navigate = useNavigate();

  // Search & Filter State
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedUnit, setSelectedUnit] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedMarks, setSelectedMarks] = useState('All');

  // Modal States
  const [previewQuestion, setPreviewQuestion] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  // New Question Form State
  const [newQText, setNewQText] = useState('');
  const [newQSubject, setNewQSubject] = useState('Database Management Systems');
  const [newQUnit, setNewQUnit] = useState('Unit 1');
  const [newQTopic, setNewQTopic] = useState('');
  const [newQMarks, setNewQMarks] = useState(5);
  const [newQDifficulty, setNewQDifficulty] = useState('Medium');
  const [newQBloom, setNewQBloom] = useState('Understand');
  const [newQHint, setNewQHint] = useState('');

  // Row selection
  const [selectedIds, setSelectedIds] = useState([]);

  // Filtered dataset
  const filteredQuestions = useMemo(() => {
    return questionBank.filter(q => {
      const matchSearch = !searchTerm ||
        q.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.topic?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchSubject = selectedSubject === 'All' || q.subject.includes(selectedSubject);
      const matchUnit = selectedUnit === 'All' || q.unit === selectedUnit;
      const matchDifficulty = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
      const matchMarks = selectedMarks === 'All' || q.marks === parseInt(selectedMarks, 10);

      return matchSearch && matchSubject && matchUnit && matchDifficulty && matchMarks;
    });
  }, [questionBank, searchTerm, selectedSubject, selectedUnit, selectedDifficulty, selectedMarks]);

  const handleCreateQuestion = (e) => {
    e.preventDefault();
    addQuestion({
      questionText: newQText,
      subject: newQSubject,
      subjectCode: newQSubject === 'Database Management Systems' ? 'CS301' : 'CS304',
      unit: newQUnit,
      topic: newQTopic || 'General Concept',
      marks: newQMarks,
      difficulty: newQDifficulty,
      bloomLevel: newQBloom,
      answerHint: newQHint
    });

    setIsAddModalOpen(false);
    setNewQText('');
    setNewQTopic('');
    setNewQHint('');
  };

  const handleExportCSV = () => {
    let csv = 'ID,Subject,Unit,Topic,Marks,Difficulty,Bloom Level,Question Text,Answer Guide\n';
    filteredQuestions.forEach(q => {
      csv += `"${q.id}","${q.subject}","${q.unit}","${q.topic || ''}","${q.marks}","${q.difficulty}","${q.bloomLevel}","${q.questionText.replace(/"/g, '""')}","${(q.answerHint || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Apex_QuestionBank_Export_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    showToast('Question Bank exported to CSV!', 'success');
  };

  const columns = [
    {
      header: 'Question Content',
      key: 'questionText',
      render: (val, row) => (
        <div style={{ maxWidth: '420px' }}>
          <span style={{ fontWeight: 500, color: 'var(--text-primary)', display: 'block', lineHeight: 1.4 }}>
            {val}
          </span>
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.3rem', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
            <span>{row.subject}</span>
            <span>•</span>
            <span>{row.topic || row.unit}</span>
          </div>
        </div>
      )
    },
    {
      header: 'Unit',
      key: 'unit',
      sortable: true,
      width: '90px',
      render: (val) => <span style={{ fontWeight: 600, fontSize: '0.82rem' }}>{val}</span>
    },
    {
      header: 'Marks',
      key: 'marks',
      sortable: true,
      width: '80px',
      render: (val) => <Badge variant="primary">{val}M</Badge>
    },
    {
      header: 'Difficulty',
      key: 'difficulty',
      sortable: true,
      width: '100px',
      render: (val) => (
        <Badge variant={val === 'Hard' ? 'danger' : val === 'Medium' ? 'warning' : 'success'}>
          {val}
        </Badge>
      )
    },
    {
      header: 'Bloom Level',
      key: 'bloomLevel',
      sortable: true,
      width: '110px',
      render: (val) => <Badge variant="purple">{val}</Badge>
    },
    {
      header: 'Actions',
      key: 'id',
      width: '140px',
      render: (id, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <button
            onClick={() => setPreviewQuestion(row)}
            className="btn btn-ghost btn-sm btn-icon"
            title="Preview Details"
          >
            <Eye size={15} />
          </button>
          <button
            onClick={() => setEditingQuestion(row)}
            className="btn btn-ghost btn-sm btn-icon"
            title="Edit Question"
          >
            <Edit2 size={15} />
          </button>
          <button
            onClick={() => {
              navigate('/question-paper/create');
              showToast(`Navigated to Paper Builder to add "${row.id}"`, 'info');
            }}
            className="btn btn-ghost btn-sm btn-icon"
            title="Add to Question Paper"
          >
            <FileText size={15} />
          </button>
          <button
            onClick={() => setDeleteTargetId(id)}
            className="btn btn-ghost btn-sm btn-icon"
            title="Delete"
            style={{ color: 'var(--danger-500)' }}
          >
            <Trash2 size={15} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Page Header */}
      <PageHeader
        title="Institutional Question Bank"
        subtitle="Central verified repository of multi-tier curriculum examination questions"
        breadcrumbs={[
          { label: 'Dashboard', to: '/dashboard' },
          { label: 'Question Bank' }
        ]}
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              icon={FileSpreadsheet}
              onClick={handleExportCSV}
            >
              Export CSV
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={Sparkles}
              onClick={() => navigate('/questions/generate')}
            >
              Generate AI Questions
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={Plus}
              onClick={() => setIsAddModalOpen(true)}
            >
              Add Question
            </Button>
          </>
        }
      />

      {/* Filter and Search Bar */}
      <div
        className="card"
        style={{
          padding: '1rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
          {/* Search Input */}
          <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-light)',
                pointerEvents: 'none'
              }}
            />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '36px' }}
              placeholder="Search by keywords, subject, Bloom taxonomy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Quick Stats Pill */}
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Showing <strong>{filteredQuestions.length}</strong> of <strong>{questionBank.length}</strong> Questions
          </div>
        </div>

        {/* Dropdown Filters Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Subject</label>
            <select
              className="form-select"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              style={{ padding: '0.45rem 0.65rem', fontSize: '0.84rem' }}
            >
              <option value="All">All CS Courses</option>
              <optgroup label="B.Sc. Computer Science (UG 3-Yr)">
                <option value="Database">CS301 - Database Management Systems</option>
                <option value="Java">CS304 - Java Programming</option>
                <option value="Operating">CS302 - Operating Systems</option>
                <option value="Python">CS303 - Python for Data Science</option>
              </optgroup>
              <optgroup label="M.Sc. Computer Science (PG 2-Yr)">
                <option value="Advanced Data Structures">MCS101 - Advanced Data Structures & Algorithms</option>
                <option value="Machine Learning">MCS201 - Machine Learning & Neural Computing</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Curriculum Unit</label>
            <select
              className="form-select"
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              style={{ padding: '0.45rem 0.65rem', fontSize: '0.84rem' }}
            >
              <option value="All">All Units</option>
              <option value="Unit 1">Unit 1</option>
              <option value="Unit 2">Unit 2</option>
              <option value="Unit 3">Unit 3</option>
              <option value="Unit 4">Unit 4</option>
              <option value="Unit 5">Unit 5</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Difficulty</label>
            <select
              className="form-select"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              style={{ padding: '0.45rem 0.65rem', fontSize: '0.84rem' }}
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Marks</label>
            <select
              className="form-select"
              value={selectedMarks}
              onChange={(e) => setSelectedMarks(e.target.value)}
              style={{ padding: '0.45rem 0.65rem', fontSize: '0.84rem' }}
            >
              <option value="All">All Marks</option>
              <option value="1">1 Mark (One-Word / Objective)</option>
              <option value="2">2 Marks (Short)</option>
              <option value="5">5 Marks (Analytical / Medium)</option>
              <option value="8">8 Marks (Comprehensive / Essay)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <Table
        columns={columns}
        data={filteredQuestions}
        selectable={true}
        selectedIds={selectedIds}
        onSelectRow={(id) => {
          setSelectedIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
        }}
        onSelectAll={(checked, paginatedItems) => {
          if (checked) {
            const idsToAdd = paginatedItems.map(p => p.id);
            setSelectedIds(prev => Array.from(new Set([...prev, ...idsToAdd])));
          } else {
            const idsToRemove = paginatedItems.map(p => p.id);
            setSelectedIds(prev => prev.filter(id => !idsToRemove.includes(id)));
          }
        }}
        pageSize={8}
      />

      {/* Preview Modal */}
      <Modal
        isOpen={!!previewQuestion}
        onClose={() => setPreviewQuestion(null)}
        title="Question Details & Marking Scheme"
        icon={BookOpen}
        footer={
          <Button variant="primary" size="sm" onClick={() => setPreviewQuestion(null)}>
            Close
          </Button>
        }
      >
        {previewQuestion && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Badge variant="primary">{previewQuestion.marks} Marks</Badge>
              <Badge variant="neutral">{previewQuestion.unit}</Badge>
              <Badge variant="purple">Bloom: {previewQuestion.bloomLevel}</Badge>
              <Badge variant={previewQuestion.difficulty === 'Hard' ? 'danger' : 'warning'}>
                {previewQuestion.difficulty}
              </Badge>
            </div>

            <div>
              <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Question Text</h4>
              <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.5, margin: 0 }}>
                {previewQuestion.questionText}
              </p>
            </div>

            {previewQuestion.answerHint && (
              <div style={{ backgroundColor: 'var(--bg-surface-hover)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Marking Guidelines / Solution Key</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {previewQuestion.answerHint}
                </p>
              </div>
            )}

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
              Subject: <strong>{previewQuestion.subject}</strong> ({previewQuestion.subjectCode}) • Created by {previewQuestion.author || 'Prof. Alan Davis'} on {previewQuestion.createdDate}
            </div>
          </div>
        )}
      </Modal>

      {/* Add Question Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Question to Bank"
        icon={Plus}
      >
        <form onSubmit={handleCreateQuestion}>
          <div className="form-group">
            <label className="form-label form-label-required">Question Text</label>
            <textarea
              className="form-textarea"
              rows="3"
              value={newQText}
              onChange={(e) => setNewQText(e.target.value)}
              placeholder="Type the complete examination question prompt..."
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label form-label-required">Subject</label>
              <select
                className="form-select"
                value={newQSubject}
                onChange={(e) => setNewQSubject(e.target.value)}
              >
                <optgroup label="B.Sc. Computer Science (UG 3-Yr)">
                  <option value="Database Management Systems">CS301 - Database Management Systems</option>
                  <option value="Java Programming">CS304 - Java Programming</option>
                  <option value="Operating Systems">CS302 - Operating Systems</option>
                  <option value="Python for Data Science">CS303 - Python for Data Science</option>
                </optgroup>
                <optgroup label="M.Sc. Computer Science (PG 2-Yr)">
                  <option value="Advanced Data Structures & Algorithms">MCS101 - Advanced Data Structures</option>
                  <option value="Machine Learning & Neural Computing">MCS201 - Machine Learning</option>
                </optgroup>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Unit</label>
              <select
                className="form-select"
                value={newQUnit}
                onChange={(e) => setNewQUnit(e.target.value)}
              >
                <option value="Unit 1">Unit 1</option>
                <option value="Unit 2">Unit 2</option>
                <option value="Unit 3">Unit 3</option>
                <option value="Unit 4">Unit 4</option>
                <option value="Unit 5">Unit 5</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label form-label-required">Marks</label>
              <input
                type="number"
                className="form-input"
                value={newQMarks}
                onChange={(e) => setNewQMarks(parseInt(e.target.value, 10))}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label form-label-required">Difficulty</label>
              <select
                className="form-select"
                value={newQDifficulty}
                onChange={(e) => setNewQDifficulty(e.target.value)}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label form-label-required">Bloom's Level</label>
              <select
                className="form-select"
                value={newQBloom}
                onChange={(e) => setNewQBloom(e.target.value)}
              >
                <option value="Remember">Remember</option>
                <option value="Understand">Understand</option>
                <option value="Apply">Apply</option>
                <option value="Analyze">Analyze</option>
                <option value="Evaluate">Evaluate</option>
                <option value="Create">Create</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Marking Breakdown / Key points</label>
            <textarea
              className="form-textarea"
              rows="2"
              value={newQHint}
              onChange={(e) => setNewQHint(e.target.value)}
              placeholder="Outline expected points or partial marks..."
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
            <Button variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={Check}>
              Save to Question Bank
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Question Modal */}
      <Modal
        isOpen={!!editingQuestion}
        onClose={() => setEditingQuestion(null)}
        title="Edit Question"
        icon={Edit2}
      >
        {editingQuestion && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateQuestion(editingQuestion.id, editingQuestion);
              setEditingQuestion(null);
            }}
          >
            <div className="form-group">
              <label className="form-label form-label-required">Question Text</label>
              <textarea
                className="form-textarea"
                rows="3"
                value={editingQuestion.questionText}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, questionText: e.target.value })}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Marks</label>
                <input
                  type="number"
                  className="form-input"
                  value={editingQuestion.marks}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, marks: parseInt(e.target.value, 10) })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Difficulty</label>
                <select
                  className="form-select"
                  value={editingQuestion.difficulty}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, difficulty: e.target.value })}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Marking Scheme / Answer Guidelines</label>
              <textarea
                className="form-textarea"
                rows="2"
                value={editingQuestion.answerHint || ''}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, answerHint: e.target.value })}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
              <Button variant="outline" size="sm" onClick={() => setEditingQuestion(null)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" icon={Check}>
                Save Changes
              </Button>
            </div>
          </form>
        )}
      </Modal>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={!!deleteTargetId}
        onClose={() => setDeleteTargetId(null)}
        onConfirm={() => {
          if (deleteTargetId) {
            deleteQuestion(deleteTargetId);
            setDeleteTargetId(null);
          }
        }}
        title="Delete Question"
        message="Are you sure you want to permanently delete this question from the Question Bank?"
      />
    </div>
  );
};
