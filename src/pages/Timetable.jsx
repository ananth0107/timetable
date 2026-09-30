import React, { useState, useMemo } from 'react';
import { useAcademic } from '../context/AcademicContext';
import { useAuth } from '../context/AuthContext';
import {
  CalendarDays,
  Save,
  FileSpreadsheet,
  Edit2,
  Clock,
  Printer,
  BookOpen,
  Plus,
  Trash2,
  Check,
  Copy,
  LayoutGrid,
  Users,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { LoadingAnimation } from '../components/common/LoadingAnimation';
import { CS_PROGRAMS, MOCK_USERS, generateClassTimetable } from '../data/mockData';

export const Timetable = () => {
  const {
    programs = CS_PROGRAMS,
    addSection,
    deleteSection,
    subjects = [],
    addSubject,
    updateSubject,
    deleteSubject,
    classTimetables,
    getClassTimetable,
    createClassTimetable,
    generateAllDepartmentTimetables,
    clearClassTimetable,
    updateClassTimetableCell,
    swapClassTimetableCells,
    setSaturdayMode,
    SATURDAY_MODES,
    CS_TIMETABLE_SLOTS,
    CS_MORNING_SLOTS,
    showToast,
    users = []
  } = useAcademic();

  const { role, currentUser } = useAuth();
  const canEdit = role === 'admin' || role === 'hod';
  const facultyList = (users && users.length > 0 ? users : MOCK_USERS).filter(u => u.role === 'staff' || u.role === 'hod');

  // Active Class Selection
  const [selectedProgram, setSelectedProgram] = useState('UG_BSCCS');
  const [selectedYear, setSelectedYear] = useState('II');
  const [selectedSection, setSelectedSection] = useState('Section A');
  const [activeDegreeTab, setActiveDegreeTab] = useState('ALL'); // 'ALL' | 'UG' | 'PG'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'master'

  // Master Department View selected day
  const [masterDay, setMasterDay] = useState('MON');

  // Current Active Program & Timetable
  const currentProgram = programs.find(p => p.id === selectedProgram) || programs[0] || CS_PROGRAMS[0];
  const timetable = getClassTimetable(selectedProgram, selectedYear, selectedSection);
  const timetableSlots = timetable?.slots || CS_TIMETABLE_SLOTS;
  const timetableGrid = timetable?.grid || {};

  // Flat List of All Classes in Department
  const allDepartmentClasses = useMemo(() => {
    const list = [];
    programs.forEach(prog => {
      prog.years.forEach(yrObj => {
        prog.sections.forEach(sec => {
          const key = `${prog.id}_${yrObj.year}_${sec}`;
          const isUG = prog.id === 'UG_BSCCS';
          const tt = classTimetables?.[key];
          
          // Count assigned non-free periods
          let assignedCount = 0;
          if (tt && tt.grid) {
            Object.values(tt.grid).forEach(dayList => {
              dayList?.forEach(cell => {
                if (!cell.isBreak && !cell.isFree && cell.code) assignedCount++;
              });
            });
          }

          list.push({
            key,
            programId: prog.id,
            programName: prog.name,
            degree: prog.degree,
            isUG,
            year: yrObj.year,
            yearLabel: yrObj.label,
            section: sec,
            semester: yrObj.semesters?.[0] || 'Semester I',
            assignedCount,
            hasSchedule: assignedCount > 0
          });
        });
      });
    });
    return list;
  }, [programs, classTimetables]);

  const filteredClasses = useMemo(() => {
    if (activeDegreeTab === 'UG') return allDepartmentClasses.filter(c => c.isUG);
    if (activeDegreeTab === 'PG') return allDepartmentClasses.filter(c => !c.isUG);
    return allDepartmentClasses;
  }, [allDepartmentClasses, activeDegreeTab]);

  // Handle Class Switch
  const handleSelectClass = (cls) => {
    setSelectedProgram(cls.programId);
    setSelectedYear(cls.year);
    setSelectedSection(cls.section);
  };

  // Cell Edit Modal State
  const [editingCell, setEditingCell] = useState(null); // { day, periodIndex, data }
  const [editSubjectCode, setEditSubjectCode] = useState('');
  const [editSubjectName, setEditSubjectName] = useState('');
  const [editFaculty, setEditFaculty] = useState('');
  const [editRoom, setEditRoom] = useState('');
  const [editIsLab, setEditIsLab] = useState(false);
  const [editIsFree, setEditIsFree] = useState(false);

  // Subject Master Manager Modal State
  const [isSubjectManagerOpen, setIsSubjectManagerOpen] = useState(false);
  const [subjectManagerTab, setSubjectManagerTab] = useState('UG_BSCCS');
  const [editingSubjectObj, setEditingSubjectObj] = useState(null);
  const [newCode, setNewCode] = useState('');
  const [newName, setNewName] = useState('');
  const [newProgram, setNewProgram] = useState('UG_BSCCS');
  const [newSemester, setNewSemester] = useState('Semester IV');
  const [newYear, setNewYear] = useState('II');
  const [newCredits, setNewCredits] = useState(4);
  const [newType, setNewType] = useState('Theory');
  const [newFaculty, setNewFaculty] = useState(facultyList[0]?.name || 'Dr. Sarah Jenkins');

  // Timetable Creation Wizard Modal State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createProgram, setCreateProgram] = useState('UG_BSCCS');
  const [createYear, setCreateYear] = useState('I');
  const [createSection, setCreateSection] = useState('Section A');
  const [createSemester, setCreateSemester] = useState('Semester I');
  const [createShift, setCreateShift] = useState('AFTERNOON');
  const [createSaturdayMode, setCreateSaturdayMode] = useState('AFTERNOON');
  const [createMethod, setCreateMethod] = useState('ai'); // 'ai' | 'copy' | 'template' | 'blank'
  const [copySourceKey, setCopySourceKey] = useState('');

  // Section Management Modal State
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
  const [addSectionProgram, setAddSectionProgram] = useState('UG_BSCCS');
  const [newSectionName, setNewSectionName] = useState('');
  const [manageSectionTab, setManageSectionTab] = useState('ALL'); // 'ALL' | 'UG_BSCCS' | 'PG_MSCCS'
  const [deleteConfirmSection, setDeleteConfirmSection] = useState(null); // { programId, programName, sectionName }

  const totalSectionsCount = useMemo(() => {
    return programs.reduce((acc, p) => acc + (p.sections?.length || 0), 0);
  }, [programs]);

  // Batch Department Generation Progress Modal State
  const [isBatchGenerating, setIsBatchGenerating] = useState(false);
  const [batchStep, setBatchStep] = useState(0);
  const [batchComplete, setBatchComplete] = useState(false);

  // Drag and Drop
  const [dragSource, setDragSource] = useState(null);

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayNames = {
    MON: 'Monday',
    TUE: 'Tuesday',
    WED: 'Wednesday',
    THU: 'Thursday',
    FRI: 'Friday',
    SAT: 'Saturday'
  };

  const currentSaturdayMode = timetable?.saturdayMode || 'AFTERNOON';

  const getSlotTime = (day, pIdx) => {
    if (day === 'SAT' && currentSaturdayMode === 'MORNING' && CS_MORNING_SLOTS) {
      return CS_MORNING_SLOTS[pIdx]?.time || timetableSlots[pIdx]?.time || '';
    }
    return timetableSlots[pIdx]?.time || '';
  };

  // Open Cell Edit Modal
  const handleOpenEditModal = (day, periodIndex, cellData) => {
    if (cellData.isBreak) return;
    setEditingCell({ day, periodIndex, data: cellData });

    const matchedSub = subjects.find(s => s.code === cellData.code || s.name === cellData.subject) || subjects[0];
    setEditSubjectCode(matchedSub ? matchedSub.code : cellData.code || 'CS301');
    setEditSubjectName(matchedSub ? matchedSub.name : cellData.subject || 'DBMS');
    setEditFaculty(cellData.faculty || facultyList[0]?.name || 'Prof. Alan Davis');
    setEditRoom(cellData.room || (selectedProgram === 'UG_BSCCS' ? 'LH-201' : 'PG-Lab-1'));
    setEditIsLab(!!cellData.isLab);
    setEditIsFree(!!cellData.isFree);
  };

  const handleSubjectDropdownChange = (code) => {
    setEditSubjectCode(code);
    const found = subjects.find(s => s.code === code);
    if (found) {
      setEditSubjectName(found.name);
      setEditFaculty(found.faculty || editFaculty);
      setEditIsLab(found.type?.toLowerCase().includes('lab'));
    }
  };

  const handleSaveCell = (e) => {
    e.preventDefault();
    if (!editingCell) return;

    const colorMap = {
      CS101: '#3b82f6', CS102: '#06b6d4', CS201: '#8b5cf6',
      CS301: '#3b82f6', CS302: '#10b981', CS303: '#06b6d4',
      CS304: '#8b5cf6', CS305: '#f59e0b', CS306: '#ec4899',
      CS401: '#6366f1', CS402: '#0ea5e9',
      MCS101: '#8b5cf6', MCS102: '#3b82f6', MCS201: '#10b981',
      MCS202: '#f59e0b', MCS301: '#ec4899', MCS302: '#ef4444',
      MCS401: '#06b6d4'
    };

    const color = colorMap[editSubjectCode] || '#3b82f6';

    const updated = editIsFree
      ? { isFree: true, label: 'Free Period', subject: '', code: '', faculty: '', room: '', isLab: false }
      : {
          isFree: false,
          subject: editSubjectName,
          code: editSubjectCode,
          faculty: editFaculty,
          room: editRoom,
          isLab: editIsLab,
          color
        };

    updateClassTimetableCell(selectedProgram, selectedYear, selectedSection, editingCell.day, editingCell.periodIndex, updated);
    setEditingCell(null);
  };

  const handleCreateSubject = (e) => {
    e.preventDefault();
    if (!newCode.trim() || !newName.trim()) return;

    if (subjects.some(s => s.code.toLowerCase() === newCode.trim().toLowerCase())) {
      showToast(`Subject ${newCode} already exists!`, 'error');
      return;
    }

    addSubject({
      code: newCode.trim().toUpperCase(),
      name: newName.trim(),
      program: subjectManagerTab,
      programName: subjectManagerTab === 'UG_BSCCS' ? 'B.Sc. CS' : 'M.Sc. CS',
      semester: newSemester,
      year: newYear,
      credits: parseInt(newCredits, 10),
      type: newType,
      faculty: newFaculty
    });

    setNewCode('');
    setNewName('');
  };

  // Drag and drop handlers
  const handleDragStart = (e, day, index) => {
    if (!canEdit) return;
    setDragSource({ day, index });
    e.dataTransfer.setData('text/plain', JSON.stringify({ day, index }));
  };

  const handleDragOver = (e) => {
    if (canEdit) e.preventDefault();
  };

  const handleDrop = (e, targetDay, targetIndex) => {
    e.preventDefault();
    if (!canEdit || !dragSource) return;

    const { day: sourceDay, index: sourceIndex } = dragSource;
    if (sourceDay === targetDay && sourceIndex === targetIndex) return;

    const sourceCell = timetableGrid[sourceDay]?.[sourceIndex] || {};
    const targetCell = timetableGrid[targetDay]?.[targetIndex] || {};

    if (sourceCell.isBreak || targetCell.isBreak) {
      showToast('Cannot swap break interval!', 'warning');
      return;
    }

    swapClassTimetableCells(selectedProgram, selectedYear, selectedSection, sourceDay, sourceIndex, targetDay, targetIndex);
    setDragSource(null);
  };

  // Create Timetable Form Submission
  const handleCreateTimetableSubmit = (e) => {
    e.preventDefault();
    createClassTimetable({
      programId: createProgram,
      year: createYear,
      section: createSection,
      semester: createSemester,
      shift: createShift,
      saturdayMode: createSaturdayMode,
      creationMethod: createMethod,
      copyFromKey: copySourceKey
    });

    setSelectedProgram(createProgram);
    setSelectedYear(createYear);
    setSelectedSection(createSection);
    setIsCreateModalOpen(false);
  };

  // Batch Department Generation Process
  const batchSteps = [
    'Analyzing curriculum requirements across all 8 classes...',
    'Assigning lecture halls & laboratory facilities...',
    'Resolving faculty timetable clashes & room overlaps...',
    'Distributing balanced theory and lab credit hours...',
    'Finalizing master conflict-free schedules for all classes...'
  ];

  const handleStartBatchGeneration = () => {
    setIsBatchGenerating(true);
    setBatchComplete(false);
    setBatchStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < batchSteps.length) {
        setBatchStep(step);
      } else {
        clearInterval(interval);
        setBatchComplete(true);
      }
    }, 600);
  };

  const handleApplyBatchGeneration = () => {
    generateAllDepartmentTimetables();
    setIsBatchGenerating(false);
    setBatchComplete(false);
  };

  // Add Section Submission
  const handleAddSectionSubmit = (e) => {
    e.preventDefault();
    if (!newSectionName.trim()) return;
    const trimmed = newSectionName.trim();
    addSection(addSectionProgram, trimmed);
    setNewSectionName('');
    
    // Auto-select the program to view the newly added section
    setSelectedProgram(addSectionProgram);
    setSelectedSection(trimmed);
  };

  // Delete Section Action (Admin)
  const handleDeleteSection = (programId, sectionName) => {
    const prog = programs.find(p => p.id === programId) || CS_PROGRAMS.find(p => p.id === programId);
    if (!prog) return;

    if (prog.sections.length <= 1) {
      showToast(`Cannot delete section. ${prog.name} must have at least one section.`, 'error');
      setDeleteConfirmSection(null);
      return;
    }

    deleteSection(programId, sectionName);
    
    // If currently selected section is deleted, switch to the remaining section
    if (selectedProgram === programId && selectedSection === sectionName) {
      const remaining = prog.sections.filter(s => s !== sectionName);
      if (remaining.length > 0) {
        setSelectedSection(remaining[0]);
      }
    }
    setDeleteConfirmSection(null);
  };

  // Export CSV
  const handleExportCSV = () => {
    let csv = `Timetable: ${currentProgram.name} - ${selectedYear} Year (${selectedSection})\n`;
    csv += 'Day,' + timetableSlots.map(s => s.isBreak ? 'Interval' : `Period ${s.period} (${s.time})`).join(',') + '\n';

    days.forEach(day => {
      const row = timetableGrid[day] || [];
      const cells = row.map(c => {
        if (c.isBreak) return 'Interval (15m)';
        if (c.isFree) return 'Free Period';
        return `"${c.code || ''}: ${c.subject || ''} (${c.faculty || ''} - ${c.room || ''})"`;
      });
      csv += `${dayNames[day]},${cells.join(',')}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Timetable_${selectedProgram}_${selectedYear}_${selectedSection}.csv`;
    a.click();
    showToast('Timetable exported as CSV', 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  const activeProgramSubjects = subjects.filter(s => s.program === selectedProgram);

  return (
    <div className="page-enter" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Clean Page Header */}
      <PageHeader
        title="Class Timetables"
        subtitle="Department of Computer Science • Manage, view and create weekly schedules for every class"
        breadcrumbs={[
          { label: 'Portal', to: '/timetable' },
          { label: 'Timetables' }
        ]}
        actions={
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {canEdit && (
              <>
                <Button
                  variant="primary"
                  size="sm"
                  icon={Plus}
                  onClick={() => {
                    setCreateProgram(selectedProgram);
                    setCreateYear(selectedYear);
                    setCreateSection(selectedSection);
                    setIsCreateModalOpen(true);
                  }}
                  style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
                >
                  Create Timetable
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  icon={Sparkles}
                  onClick={handleStartBatchGeneration}
                  style={{ color: '#7c3aed', backgroundColor: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.25)' }}
                >
                  Auto-Generate All Classes
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  icon={BookOpen}
                  onClick={() => setIsSubjectManagerOpen(true)}
                >
                  Subjects ({subjects.length})
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  icon={Users}
                  onClick={() => setIsAddSectionOpen(true)}
                  title="Add or Delete Sections"
                  style={{ color: '#2563eb', borderColor: 'rgba(37, 99, 235, 0.3)', backgroundColor: 'rgba(37, 99, 235, 0.04)' }}
                >
                  Manage Sections ({totalSectionsCount})
                </Button>
              </>
            )}

            <Button
              variant="outline"
              size="sm"
              icon={FileSpreadsheet}
              onClick={handleExportCSV}
            >
              Export
            </Button>

            <Button
              variant="outline"
              size="sm"
              icon={Printer}
              onClick={handlePrint}
            >
              Print
            </Button>
          </div>
        }
      />

      {/* Class Switcher Ribbon - Selector for EVERY Class in Department */}
      <div
        className="card"
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Top Filter Tabs: All, UG, PG */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: '0.35rem' }}>
              Filter Degree:
            </span>
            <button
              onClick={() => setActiveDegreeTab('ALL')}
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 600,
                backgroundColor: activeDegreeTab === 'ALL' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: activeDegreeTab === 'ALL' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s'
              }}
            >
              All Classes ({allDepartmentClasses.length})
            </button>
            <button
              onClick={() => setActiveDegreeTab('UG')}
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 600,
                backgroundColor: activeDegreeTab === 'UG' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: activeDegreeTab === 'UG' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s'
              }}
            >
              B.Sc. Computer Science (UG)
            </button>
            <button
              onClick={() => setActiveDegreeTab('PG')}
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 600,
                backgroundColor: activeDegreeTab === 'PG' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: activeDegreeTab === 'PG' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s'
              }}
            >
              M.Sc. Computer Science (PG)
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'master' : 'grid')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-surface-hover)',
                color: 'var(--text-primary)',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <LayoutGrid size={14} />
              <span>{viewMode === 'grid' ? 'Master Overview Matrix' : 'Single Class View'}</span>
            </button>

            {canEdit && (
              <button
                onClick={() => setIsAddSectionOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px dashed var(--primary-400)',
                  backgroundColor: 'rgba(37, 99, 235, 0.06)',
                  color: 'var(--primary-600)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                title="Add or Delete sections in timetable"
              >
                <Users size={13} />
                <span>Manage Sections (+ / -)</span>
              </button>
            )}
          </div>
        </div>

        {/* Clean Class Pills / Badges Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
            gap: '0.5rem'
          }}
        >
          {filteredClasses.map(cls => {
            const isSelected = selectedProgram === cls.programId && selectedYear === cls.year && selectedSection === cls.section;
            return (
              <div
                key={cls.key}
                onClick={() => handleSelectClass(cls)}
                style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #2563eb' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-surface-hover)',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}
                className="hover-lift"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isSelected ? '#2563eb' : 'var(--text-secondary)' }}>
                    {cls.degree} • Year {cls.year}
                  </span>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: cls.hasSchedule ? '#10b981' : '#94a3b8'
                    }}
                    title={cls.hasSchedule ? 'Schedule Active' : 'Draft / Empty'}
                  />
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {cls.section}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  {cls.hasSchedule ? `${cls.assignedCount} periods scheduled` : 'No periods'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Master Overview Matrix View */}
      {viewMode === 'master' ? (
        <div className="card" style={{ padding: '1.25rem', borderRadius: 'var(--radius-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>
                Department Master Timetable Matrix
              </h3>
              <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Comparing all class schedules simultaneously to verify zero faculty collisions
              </p>
            </div>

            {/* Day Switcher */}
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              {days.map(d => (
                <button
                  key={d}
                  onClick={() => setMasterDay(d)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    backgroundColor: masterDay === d ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                    color: masterDay === d ? '#ffffff' : 'var(--text-primary)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'center' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-surface-hover)', borderBottom: '2px solid var(--border-medium)' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', minWidth: '150px' }}>Class / Section</th>
                  {CS_TIMETABLE_SLOTS.map((slot, idx) => (
                    <th key={idx} style={{ padding: '0.75rem 0.5rem', minWidth: slot.isBreak ? '70px' : '130px' }}>
                      <div>{slot.isBreak ? 'Interval' : `Period ${slot.period}`}</div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 400, color: 'var(--text-muted)' }}>{slot.time}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allDepartmentClasses.map(cls => {
                  const tt = classTimetables?.[cls.key] || generateClassTimetable(cls.programId, cls.year, cls.section, true);
                  const row = tt?.grid?.[masterDay] || [];
                  return (
                    <tr key={cls.key} style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600, backgroundColor: 'var(--bg-surface)' }}>
                        <div>{cls.programName}</div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--primary-600)' }}>Year {cls.year} • {cls.section}</div>
                      </td>
                      {row.map((cell, pIdx) => {
                        if (cell.isBreak) {
                          return (
                            <td key={pIdx} style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-light)', fontSize: '0.72rem' }}>
                              Break
                            </td>
                          );
                        }
                        if (cell.isFree) {
                          return (
                            <td key={pIdx} style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-light)', fontStyle: 'italic' }}>
                              Free
                            </td>
                          );
                        }
                        return (
                          <td key={pIdx} style={{ padding: '0.5rem', backgroundColor: `${cell.color || '#3b82f6'}10` }}>
                            <div style={{ fontWeight: 700, color: cell.color || '#2563eb' }}>{cell.code}</div>
                            <div style={{ fontSize: '0.74rem', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '120px' }}>
                              {cell.subject}
                            </div>
                            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{cell.faculty?.split(' ')[1] || cell.faculty}</div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Single Active Class Timetable View */
        <>
          {/* Active Class Strip with Controls */}
          <div
            className="card"
            style={{
              padding: '0.85rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.85rem',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {currentProgram.name} — Year {selectedYear} ({selectedSection})
              </div>
              <Badge variant="primary">{timetable.semester}</Badge>
              <Badge variant="success">0 Clashes</Badge>
            </div>

            {/* Saturday Shift & Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Saturday:
              </span>
              {canEdit ? (
                <div
                  style={{
                    display: 'inline-flex',
                    backgroundColor: 'var(--bg-app)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.15rem',
                    border: '1px solid var(--border-light)',
                    gap: '0.15rem'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSaturdayMode(selectedProgram, selectedYear, selectedSection, 'AFTERNOON')}
                    style={{
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-sm)',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: currentSaturdayMode === 'AFTERNOON' ? '#16a34a' : 'transparent',
                      color: currentSaturdayMode === 'AFTERNOON' ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.15s'
                    }}
                  >
                    Afternoon
                  </button>

                  <button
                    type="button"
                    onClick={() => setSaturdayMode(selectedProgram, selectedYear, selectedSection, 'MORNING')}
                    style={{
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-sm)',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: currentSaturdayMode === 'MORNING' ? '#d97706' : 'transparent',
                      color: currentSaturdayMode === 'MORNING' ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.15s'
                    }}
                  >
                    Morning Special
                  </button>

                  <button
                    type="button"
                    onClick={() => setSaturdayMode(selectedProgram, selectedYear, selectedSection, 'OFF')}
                    style={{
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-sm)',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: currentSaturdayMode === 'OFF' ? '#64748b' : 'transparent',
                      color: currentSaturdayMode === 'OFF' ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all 0.15s'
                    }}
                  >
                    Off / Holiday
                  </button>
                </div>
              ) : (
                <Badge variant={currentSaturdayMode === 'AFTERNOON' ? 'success' : currentSaturdayMode === 'MORNING' ? 'warning' : 'neutral'}>
                  {currentSaturdayMode === 'AFTERNOON' ? 'Afternoon' : currentSaturdayMode === 'MORNING' ? 'Morning' : 'Off'}
                </Badge>
              )}

              {canEdit && (
                <button
                  onClick={() => clearClassTimetable(selectedProgram, selectedYear, selectedSection)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-surface-hover)',
                    color: '#ef4444',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  title="Clear periods for this class"
                >
                  <Trash2 size={13} />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>

          {/* Interactive Timetable Grid */}
          <div
            className="card"
            style={{
              padding: '0',
              overflowX: 'auto',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <table
              style={{
                width: '100%',
                minWidth: '920px',
                borderCollapse: 'collapse',
                textAlign: 'center'
              }}
            >
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-900)', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem', width: '110px', fontSize: '0.84rem', fontWeight: 700, borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                    DAY
                  </th>
                  {timetableSlots.map((slot, idx) => (
                    <th
                      key={idx}
                      style={{
                        padding: '0.8rem 0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        borderRight: '1px solid rgba(255,255,255,0.1)',
                        backgroundColor: slot.isBreak ? 'rgba(0,0,0,0.25)' : 'transparent',
                        width: slot.isBreak ? '80px' : 'auto'
                      }}
                    >
                      <div>{slot.isBreak ? 'INTERVAL' : `PERIOD ${slot.period}`}</div>
                      <div style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: 400, marginTop: '0.1rem' }}>
                        {slot.time}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {days.map((day) => (
                  <tr key={day} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    {/* Day Column */}
                    <td
                      style={{
                        padding: '0.75rem 0.5rem',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        backgroundColor: 'var(--bg-surface)',
                        borderRight: '1px solid var(--border-light)',
                        color: 'var(--text-primary)',
                        minWidth: '100px'
                      }}
                    >
                      <div>{day}</div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                        {dayNames[day]}
                      </div>
                    </td>

                    {/* Periods */}
                    {day === 'SAT' && currentSaturdayMode === 'OFF' ? (
                      <td
                        colSpan={timetableSlots.length}
                        style={{
                          padding: '1.25rem',
                          backgroundColor: 'var(--bg-app)',
                          color: 'var(--text-muted)',
                          fontSize: '0.84rem',
                          fontStyle: 'italic',
                          borderRight: '1px solid var(--border-light)'
                        }}
                      >
                        🏖️ Weekend Off / No classes scheduled
                      </td>
                    ) : (
                      (timetableGrid[day] || []).map((cell, periodIdx) => {
                        if (cell.isBreak) {
                          return (
                            <td
                              key={periodIdx}
                              style={{
                                backgroundColor: 'var(--bg-surface-hover)',
                                borderRight: '1px solid var(--border-light)',
                                color: 'var(--text-muted)',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                letterSpacing: '0.1em',
                                padding: '0.5rem 0'
                              }}
                            >
                              INTERVAL (15m)
                            </td>
                          );
                        }

                        if (cell.isFree) {
                          return (
                            <td
                              key={periodIdx}
                              onClick={() => canEdit && handleOpenEditModal(day, periodIdx, cell)}
                              onDragOver={handleDragOver}
                              onDrop={(e) => handleDrop(e, day, periodIdx)}
                              style={{
                                padding: '0.45rem',
                                borderRight: '1px solid var(--border-light)',
                                backgroundColor: 'var(--bg-surface)',
                                cursor: canEdit ? 'pointer' : 'default',
                                verticalAlign: 'middle'
                              }}
                            >
                              <div
                                style={{
                                  border: '1px dashed var(--border-medium)',
                                  borderRadius: 'var(--radius-md)',
                                  padding: '0.65rem 0.45rem',
                                  color: 'var(--text-light)',
                                  fontSize: '0.76rem',
                                  fontWeight: 500,
                                  minHeight: '76px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '0.2rem'
                                }}
                              >
                                <Clock size={15} style={{ opacity: 0.5 }} />
                                <span>{cell.label || 'Free'}</span>
                                {canEdit && (
                                  <span style={{ fontSize: '0.66rem', color: 'var(--primary-600)', fontWeight: 600 }}>
                                    + Assign
                                  </span>
                                )}
                              </div>
                            </td>
                          );
                        }

                        return (
                          <td
                            key={periodIdx}
                            draggable={canEdit}
                            onDragStart={(e) => handleDragStart(e, day, periodIdx)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, day, periodIdx)}
                            onClick={() => handleOpenEditModal(day, periodIdx, cell)}
                            style={{
                              padding: '0.4rem',
                              borderRight: '1px solid var(--border-light)',
                              backgroundColor: 'var(--bg-surface)',
                              cursor: canEdit ? 'grab' : 'pointer',
                              verticalAlign: 'top'
                            }}
                            className="hover-lift"
                          >
                            <div
                              style={{
                                borderRadius: 'var(--radius-md)',
                                padding: '0.6rem 0.5rem',
                                border: `1px solid ${cell.color || 'var(--primary-300)'}`,
                                backgroundColor: `${cell.color || '#3b82f6'}12`,
                                minHeight: '78px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                textAlign: 'left'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.2rem' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: cell.color || 'var(--primary-600)' }}>
                                  {cell.code}
                                </span>
                                {cell.isLab && (
                                  <span
                                    style={{
                                      fontSize: '0.62rem',
                                      fontWeight: 700,
                                      backgroundColor: 'var(--accent-purple)',
                                      color: '#ffffff',
                                      padding: '0.08rem 0.3rem',
                                      borderRadius: 'var(--radius-xs)',
                                      textTransform: 'uppercase'
                                    }}
                                  >
                                    LAB
                                  </span>
                                )}
                              </div>

                              <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-primary)', margin: '0.15rem 0' }}>
                                {cell.subject}
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85px' }}>
                                  {cell.faculty?.split(' ')[1] || cell.faculty}
                                </span>
                                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
                                  {cell.room}
                                </span>
                              </div>
                            </div>
                          </td>
                        );
                      })
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* CREATE CLASS TIMETABLE WIZARD MODAL */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create Class Timetable"
        subtitle="Configure weekly schedule for any class in the department"
        icon={CalendarDays}
        size="md"
      >
        <form onSubmit={handleCreateTimetableSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Target Class Selection */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required">Degree Program</label>
              <select
                className="form-select"
                value={createProgram}
                onChange={(e) => {
                  const newProgId = e.target.value;
                  setCreateProgram(newProgId);
                  const progObj = programs.find(p => p.id === newProgId);
                  const availableSecs = progObj?.sections || ['Section A'];
                  if (!availableSecs.includes(createSection)) {
                    setCreateSection(availableSecs[0]);
                  }
                }}
              >
                {programs.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required">Academic Year</label>
              <select
                className="form-select"
                value={createYear}
                onChange={(e) => setCreateYear(e.target.value)}
              >
                <option value="I">Year I</option>
                <option value="II">Year II</option>
                {createProgram === 'UG_BSCCS' && <option value="III">Year III</option>}
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required">Section</label>
              <select
                className="form-select"
                value={createSection}
                onChange={(e) => setCreateSection(e.target.value)}
              >
                {(programs.find(p => p.id === createProgram)?.sections || ['Section A']).map(sec => (
                  <option key={sec} value={sec}>{sec}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Shift & Saturday Mode */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Shift Timings</label>
              <select
                className="form-select"
                value={createShift}
                onChange={(e) => setCreateShift(e.target.value)}
              >
                <option value="AFTERNOON">Afternoon Shift (01:45 PM – 06:20 PM)</option>
                <option value="MORNING">Morning Shift (08:45 AM – 01:20 PM)</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Saturday Policy</label>
              <select
                className="form-select"
                value={createSaturdayMode}
                onChange={(e) => setCreateSaturdayMode(e.target.value)}
              >
                <option value="AFTERNOON">Afternoon (Attendance Counted)</option>
                <option value="MORNING">Morning Special (Remedial)</option>
                <option value="OFF">Weekend Off</option>
              </select>
            </div>
          </div>

          {/* Creation Method Selection */}
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label form-label-required">Creation Method</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              <div
                onClick={() => setCreateMethod('ai')}
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: createMethod === 'ai' ? '2px solid #2563eb' : '1px solid var(--border-light)',
                  backgroundColor: createMethod === 'ai' ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-surface-hover)',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                <Sparkles size={18} style={{ color: '#2563eb', marginBottom: '0.25rem' }} />
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>AI Generate</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Conflict-free schedule</div>
              </div>

              <div
                onClick={() => setCreateMethod('copy')}
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: createMethod === 'copy' ? '2px solid #2563eb' : '1px solid var(--border-light)',
                  backgroundColor: createMethod === 'copy' ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-surface-hover)',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                <Copy size={18} style={{ color: '#7c3aed', marginBottom: '0.25rem' }} />
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Copy Class</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Clone another section</div>
              </div>

              <div
                onClick={() => setCreateMethod('blank')}
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: createMethod === 'blank' ? '2px solid #2563eb' : '1px solid var(--border-light)',
                  backgroundColor: createMethod === 'blank' ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-surface-hover)',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                <Plus size={18} style={{ color: '#10b981', marginBottom: '0.25rem' }} />
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Blank Grid</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Assign manually</div>
              </div>
            </div>
          </div>

          {/* If Copy selected, show source class picker */}
          {createMethod === 'copy' && (
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label form-label-required">Select Source Class to Copy From</label>
              <select
                className="form-select"
                value={copySourceKey}
                onChange={(e) => setCopySourceKey(e.target.value)}
                required
              >
                <option value="">-- Choose Class --</option>
                {allDepartmentClasses.map(c => (
                  <option key={c.key} value={c.key}>
                    {c.programName} - Year {c.year} ({c.section})
                  </option>
                ))}
              </select>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
            <Button variant="outline" size="sm" onClick={() => setIsCreateModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" icon={Check}>
              Create & Apply Schedule
            </Button>
          </div>
        </form>
      </Modal>

      {/* BATCH GENERATE ALL DEPARTMENT TIMETABLES MODAL */}
      <Modal
        isOpen={isBatchGenerating}
        onClose={() => !isBatchGenerating && setIsBatchGenerating(false)}
        title="Department AI Timetable Synthesizer"
        subtitle="Multi-class constraint solver across all classes in Department of Computer Science"
        icon={Sparkles}
      >
        <div style={{ padding: '1rem 0', textAlign: 'center' }}>
          {!batchComplete ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <LoadingAnimation size="lg" text="Optimizing Department Schedules..." />
              <div style={{ width: '100%', maxWidth: '380px', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-full)', height: '8px', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${((batchStep + 1) / batchSteps.length) * 100}%`,
                    backgroundColor: 'var(--primary-600)',
                    transition: 'width 0.4s ease'
                  }}
                />
              </div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {batchSteps[batchStep]}
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--success-50)', color: 'var(--success-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={30} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                Master Timetables Ready!
              </h3>
              <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', maxWidth: '380px' }}>
                Synthesized 0-conflict schedules for all 8 classes in B.Sc. CS & M.Sc. CS. No faculty collisions found.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <Button variant="outline" size="sm" onClick={() => setIsBatchGenerating(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" icon={Check} onClick={handleApplyBatchGeneration}>
                  Apply to All Department Classes
                </Button>
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* MANAGE & DELETE SECTIONS MODAL */}
      <Modal
        isOpen={isAddSectionOpen}
        onClose={() => {
          setIsAddSectionOpen(false);
          setDeleteConfirmSection(null);
        }}
        title="Manage Department Class Sections"
        subtitle={`Add new sections or delete existing class sections • ${totalSectionsCount} Active Sections in CS Dept`}
        icon={Users}
        maxWidth="720px"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Degree Filter Tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.65rem' }}>
            <button
              type="button"
              onClick={() => setManageSectionTab('ALL')}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                backgroundColor: manageSectionTab === 'ALL' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: manageSectionTab === 'ALL' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
            >
              All Degree Programs ({programs.length})
            </button>
            {programs.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => setManageSectionTab(p.id)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  backgroundColor: manageSectionTab === p.id ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                  color: manageSectionTab === p.id ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                {p.name} ({p.sections.length} Sec)
              </button>
            ))}
          </div>

          {/* 1. Add New Section Card */}
          {canEdit && (
            <form onSubmit={handleAddSectionSubmit} style={{ padding: '1.1rem', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Plus size={16} style={{ color: 'var(--primary-600)' }} />
                  <span>Add New Class Section</span>
                </div>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Auto-generates weekly timetable slots for all years
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.3fr auto', gap: '0.75rem', alignItems: 'flex-end' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.76rem', fontWeight: 600 }}>Degree Program</label>
                  <select
                    className="form-select"
                    value={addSectionProgram}
                    onChange={(e) => setAddSectionProgram(e.target.value)}
                    style={{ fontSize: '0.82rem', padding: '0.5rem 0.65rem' }}
                  >
                    {programs.map(p => (
                      <option key={p.id} value={p.id}>{p.name} ({p.level})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.76rem', fontWeight: 600 }}>New Section Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={newSectionName}
                    onChange={(e) => setNewSectionName(e.target.value)}
                    placeholder="e.g. Section C or Shift II - Section A"
                    style={{ fontSize: '0.82rem', padding: '0.5rem 0.65rem' }}
                    required
                  />
                </div>

                <Button type="submit" variant="primary" size="sm" icon={Plus} style={{ height: '38px', minWidth: '100px' }}>
                  Add Section
                </Button>
              </div>

              {/* Quick Suggestions */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Quick Presets:</span>
                {['Section C', 'Section D', 'Shift II - Section A', 'Shift II - Section B', 'Honors Section'].map((sug, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setNewSectionName(sug)}
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px dashed var(--border-medium)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--primary-700)',
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    + {sug}
                  </button>
                ))}
              </div>
            </form>
          )}

          {/* 2. Existing Sections List with Delete Button */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Registered Class Sections & Schedules:
              </div>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                Admin can add or delete sections. Min 1 section required per program.
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '340px', overflowY: 'auto', paddingRight: '0.25rem' }}>
              {programs
                .filter(prog => manageSectionTab === 'ALL' || prog.id === manageSectionTab)
                .map(prog => (
                  <div
                    key={prog.id}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1rem',
                      backgroundColor: 'var(--bg-surface)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <div>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-700)' }}>
                          {prog.name}
                        </span>
                        <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                          • {prog.years.length} Academic Years ({prog.years.map(y => `Yr ${y.year}`).join(', ')})
                        </span>
                      </div>
                      <Badge variant="primary" size="sm">
                        {prog.sections.length} {prog.sections.length === 1 ? 'Section' : 'Sections'} Active
                      </Badge>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {prog.sections.map(sec => {
                        // Count scheduled periods for this section across all years in this program
                        let totalScheduledInSec = 0;
                        prog.years.forEach(y => {
                          const k = `${prog.id}_${y.year}_${sec}`;
                          const tt = classTimetables?.[k];
                          if (tt && tt.grid) {
                            Object.values(tt.grid).forEach(dayList => {
                              dayList?.forEach(c => {
                                if (!c.isBreak && !c.isFree && c.code) totalScheduledInSec++;
                              });
                            });
                          }
                        });

                        const isConfirmingThis = deleteConfirmSection?.programId === prog.id && deleteConfirmSection?.sectionName === sec;

                        return (
                          <div
                            key={sec}
                            style={{
                              padding: '0.65rem 0.85rem',
                              backgroundColor: 'var(--bg-surface-hover)',
                              borderRadius: 'var(--radius-md)',
                              border: isConfirmingThis ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.5rem',
                              transition: 'all 0.15s'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                <div style={{
                                  width: '28px',
                                  height: '28px',
                                  borderRadius: 'var(--radius-sm)',
                                  backgroundColor: 'rgba(37, 99, 235, 0.1)',
                                  color: 'var(--primary-600)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '0.8rem',
                                  fontWeight: 700
                                }}>
                                  {sec.includes('Section') ? sec.replace('Section', '').trim() || 'S' : sec.charAt(0)}
                                </div>
                                <div>
                                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                    {sec}
                                  </span>
                                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                                    Applies to: {prog.years.map(y => `Year ${y.year}`).join(', ')} • {totalScheduledInSec} periods scheduled
                                  </div>
                                </div>
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedProgram(prog.id);
                                    setSelectedSection(sec);
                                    setIsAddSectionOpen(false);
                                  }}
                                  style={{
                                    border: '1px solid var(--border-medium)',
                                    backgroundColor: 'var(--bg-surface)',
                                    color: 'var(--text-primary)',
                                    padding: '0.3rem 0.65rem',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.74rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                  }}
                                  title="View timetable for this section"
                                >
                                  View Timetable
                                </button>

                                {canEdit && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (prog.sections.length <= 1) {
                                        showToast(`Cannot delete section. ${prog.name} must have at least one section.`, 'error');
                                        return;
                                      }
                                      setDeleteConfirmSection({
                                        programId: prog.id,
                                        programName: prog.name,
                                        sectionName: sec
                                      });
                                    }}
                                    disabled={prog.sections.length <= 1}
                                    style={{
                                      border: '1px solid rgba(239, 68, 68, 0.25)',
                                      backgroundColor: 'rgba(239, 68, 68, 0.04)',
                                      color: prog.sections.length <= 1 ? 'var(--text-muted)' : '#ef4444',
                                      cursor: prog.sections.length <= 1 ? 'not-allowed' : 'pointer',
                                      padding: '0.3rem 0.65rem',
                                      borderRadius: 'var(--radius-sm)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '0.3rem',
                                      fontSize: '0.74rem',
                                      fontWeight: 600,
                                      opacity: prog.sections.length <= 1 ? 0.4 : 1
                                    }}
                                    title={prog.sections.length <= 1 ? 'Cannot delete the only remaining section' : `Delete ${sec}`}
                                  >
                                    <Trash2 size={13} />
                                    <span>Delete Section</span>
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Inline Deletion Confirmation Box */}
                            {isConfirmingThis && (
                              <div
                                style={{
                                  marginTop: '0.35rem',
                                  padding: '0.75rem',
                                  borderRadius: 'var(--radius-sm)',
                                  backgroundColor: 'rgba(239, 68, 68, 0.08)',
                                  border: '1px solid rgba(239, 68, 68, 0.3)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  flexWrap: 'wrap',
                                  gap: '0.5rem'
                                }}
                              >
                                <div style={{ fontSize: '0.78rem', color: '#b91c1c', fontWeight: 600 }}>
                                  ⚠️ Permanently delete "{sec}" from {prog.name}? All weekly timetables for this section will be removed.
                                </div>
                                <div style={{ display: 'flex', gap: '0.4rem' }}>
                                  <button
                                    type="button"
                                    onClick={() => setDeleteConfirmSection(null)}
                                    style={{
                                      padding: '0.25rem 0.6rem',
                                      borderRadius: 'var(--radius-xs)',
                                      border: '1px solid var(--border-medium)',
                                      backgroundColor: 'var(--bg-surface)',
                                      fontSize: '0.74rem',
                                      fontWeight: 600,
                                      cursor: 'pointer'
                                    }}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteSection(prog.id, sec)}
                                    style={{
                                      padding: '0.25rem 0.65rem',
                                      borderRadius: 'var(--radius-xs)',
                                      border: 'none',
                                      backgroundColor: '#dc2626',
                                      color: '#ffffff',
                                      fontSize: '0.74rem',
                                      fontWeight: 700,
                                      cursor: 'pointer'
                                    }}
                                  >
                                    Confirm Delete
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem' }}>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setIsAddSectionOpen(false);
                setDeleteConfirmSection(null);
              }}
            >
              Done
            </Button>
          </div>
        </div>
      </Modal>

      {/* EDIT PERIOD CELL MODAL */}
      <Modal
        isOpen={!!editingCell}
        onClose={() => setEditingCell(null)}
        title={canEdit ? `Edit Period — ${selectedYear} Year (${selectedSection})` : `Lecture Session Details`}
        subtitle={editingCell ? `${editingCell.day} • ${timetableSlots[editingCell.periodIndex]?.isBreak ? 'Interval (15m)' : `Period ${timetableSlots[editingCell.periodIndex]?.period || editingCell.periodIndex + 1}`} (${getSlotTime(editingCell.day, editingCell.periodIndex)})` : ''}
        icon={canEdit ? Edit2 : BookOpen}
      >
        {canEdit ? (
          <form onSubmit={handleSaveCell}>
            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginBottom: '0.5rem' }}>
                <input
                  type="checkbox"
                  checked={editIsFree}
                  onChange={(e) => setEditIsFree(e.target.checked)}
                />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Mark as Free / Mentoring Period</span>
              </label>
            </div>

            {!editIsFree && (
              <>
                <div className="form-group">
                  <label className="form-label form-label-required">Curriculum Subject Course</label>
                  <select
                    className="form-select"
                    value={editSubjectCode}
                    onChange={(e) => handleSubjectDropdownChange(e.target.value)}
                    required
                  >
                    <optgroup label={`${currentProgram.name} Courses`}>
                      {activeProgramSubjects.map(sub => (
                        <option key={sub.code} value={sub.code}>
                          {sub.code} - {sub.name} ({sub.semester})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Other CS Courses">
                      {subjects.filter(s => s.program !== selectedProgram).map(sub => (
                        <option key={sub.code} value={sub.code}>
                          {sub.code} - {sub.name} ({sub.programName || sub.program})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label form-label-required">Assigned Professor</label>
                  <select
                    className="form-select"
                    value={editFaculty}
                    onChange={(e) => setEditFaculty(e.target.value)}
                    required
                  >
                    {facultyList.map(user => (
                      <option key={user.id} value={user.name}>
                        {user.name} ({user.designation})
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div className="form-group">
                    <label className="form-label form-label-required">Venue / Room</label>
                    <input
                      type="text"
                      className="form-input"
                      value={editRoom}
                      onChange={(e) => setEditRoom(e.target.value)}
                      placeholder="e.g. LH-201 or Lab-3"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Period Type</label>
                    <select
                      className="form-select"
                      value={editIsLab ? 'lab' : 'theory'}
                      onChange={(e) => setEditIsLab(e.target.value === 'lab')}
                    >
                      <option value="theory">Theory Lecture</option>
                      <option value="lab">Practical Laboratory</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
              <Button variant="outline" size="sm" onClick={() => setEditingCell(null)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" icon={Save}>
                Save Allocation
              </Button>
            </div>
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>
                {editingCell?.data?.subject} ({editingCell?.data?.code})
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.82rem' }}>
                <div><strong>Class:</strong> {selectedYear} Year ({selectedSection})</div>
                <div><strong>Faculty:</strong> {editingCell?.data?.faculty}</div>
                <div><strong>Venue:</strong> {editingCell?.data?.room}</div>
                <div><strong>Type:</strong> {editingCell?.data?.isLab ? 'Lab Practical' : 'Theory'}</div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* CURRICULUM SUBJECT MANAGER MODAL */}
      <Modal
        isOpen={isSubjectManagerOpen}
        onClose={() => {
          setIsSubjectManagerOpen(false);
          setEditingSubjectObj(null);
        }}
        title="Curriculum Subjects Master"
        subtitle="Manage department courses and faculty mappings"
        icon={BookOpen}
        size="lg"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Program Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
            <button
              onClick={() => setSubjectManagerTab('UG_BSCCS')}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                backgroundColor: subjectManagerTab === 'UG_BSCCS' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: subjectManagerTab === 'UG_BSCCS' ? '#ffffff' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              B.Sc. Computer Science (UG)
            </button>
            <button
              onClick={() => setSubjectManagerTab('PG_MSCCS')}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                backgroundColor: subjectManagerTab === 'PG_MSCCS' ? 'var(--primary-600)' : 'var(--bg-surface-hover)',
                color: subjectManagerTab === 'PG_MSCCS' ? '#ffffff' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              M.Sc. Computer Science (PG)
            </button>
          </div>

          {/* Add Subject Form */}
          <form onSubmit={handleCreateSubject} style={{ padding: '0.85rem', backgroundColor: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.84rem', fontWeight: 700, marginBottom: '0.65rem' }}>
              + Add New Subject to {subjectManagerTab === 'UG_BSCCS' ? 'B.Sc. CS' : 'M.Sc. CS'}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.65rem' }}>
              <input
                type="text"
                placeholder="Code (e.g. CS307)"
                value={newCode}
                onChange={(e) => setNewCode(e.target.value)}
                className="form-input"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem' }}
                required
              />
              <input
                type="text"
                placeholder="Course Title"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="form-input"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem', gridColumn: 'span 2' }}
                required
              />
              <select
                value={newSemester}
                onChange={(e) => setNewSemester(e.target.value)}
                className="form-select"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem' }}
              >
                <option value="Semester I">Semester I</option>
                <option value="Semester II">Semester II</option>
                <option value="Semester III">Semester III</option>
                <option value="Semester IV">Semester IV</option>
                <option value="Semester V">Semester V</option>
                <option value="Semester VI">Semester VI</option>
              </select>
              <select
                value={newCredits}
                onChange={(e) => setNewCredits(e.target.value)}
                className="form-select"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem' }}
              >
                <option value="3">3 Credits</option>
                <option value="4">4 Credits</option>
                <option value="5">5 Credits</option>
              </select>
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                className="form-select"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem' }}
              >
                <option value="Theory">Theory</option>
                <option value="Theory + Lab">Theory + Lab</option>
                <option value="Lab">Practical Lab</option>
              </select>
              <select
                value={newFaculty}
                onChange={(e) => setNewFaculty(e.target.value)}
                className="form-select"
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.6rem', gridColumn: 'span 2' }}
              >
                {facultyList.map(u => (
                  <option key={u.id} value={u.name}>{u.name}</option>
                ))}
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.65rem' }}>
              <Button type="submit" variant="primary" size="sm" icon={Plus}>
                Add to Curriculum
              </Button>
            </div>
          </form>

          {/* Subjects Table */}
          <div style={{ maxHeight: '240px', overflowY: 'auto', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-surface-hover)', textAlign: 'left', borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Code</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Course Name</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Semester</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Credits</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Faculty</th>
                  <th style={{ padding: '0.5rem 0.75rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {subjects
                  .filter(s => s.program === subjectManagerTab || (!s.program && subjectManagerTab === 'UG_BSCCS'))
                  .map((sub) => (
                    <tr key={sub.code} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.5rem 0.75rem', fontWeight: 700, color: 'var(--primary-600)' }}>
                        {sub.code}
                      </td>
                      <td style={{ padding: '0.5rem 0.75rem', fontWeight: 600 }}>
                        {sub.name}
                        <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>
                          {sub.type}
                        </span>
                      </td>
                      <td style={{ padding: '0.5rem 0.75rem' }}>{sub.semester}</td>
                      <td style={{ padding: '0.5rem 0.75rem' }}><Badge variant="primary">{sub.credits}C</Badge></td>
                      <td style={{ padding: '0.5rem 0.75rem' }}>{sub.faculty}</td>
                      <td style={{ padding: '0.5rem 0.75rem', textAlign: 'right' }}>
                        <button
                          onClick={() => deleteSubject(sub.code)}
                          className="btn btn-ghost btn-sm btn-icon"
                          style={{ color: '#ef4444' }}
                          title="Delete Subject"
                        >
                          <Trash2 size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Timetable;
