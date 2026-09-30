import React, { useState } from 'react';
import { useAcademic } from '../context/AcademicContext';
import {
  CheckSquare,
  FileCheck,
  Eye,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  MessageSquare,
  Clock,
  User,
  BookOpen,
  Send
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';

export const Approval = () => {
  const { questionPapers, approveQuestionPaper, requestChangesQuestionPaper, showToast } = useAcademic();

  const [activeTab, setActiveTab] = useState('All'); // 'All' | 'Pending' | 'Approved' | 'Changes'

  // Inspect Modal State
  const [inspectPaper, setInspectPaper] = useState(null);

  // Request Changes Modal State
  const [requestChangePaper, setRequestChangePaper] = useState(null);
  const [changeReason, setChangeReason] = useState('');

  const filteredPapers = questionPapers.filter(paper => {
    if (activeTab === 'Pending') return paper.status === 'Submitted' || paper.status === 'Under Review';
    if (activeTab === 'Approved') return paper.status === 'Approved';
    if (activeTab === 'Changes') return paper.status === 'Changes Required';
    return true;
  });

  const handleApprove = (paperId) => {
    approveQuestionPaper(paperId, 'Approved by HOD. Ready for printing & examination.');
    if (inspectPaper && inspectPaper.id === paperId) {
      setInspectPaper(null);
    }
  };

  const handleSendChangeRequest = (e) => {
    e.preventDefault();
    if (!requestChangePaper || !changeReason.trim()) {
      showToast('Please provide a specific reason for requesting changes.', 'warning');
      return;
    }

    requestChangesQuestionPaper(requestChangePaper.id, changeReason.trim());
    setRequestChangePaper(null);
    setChangeReason('');
    if (inspectPaper) setInspectPaper(null);
  };

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <PageHeader
        title="Question Paper Assessment & Approvals"
        subtitle="HOD Academic Moderation Panel for vetting and approving institutional question papers"
        breadcrumbs={[
          { label: 'Dashboard', to: '/dashboard' },
          { label: 'HOD Approvals' }
        ]}
      />

      {/* Tabs Filter Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          borderBottom: '1px solid var(--border-light)',
          paddingBottom: '0.5rem'
        }}
      >
        {['All', 'Pending', 'Approved', 'Changes'].map((tab) => {
          const isActive = activeTab === tab;
          const count = questionPapers.filter(p => {
            if (tab === 'Pending') return p.status === 'Submitted' || p.status === 'Under Review';
            if (tab === 'Approved') return p.status === 'Approved';
            if (tab === 'Changes') return p.status === 'Changes Required';
            return true;
          }).length;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.86rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--primary-600)' : 'var(--text-secondary)',
                backgroundColor: isActive ? 'var(--primary-50)' : 'transparent',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span>{tab === 'Changes' ? 'Changes Required' : tab === 'Pending' ? 'Pending Review' : tab}</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isActive ? 'var(--primary-200)' : 'var(--bg-surface-hover)',
                  color: isActive ? 'var(--primary-800)' : 'var(--text-muted)'
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Question Papers List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredPapers.length === 0 ? (
          <div className="card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <FileCheck size={40} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
            <h4 style={{ margin: 0 }}>No question papers in this category</h4>
            <p style={{ fontSize: '0.85rem', margin: '0.25rem 0 0 0' }}>All submissions are currently processed.</p>
          </div>
        ) : (
          filteredPapers.map((paper) => {
            const isPending = paper.status === 'Submitted' || paper.status === 'Under Review';

            return (
              <div
                key={paper.id}
                className="card hover-lift"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  borderLeft: `4px solid ${paper.status === 'Approved' ? 'var(--success-500)' : paper.status === 'Changes Required' ? 'var(--danger-500)' : 'var(--warning-500)'}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{paper.title}</h3>
                      <Badge>{paper.status}</Badge>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <User size={14} /> Created by: <strong style={{ color: 'var(--text-primary)' }}>{paper.author || 'Prof. Alan Davis'}</strong>
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <BookOpen size={14} /> {paper.subject} ({paper.subjectCode})
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={14} /> {paper.duration} • {paper.maxMarks} Marks
                      </span>
                      <span>Submitted: {paper.createdDate}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={Eye}
                      onClick={() => setInspectPaper(paper)}
                    >
                      Inspect Blueprint
                    </Button>

                    {isPending && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          icon={RotateCcw}
                          onClick={() => setRequestChangePaper(paper)}
                          style={{ color: 'var(--warning-600)', borderColor: 'var(--warning-200)' }}
                        >
                          Request Changes
                        </Button>
                        <Button
                          variant="success"
                          size="sm"
                          icon={CheckCircle}
                          onClick={() => handleApprove(paper.id)}
                        >
                          Approve Paper
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                {/* HOD Feedback Banner if present */}
                {paper.hodFeedback && (
                  <div
                    style={{
                      padding: '0.65rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: paper.status === 'Approved' ? 'var(--success-50)' : 'var(--danger-50)',
                      border: `1px solid ${paper.status === 'Approved' ? 'var(--success-100)' : 'var(--danger-100)'}`,
                      fontSize: '0.84rem',
                      color: paper.status === 'Approved' ? 'var(--success-700)' : 'var(--danger-600)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <MessageSquare size={16} />
                    <span><strong>HOD Feedback Note:</strong> "{paper.hodFeedback}"</span>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Inspect Paper Modal */}
      <Modal
        isOpen={!!inspectPaper}
        onClose={() => setInspectPaper(null)}
        title={inspectPaper ? `${inspectPaper.title} - Full Paper Review` : ''}
        subtitle="Vetting Bloom taxonomy compliance and question difficulty balance"
        maxWidth="750px"
        icon={BookOpen}
        footer={
          inspectPaper && (inspectPaper.status === 'Submitted' || inspectPaper.status === 'Under Review') ? (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setRequestChangePaper(inspectPaper);
                }}
              >
                Request Changes
              </Button>
              <Button
                variant="success"
                size="sm"
                icon={CheckCircle}
                onClick={() => handleApprove(inspectPaper.id)}
              >
                Approve & Sign Off
              </Button>
            </>
          ) : (
            <Button variant="primary" size="sm" onClick={() => setInspectPaper(null)}>
              Close Review
            </Button>
          )
        }
      >
        {inspectPaper && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Meta summary card */}
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-light)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', fontSize: '0.84rem' }}>
              <div><strong>Subject:</strong> {inspectPaper.subject} ({inspectPaper.subjectCode})</div>
              <div><strong>Maximum Marks:</strong> {inspectPaper.maxMarks} Marks</div>
              <div><strong>Duration:</strong> {inspectPaper.duration}</div>
              <div><strong>Faculty:</strong> {inspectPaper.author}</div>
              <div><strong>Semester:</strong> {inspectPaper.semester}</div>
              <div><strong>Status:</strong> <Badge>{inspectPaper.status}</Badge></div>
            </div>

            {/* Questions breakdown */}
            <div>
              <h4 style={{ fontSize: '0.95rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.35rem', marginBottom: '0.75rem' }}>
                Included Examination Questions
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-600)' }}>
                  PART A — Short Answer Questions (5 x 2 = 10 Marks)
                </div>
                <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  1. List the 3 levels of ANSI/SPARC Database Architecture. (2M - Bloom: Remember)
                </div>
                <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  2. Define primary key and foreign key with relational schemas. (2M - Bloom: Remember)
                </div>

                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-600)', marginTop: '0.5rem' }}>
                  PART B — Analytical Questions (4 x 5 = 20 Marks)
                </div>
                <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  3. What is an Entity-Relationship (ER) model? Differentiate strong vs weak entity sets. (5M - Bloom: Understand)
                </div>
                <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  4. State and elaborate the ACID properties of database transactions. (5M - Bloom: Understand)
                </div>

                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary-600)', marginTop: '0.5rem' }}>
                  PART C — Comprehensive Essay (2 x 10 = 20 Marks)
                </div>
                <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  5. Explain the process of database normalization and describe 1NF, 2NF, 3NF, BCNF. (10M - Bloom: Analyze)
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Request Changes Modal */}
      <Modal
        isOpen={!!requestChangePaper}
        onClose={() => setRequestChangePaper(null)}
        title="Request Changes on Question Paper"
        subtitle={requestChangePaper ? `${requestChangePaper.title} • Submitted by ${requestChangePaper.author}` : ''}
        icon={RotateCcw}
      >
        <form onSubmit={handleSendChangeRequest}>
          <div className="form-group">
            <label className="form-label form-label-required">
              Specific Reason for Change / Faculty Instructions
            </label>
            <textarea
              className="form-textarea"
              rows="4"
              placeholder="e.g. Unit 3 questions lack Bloom Level 4 coverage. Please replace Q4 with an analytical normalization question..."
              value={changeReason}
              onChange={(e) => setChangeReason(e.target.value)}
              required
            />
            <span className="form-hint">
              This feedback will be pushed to the faculty's dashboard and notification feed.
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
            <Button variant="outline" size="sm" onClick={() => setRequestChangePaper(null)}>
              Cancel
            </Button>
            <Button type="submit" variant="danger" size="sm" icon={Send}>
              Send Change Request to Staff
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
