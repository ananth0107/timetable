import React, { useState, useMemo } from 'react';
import { useAcademic } from '../context/AcademicContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import {
  FileText,
  Save,
  Send,
  Printer,
  Eye,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Clock,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { CS_PROGRAMS, SUBJECTS } from '../data/mockData';

export const QuestionPaperBuilder = () => {
  const { questionBank, saveQuestionPaper, submitPaperToHOD, showToast, subjects = [] } = useAcademic();
  const { currentUser } = useAuth();

  // Paper Form Metadata
  const [selectedProgram, setSelectedProgram] = useState('UG_BSCCS');
  const [selectedPaperId] = useState('');
  const [title, setTitle] = useState('Continuous Internal Assessment Blueprint');
  const [subject, setSubject] = useState('Programming in C & Data Structures');
  const [subjectCode, setSubjectCode] = useState('CS101');
  const [semester, setSemester] = useState('Semester I');
  const [year, setYear] = useState('I');
  const [examType, setExamType] = useState('Internal Exam');
  const [duration, setDuration] = useState('60 Minutes');
  const [maxMarks, setMaxMarks] = useState(20);

  const currentProgram = CS_PROGRAMS.find(p => p.id === selectedProgram) || CS_PROGRAMS[0];
  const availableProgramSubjects = (subjects.length > 0 ? subjects : SUBJECTS).filter(s => s.program === selectedProgram);

  const handleProgramChange = (progId) => {
    setSelectedProgram(progId);
    const subjs = (subjects.length > 0 ? subjects : SUBJECTS).filter(s => s.program === progId);
    if (subjs.length > 0) {
      setSubject(subjs[0].name);
      setSubjectCode(subjs[0].code);
      setSemester(subjs[0].semester);
      setYear(subjs[0].year);
    }
  };

  const handleExamTypeChange = (type) => {
    setExamType(type);
    if (type === 'Internal Exam') {
      setMaxMarks(20);
      setDuration('60 Minutes');
    } else if (type === 'Semester Exam') {
      setMaxMarks(70);
      setDuration('180 Minutes');
    }
  };

  const handleMaxMarksChange = (marks) => {
    const num = parseInt(marks, 10);
    setMaxMarks(num);
    if (num === 20) {
      setExamType('Internal Exam');
      setDuration('60 Minutes');
    } else if (num === 70) {
      setExamType('Semester Exam');
      setDuration('180 Minutes');
    }
  };

  // Blueprint Structure (Clean Empty Baseline)
  const [partAQuestions, setPartAQuestions] = useState([]);
  const [partBQuestions, setPartBQuestions] = useState([]);
  const [partCQuestions, setPartCQuestions] = useState([]);

  // Apply Full Exam Format Blueprint Preset (20M Internal vs 70M Semester)
  const applyExamFormatBlueprint = (format) => {
    const targetType = format || examType;
    const isInternal = targetType === 'Internal Exam';
    setExamType(targetType);
    setMaxMarks(isInternal ? 20 : 70);
    setDuration(isInternal ? '60 Minutes' : '180 Minutes');

    const subQuestions = (questionBank || []).filter(q =>
      (q.subject && subject && q.subject.toLowerCase().includes(subject.toLowerCase().split(' ')[0])) || true
    );

    const partAQ = [];
    const partBQ = [];
    const partCQ = [];

    if (isInternal) {
      // 1. Internal Exam Part A: 2 questions × 1 Mark = 2 Marks
      for (let i = 0; i < 2; i++) {
        const candidate = subQuestions.find(q => (q.marks === 1 || q.marks === 2) && !partAQ.some(x => x.text === q.questionText));
        if (candidate) {
          partAQ.push({
            id: `preset_ia_a_${i}_${Date.now()}`,
            text: candidate.questionText,
            marks: 1,
            unit: candidate.unit || `Unit ${i + 1}`,
            bloomLevel: candidate.bloomLevel || 'Remember',
            topic: candidate.topic || `Unit ${i + 1} Fundamentals`
          });
        } else {
          partAQ.push({
            id: `preset_ia_a_${i}_${Date.now()}`,
            text: `Define the core technical term and objective of Unit ${i + 1} in ${subject}.`,
            marks: 1,
            unit: `Unit ${i + 1}`,
            bloomLevel: 'Remember',
            topic: `Unit ${i + 1} Definitions`
          });
        }
      }

      // 2. Internal Exam Part B: 2 questions × 5 Marks = 10 Marks
      for (let i = 0; i < 2; i++) {
        const candidate = subQuestions.find(q => q.marks === 5 && !partBQ.some(x => x.text === q.questionText));
        if (candidate) {
          partBQ.push({
            id: `preset_ia_b_${i}_${Date.now()}`,
            text: candidate.questionText,
            marks: 5,
            unit: candidate.unit || `Unit ${i + 1}`,
            bloomLevel: candidate.bloomLevel || 'Understand',
            topic: candidate.topic || `Unit ${i + 1} Principles`
          });
        } else {
          partBQ.push({
            id: `preset_ia_b_${i}_${Date.now()}`,
            text: `Explain in detail the operational mechanism and system architecture of Unit ${i + 1} in ${subject}.`,
            marks: 5,
            unit: `Unit ${i + 1}`,
            bloomLevel: 'Understand',
            topic: `Unit ${i + 1} Architecture`
          });
        }
      }

      // 3. Internal Exam Part C: 1 question × 8 Marks = 8 Marks
      const candidateC = subQuestions.find(q => (q.marks === 8 || q.marks === 10) && !partCQ.some(x => x.text === q.questionText));
      if (candidateC) {
        partCQ.push({
          id: `preset_ia_c_0_${Date.now()}`,
          text: candidateC.questionText,
          marks: 8,
          unit: candidateC.unit || 'Unit 2',
          bloomLevel: candidateC.bloomLevel || 'Analyze',
          topic: candidateC.topic || 'System Design & Case Analysis'
        });
      } else {
        partCQ.push({
          id: `preset_ia_c_0_${Date.now()}`,
          text: `Elaborate comprehensively with complete architectural diagrams and implementation examples the framework in ${subject}.`,
          marks: 8,
          unit: 'Unit 2',
          bloomLevel: 'Analyze',
          topic: 'Comprehensive Implementation'
        });
      }

      setPartAQuestions(partAQ);
      setPartBQuestions(partBQ);
      setPartCQuestions(partCQ);
      showToast('Loaded 20 Marks Internal Exam Blueprint (2×1M + 2×5M + 1×8M = 20 Marks)!', 'success');
    } else {
      // 1. Semester Exam Part A: 15 questions × 1 Mark (One-Word / Objective) = 15 Marks
      for (let i = 0; i < 15; i++) {
        const unitNum = (i % 5) + 1;
        const candidate = subQuestions.find(q => (q.marks === 1 || q.marks <= 2) && !partAQ.some(x => x.text === q.questionText));
        if (candidate) {
          partAQ.push({
            id: `preset_sem_a_${i}_${Date.now()}`,
            text: candidate.questionText,
            marks: 1,
            unit: candidate.unit || `Unit ${unitNum}`,
            bloomLevel: candidate.bloomLevel || 'Remember',
            topic: candidate.topic || `Unit ${unitNum} Key Term`
          });
        } else {
          partAQ.push({
            id: `preset_sem_a_${i}_${Date.now()}`,
            text: `State the primary definition / function of key concept #${(i % 3) + 1} in Unit ${unitNum} of ${subject}.`,
            marks: 1,
            unit: `Unit ${unitNum}`,
            bloomLevel: 'Remember',
            topic: `Unit ${unitNum} Key Term`
          });
        }
      }

      // 2. Semester Exam Part B: 5 questions × 5 Marks = 25 Marks
      for (let i = 0; i < 5; i++) {
        const unitNum = i + 1;
        const candidate = subQuestions.find(q => q.marks === 5 && !partBQ.some(x => x.text === q.questionText));
        if (candidate) {
          partBQ.push({
            id: `preset_sem_b_${i}_${Date.now()}`,
            text: candidate.questionText,
            marks: 5,
            unit: candidate.unit || `Unit ${unitNum}`,
            bloomLevel: candidate.bloomLevel || 'Understand',
            topic: candidate.topic || `Unit ${unitNum} Theory`
          });
        } else {
          partBQ.push({
            id: `preset_sem_b_${i}_${Date.now()}`,
            text: `Explain with illustrative diagrams the procedural workflow and theoretical design of Unit ${unitNum} in ${subject}.`,
            marks: 5,
            unit: `Unit ${unitNum}`,
            bloomLevel: 'Understand',
            topic: `Unit ${unitNum} Theory`
          });
        }
      }

      // 3. Semester Exam Part C: 5 questions × 8 Marks = 40 Marks
      for (let i = 0; i < 5; i++) {
        const unitNum = i + 1;
        const candidate = subQuestions.find(q => (q.marks === 8 || q.marks === 10) && !partCQ.some(x => x.text === q.questionText));
        if (candidate) {
          partCQ.push({
            id: `preset_sem_c_${i}_${Date.now()}`,
            text: candidate.questionText,
            marks: 8,
            unit: candidate.unit || `Unit ${unitNum}`,
            bloomLevel: candidate.bloomLevel || 'Analyze',
            topic: candidate.topic || `Unit ${unitNum} Case Study`
          });
        } else {
          partCQ.push({
            id: `preset_sem_c_${i}_${Date.now()}`,
            text: `Critically analyze, evaluate, and formulate a comprehensive technical design for ${subject} Unit ${unitNum} problem scenarios.`,
            marks: 8,
            unit: `Unit ${unitNum}`,
            bloomLevel: 'Evaluate',
            topic: `Unit ${unitNum} Advanced Application`
          });
        }
      }

      setPartAQuestions(partAQ);
      setPartBQuestions(partBQ);
      setPartCQuestions(partCQ);
      showToast('Loaded 70 Marks Semester Exam Blueprint (15×1M + 5×5M + 5×8M = 70 Marks)!', 'success');
    }
  };

  // Modals
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showAddFromBankModal, setShowAddFromBankModal] = useState(false);
  const [bankModalFilter, setBankModalFilter] = useState('all'); // 'all' | 'unused' | 'used'
  const [targetSection, setTargetSection] = useState('A'); // 'A' | 'B' | 'C'

  // Subject change helper
  const handleSubjectChange = (newSubjectName) => {
    setSubject(newSubjectName);
    const foundSub = SUBJECTS.find(s => s.name === newSubjectName);
    if (foundSub) {
      setSubjectCode(foundSub.code);
      setSemester(foundSub.semester);
      setYear(foundSub.year);
    }
  };

  // All questions currently in the active paper blueprint
  const allCurrentPaperQuestions = useMemo(() => {
    return [...partAQuestions, ...partBQuestions, ...partCQuestions];
  }, [partAQuestions, partBQuestions, partCQuestions]);

  // Unit coverage analysis for question paper
  const unitCoverageAnalysis = useMemo(() => {
    const units = [1, 2, 3, 4, 5];
    const unitBreakdown = units.map(unitNum => {
      const unitKey = `Unit ${unitNum}`;
      const questionsInPaperCount = allCurrentPaperQuestions.filter(
        q => q.unit === unitKey || q.unit === `Unit ${unitNum}`
      ).length;
      return {
        unitNumber: unitNum,
        unitKey,
        questionsInPaperCount
      };
    });
    return { unitBreakdown };
  }, [allCurrentPaperQuestions]);

  // Calculate live marks
  const totalPartA = partAQuestions.reduce((acc, q) => acc + (q.marks !== undefined ? q.marks : 1), 0);
  const totalPartB = partBQuestions.reduce((acc, q) => acc + (q.marks !== undefined ? q.marks : 5), 0);
  const totalPartC = partCQuestions.reduce((acc, q) => acc + (q.marks !== undefined ? q.marks : 8), 0);
  const currentTotalMarks = totalPartA + totalPartB + totalPartC;
  const isMarksBalanced = currentTotalMarks === parseInt(maxMarks, 10);

  const handleSavePaper = () => {
    saveQuestionPaper({
      id: selectedPaperId || 'qp_' + Date.now(),
      title,
      subject,
      subjectCode,
      semester,
      year,
      examType,
      duration,
      maxMarks: parseInt(maxMarks, 10),
      totalMarks: currentTotalMarks,
      author: currentUser?.name || 'Prof. Alan Davis',
      department: currentUser?.deptCode || 'CSE',
      status: 'Ready',
      blueprint: {
        partA: { title: 'PART A', count: partAQuestions.length, total: totalPartA, questions: partAQuestions },
        partB: { title: 'PART B', count: partBQuestions.length, total: totalPartB, questions: partBQuestions },
        partC: { title: 'PART C', count: partCQuestions.length, total: totalPartC, questions: partCQuestions }
      }
    });
    showToast('Question paper saved and ready for examination!', 'success');
  };

  const handleAddQuestionToSection = (q) => {
    const formatted = {
      id: 'custom_' + Date.now(),
      text: q.questionText,
      marks: q.marks,
      unit: q.unit,
      bloomLevel: q.bloomLevel,
      topic: q.topic || ''
    };

    if (targetSection === 'A') setPartAQuestions(prev => [...prev, formatted]);
    if (targetSection === 'B') setPartBQuestions(prev => [...prev, formatted]);
    if (targetSection === 'C') setPartCQuestions(prev => [...prev, formatted]);

    setShowAddFromBankModal(false);
    showToast(`Added question to PART ${targetSection}`, 'success');
  };

  const handleRemoveQuestion = (section, qId) => {
    if (section === 'A') setPartAQuestions(prev => prev.filter(q => q.id !== qId));
    if (section === 'B') setPartBQuestions(prev => prev.filter(q => q.id !== qId));
    if (section === 'C') setPartCQuestions(prev => prev.filter(q => q.id !== qId));
  };

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <PageHeader
        title="Exam Paper Builder"
        subtitle="Visual blueprint architect with real-time unit coverage, exact section marks balancing & instant exam publishing"
        breadcrumbs={[
          { label: 'Smart Timetable', to: '/timetable' },
          { label: 'Exam Paper Builder' }
        ]}
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              icon={Eye}
              onClick={() => setShowPreviewModal(true)}
            >
              Print Preview
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={Save}
              onClick={handleSavePaper}
            >
              Save Question Paper
            </Button>
          </>
        }
      />

      {/* Blueprint Header Settings Bar */}
      <div className="card" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Degree / Course</label>
            <select
              className="form-select"
              value={selectedProgram}
              onChange={(e) => handleProgramChange(e.target.value)}
              style={{ fontWeight: 600 }}
            >
              {CS_PROGRAMS.map(prog => (
                <option key={prog.id} value={prog.id}>
                  {prog.name} ({prog.durationYears}-Yr {prog.degree === 'B.Sc.' ? 'UG' : 'PG'})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Subject</label>
            <select
              className="form-select"
              value={subject}
              onChange={(e) => handleSubjectChange(e.target.value)}
            >
              {availableProgramSubjects.map(sub => (
                <option key={sub.code} value={sub.name}>
                  {sub.code} - {sub.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Semester & Year</label>
            <select className="form-select" value={semester} onChange={(e) => setSemester(e.target.value)}>
              {selectedProgram === 'UG_BSCCS' ? (
                <>
                  <option value="Semester I">Sem I (Year I)</option>
                  <option value="Semester II">Sem II (Year I)</option>
                  <option value="Semester III">Sem III (Year II)</option>
                  <option value="Semester IV">Sem IV (Year II)</option>
                  <option value="Semester V">Sem V (Year III)</option>
                  <option value="Semester VI">Sem VI (Year III)</option>
                </>
              ) : (
                <>
                  <option value="Semester I">Sem I (Year I PG)</option>
                  <option value="Semester II">Sem II (Year I PG)</option>
                  <option value="Semester III">Sem III (Year II PG)</option>
                  <option value="Semester IV">Sem IV (Year II PG)</option>
                </>
              )}
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Assessment Type</label>
            <select className="form-select" value={examType} onChange={(e) => handleExamTypeChange(e.target.value)}>
              <option value="Internal Exam">Internal Exam (20 Marks)</option>
              <option value="Semester Exam">Semester Exam (70 Marks)</option>
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Duration</label>
            <select className="form-select" value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option value="60 Minutes">60 Minutes (1 Hour)</option>
              <option value="90 Minutes">90 Minutes (1.5 Hours)</option>
              <option value="120 Minutes">120 Minutes (2 Hours)</option>
              <option value="180 Minutes">180 Minutes (3 Hours)</option>
            </select>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Max Marks</label>
            <select className="form-select" value={maxMarks} onChange={(e) => handleMaxMarksChange(e.target.value)}>
              <option value="20">20 Marks (Internal Exam)</option>
              <option value="70">70 Marks (Semester Exam)</option>
            </select>
          </div>
        </div>

        {/* Quick Format Blueprint Preset Badges/Buttons */}
        <div style={{ marginTop: '1.15rem', paddingTop: '0.95rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              <Sparkles size={16} style={{ color: 'var(--primary-600)' }} />
              <span>Blueprint Presets:</span>
            </div>
            <button
              type="button"
              onClick={() => applyExamFormatBlueprint('Internal Exam')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: examType === 'Internal Exam' ? '1.5px solid var(--primary-600)' : '1px solid var(--border-medium)',
                background: examType === 'Internal Exam' ? 'var(--primary-50)' : 'var(--bg-app)',
                color: examType === 'Internal Exam' ? 'var(--primary-700)' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              📝 20M Internal Exam (2 × 1M + 2 × 5M + 1 × 8M)
            </button>
            <button
              type="button"
              onClick={() => applyExamFormatBlueprint('Semester Exam')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: examType === 'Semester Exam' ? '1.5px solid var(--primary-600)' : '1px solid var(--border-medium)',
                background: examType === 'Semester Exam' ? 'var(--primary-50)' : 'var(--bg-app)',
                color: examType === 'Semester Exam' ? 'var(--primary-700)' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              🎓 70M Semester Exam (15 × 1M + 5 × 5M + 5 × 8M)
            </button>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Active Format: <strong style={{ color: 'var(--primary-600)', fontWeight: 700 }}>{examType} • {maxMarks} Marks • {duration}</strong>
          </div>
        </div>
      </div>

      {/* Real-time Marks & Blueprint Meter Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: isMarksBalanced ? 'var(--success-50)' : 'var(--warning-50)',
          border: `1px solid ${isMarksBalanced ? 'var(--success-100)' : 'var(--warning-100)'}`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Target Maximum Marks</span>
            <strong style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{maxMarks} Marks</strong>
          </div>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Current Total Marks</span>
            <strong style={{ fontSize: '1.25rem', color: isMarksBalanced ? 'var(--success-600)' : 'var(--warning-600)' }}>
              {currentTotalMarks} Marks
            </strong>
          </div>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Questions Count</span>
            <strong style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              {partAQuestions.length + partBQuestions.length + partCQuestions.length} Questions
            </strong>
          </div>
        </div>

        <div>
          {isMarksBalanced ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--success-600)', fontWeight: 600, fontSize: '0.88rem' }}>
              <CheckCircle2 size={18} /> Blueprint Marks Balanced
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--warning-600)', fontWeight: 600, fontSize: '0.88rem' }}>
              <AlertCircle size={18} /> Point Difference: {Math.abs(currentTotalMarks - maxMarks)} Marks
            </div>
          )}
        </div>
      </div>

      {/* Section Builders: PART A, PART B, PART C */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* PART A */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--primary-50)', color: 'var(--primary-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>A</span>
              <div>
                <span>PART A - One-Word / Objective Questions</span>
                <div className="card-subtitle">
                  {partAQuestions.length} Questions • 1 Mark Each • Section Total: {totalPartA} Marks • (Target: {examType === 'Internal Exam' ? '2 Questions (2M)' : '15 Questions (15M)'})
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={() => {
                setTargetSection('A');
                setShowAddFromBankModal(true);
              }}
            >
              Add Question
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {partAQuestions.length === 0 ? (
              <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-medium)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                No questions added to PART A yet. Click <strong>+ Add Question</strong> or use <strong>✨ AI Auto-Balance & Fill</strong> above.
              </div>
            ) : (
              partAQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--bg-surface-hover)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary-600)', minWidth: '24px' }}>
                      Q{idx + 1}.
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{q.text}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Badge variant="neutral">{q.unit}</Badge>
                    <Badge variant="purple">{q.bloomLevel}</Badge>
                    <Badge variant="primary">{q.marks !== undefined ? q.marks : 1}M</Badge>
                    <button
                      onClick={() => handleRemoveQuestion('A', q.id)}
                      className="btn btn-ghost btn-sm btn-icon"
                      style={{ color: 'var(--danger-500)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* PART B */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-indigo-light)', color: 'var(--accent-indigo)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>B</span>
              <div>
                <span>PART B - Descriptive / Analytical Questions</span>
                <div className="card-subtitle">
                  {partBQuestions.length} Questions • 5 Marks Each • Section Total: {totalPartB} Marks • (Target: {examType === 'Internal Exam' ? '2 Questions (10M)' : '5 Questions (25M)'})
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={() => {
                setTargetSection('B');
                setShowAddFromBankModal(true);
              }}
            >
              Add Question
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {partBQuestions.length === 0 ? (
              <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-medium)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                No questions added to PART B yet. Click <strong>+ Add Question</strong> or select from unused unit topics.
              </div>
            ) : (
              partBQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--bg-surface-hover)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-indigo)', minWidth: '24px' }}>
                      Q{partAQuestions.length + idx + 1}.
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{q.text}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Badge variant="neutral">{q.unit}</Badge>
                    <Badge variant="purple">{q.bloomLevel}</Badge>
                    <Badge variant="primary">{q.marks !== undefined ? q.marks : 5}M</Badge>
                    <button
                      onClick={() => handleRemoveQuestion('B', q.id)}
                      className="btn btn-ghost btn-sm btn-icon"
                      style={{ color: 'var(--danger-500)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* PART C */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--accent-purple-light)', color: 'var(--accent-purple)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>C</span>
              <div>
                <span>PART C - Comprehensive / 8-Mark Essay Questions</span>
                <div className="card-subtitle">
                  {partCQuestions.length} Questions • 8 Marks Each • Section Total: {totalPartC} Marks • (Target: {examType === 'Internal Exam' ? '1 Question (8M)' : '5 Questions (40M)'})
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={() => {
                setTargetSection('C');
                setShowAddFromBankModal(true);
              }}
            >
              Add Question
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {partCQuestions.length === 0 ? (
              <div style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-medium)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                No questions added to PART C yet. Click <strong>+ Add Question</strong> or design custom long-form questions.
              </div>
            ) : (
              partCQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--bg-surface-hover)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                    <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-purple)', minWidth: '24px' }}>
                      Q{partAQuestions.length + partBQuestions.length + idx + 1}.
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{q.text}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Badge variant="neutral">{q.unit}</Badge>
                    <Badge variant="purple">{q.bloomLevel}</Badge>
                    <Badge variant="primary">{q.marks}M</Badge>
                    <button
                      onClick={() => handleRemoveQuestion('C', q.id)}
                      className="btn btn-ghost btn-sm btn-icon"
                      style={{ color: 'var(--danger-500)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Add From Question Bank Modal */}
      <Modal
        isOpen={showAddFromBankModal}
        onClose={() => setShowAddFromBankModal(false)}
        title={`Add Question to PART ${targetSection}`}
        subtitle={`Select questions from repository for ${subject}`}
        maxWidth="680px"
        icon={Plus}
      >
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
          <button
            type="button"
            onClick={() => setBankModalFilter('all')}
            style={{
              padding: '0.3rem 0.65rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: bankModalFilter === 'all' ? 'var(--primary-100)' : 'transparent',
              color: bankModalFilter === 'all' ? 'var(--primary-700)' : 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            All Questions ({questionBank.length})
          </button>
          <button
            type="button"
            onClick={() => setBankModalFilter('unused')}
            style={{
              padding: '0.3rem 0.65rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: bankModalFilter === 'unused' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
              color: bankModalFilter === 'unused' ? '#b45309' : 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            ⭐ Unused Course Units (Recommended)
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '420px', overflowY: 'auto' }}>
          {questionBank
            .filter(q => {
              if (bankModalFilter === 'unused') {
                const isUnitUnused = unitCoverageAnalysis.unitBreakdown.some(u => u.unitKey === q.unit && u.questionsInPaperCount === 0);
                return isUnitUnused;
              }
              return true;
            })
            .map((q) => {
              const isAlreadyInBlueprint = allCurrentPaperQuestions.some(pq => pq.text === q.questionText);
              const isUnusedUnit = unitCoverageAnalysis.unitBreakdown.some(u => u.unitKey === q.unit && u.questionsInPaperCount === 0);

              return (
                <div
                  key={q.id}
                  style={{
                    padding: '0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: `1px solid ${isUnusedUnit ? 'rgba(245, 158, 11, 0.4)' : 'var(--border-light)'}`,
                    backgroundColor: isUnusedUnit ? 'rgba(245, 158, 11, 0.04)' : 'var(--bg-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                        {q.questionText}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <Badge variant="primary">{q.marks}M</Badge>
                      <Badge variant="neutral">{q.unit}</Badge>
                      <Badge variant="purple">{q.bloomLevel}</Badge>
                      {isUnusedUnit && (
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#b45309', backgroundColor: 'rgba(245, 158, 11, 0.15)', padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-xs)' }}>
                          ⭐ Fills Unit Gap
                        </span>
                      )}
                      {isAlreadyInBlueprint && (
                        <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#059669', backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '0.1rem 0.4rem', borderRadius: 'var(--radius-xs)' }}>
                          ✓ In Blueprint
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    variant={isAlreadyInBlueprint ? 'outline' : 'primary'}
                    size="sm"
                    disabled={isAlreadyInBlueprint}
                    onClick={() => handleAddQuestionToSection(q)}
                  >
                    {isAlreadyInBlueprint ? 'Added' : '+ Add'}
                  </Button>
                </div>
              );
            })}
        </div>
      </Modal>

      {/* Live Print-Ready Preview Modal */}
      <Modal
        isOpen={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
        title="Official Examination Question Paper Preview"
        maxWidth="750px"
        icon={GraduationCap}
        footer={
          <>
            <Button variant="outline" size="sm" onClick={() => setShowPreviewModal(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={Printer}
              onClick={() => window.print()}
            >
              Print Question Paper
            </Button>
          </>
        }
      >
        {/* Authentic College Examination Paper Template */}
        <div
          style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #cbd5e1',
            fontFamily: 'serif'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid #000000', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000000' }}>
              V.O. CHIDAMBARAM COLLEGE, THOOTHUKUDI
            </h2>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, margin: '0.2rem 0' }}>
              REACCREDITED WITH 'A' GRADE BY NAAC • AFFILIATED TO MANONMANIAM SUNDARANAR UNIVERSITY
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', marginTop: '0.35rem' }}>
              DEPARTMENT OF COMPUTER SCIENCE
            </div>
            <div style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
              {examType} • Academic Year 2025-2026 (Even Semester)
            </div>
          </div>

          {/* Paper Meta Table */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', fontSize: '0.85rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            <div>
              <div><strong>Course Code & Name:</strong> {subjectCode} - {subject}</div>
              <div><strong>Degree & Programme:</strong> {currentProgram?.name} ({currentProgram?.level})</div>
              <div><strong>Semester / Academic Year:</strong> {semester} / Year {year}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div><strong>Maximum Marks:</strong> {maxMarks}</div>
              <div><strong>Duration:</strong> {duration}</div>
              <div><strong>Faculty:</strong> {currentUser?.name || 'Prof. Alan Davis'}</div>
            </div>
          </div>

          {/* PART A */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', borderBottom: '1px solid #000000', paddingBottom: '0.2rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>PART A — ({partAQuestions.length} x 1 = {totalPartA} Marks)</span>
              <span>{examType === 'Internal Exam' ? 'Answer ALL Questions (2 x 1 = 2 Marks)' : 'Answer ALL One-Word Questions (15 x 1 = 15 Marks)'}</span>
            </div>
            <ol style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.86rem', lineHeight: 1.6 }}>
              {partAQuestions.map((q, idx) => (
                <li key={idx} style={{ marginBottom: '0.35rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{q.text}</span>
                    <span style={{ fontWeight: 600, paddingLeft: '0.5rem' }}>({q.marks !== undefined ? q.marks : 1})</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* PART B */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', borderBottom: '1px solid #000000', paddingBottom: '0.2rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>PART B — ({partBQuestions.length} x 5 = {totalPartB} Marks)</span>
              <span>{examType === 'Internal Exam' ? 'Answer ALL Questions (2 x 5 = 10 Marks)' : 'Answer ALL Questions (Either / Or Pattern: 5 x 5 = 25 Marks)'}</span>
            </div>
            <ol start={partAQuestions.length + 1} style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.86rem', lineHeight: 1.6 }}>
              {partBQuestions.map((q, idx) => (
                <li key={idx} style={{ marginBottom: '0.45rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{q.text}</span>
                    <span style={{ fontWeight: 600, paddingLeft: '0.5rem' }}>({q.marks !== undefined ? q.marks : 5})</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* PART C (Included for 70M Semester Exam or whenever Part C questions exist) */}
          {(partCQuestions.length > 0 || examType === 'Semester Exam') && (
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', borderBottom: '1px solid #000000', paddingBottom: '0.2rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>PART C — ({partCQuestions.length} x 8 = {totalPartC} Marks)</span>
                <span>{examType === 'Internal Exam' ? 'Answer the Question (1 x 8 = 8 Marks)' : 'Answer ALL Questions (Either / Or Pattern: 5 x 8 = 40 Marks)'}</span>
              </div>
              <ol start={partAQuestions.length + partBQuestions.length + 1} style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.86rem', lineHeight: 1.6 }}>
                {partCQuestions.map((q, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>{q.text}</span>
                      <span style={{ fontWeight: 600, paddingLeft: '0.5rem' }}>({q.marks !== undefined ? q.marks : 8})</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default QuestionPaperBuilder;
