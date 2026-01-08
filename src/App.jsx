import { useState, useMemo, useEffect } from 'react';
import './App.css';
import { TERMS } from './data';

const LandingLayout = ({ children, buttonText, onNext }) => (
  <div className="landing-container">
    <div className="landing-card">
      <div className="official-badge">Student Personal Project</div>
      <div className="icon-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="16" y2="14" />
          <line x1="8" y1="18" x2="16" y2="18" />
        </svg>
      </div>
      <h1 className="brand-title">Grado ni<span>Yano</span></h1>
      <p className="brand-subtitle">A General Weighted Average Calculator for the <span>USePian</span> community.</p>

      {children}

      <button className="premium-button" onClick={onNext}>
        {buttonText} ›
      </button>

      <div className="landing-footer">
        <span className="footer-link-badge">Privacy First</span>
        <span className="footer-link-badge">USeP Grading</span>
      </div>
    </div>
  </div>
);

function App() {
  // Steps: 0 = Name, 1 = College/Course, 2 = Semester, 3 = Dashboard
  const [step, setStep] = useState(0);

  // User Preferences
  const [studentName, setStudentName] = useState(() => localStorage.getItem('gwa-student-name') || '');
  const [college, setCollege] = useState(() => localStorage.getItem('gwa-college') || 'College of Information and Computing');
  const [course, setCourse] = useState(() => localStorage.getItem('gwa-course') || 'Computer Science');

  const [selectedTermIndex, setSelectedTermIndex] = useState(0);
  const [showCalculation, setShowCalculation] = useState(false);

  // Terms Data State (Mutable)
  const [termsData, setTermsData] = useState(() => {
    try {
      const saved = localStorage.getItem('gwa-terms');
      return saved ? JSON.parse(saved) : TERMS;
    } catch (e) { return TERMS; }
  });

  // Load initial state from localStorage
  const [grades, setGrades] = useState(() => {
    try {
      const saved = localStorage.getItem('gwa-grades');
      return saved ? JSON.parse(saved) : {};
    } catch (e) { return {}; }
  });

  const [units, setUnits] = useState(() => {
    try {
      const saved = localStorage.getItem('gwa-units');
      if (saved) return JSON.parse(saved);
    } catch (e) { }

    const initialUnits = {};
    TERMS.forEach(term => {
      term.subjects.forEach(sub => {
        initialUnits[sub.id] = sub.units;
      });
    });
    return initialUnits;
  });

  // New Subject Form State
  const [isAddingSubject, setIsAddingSubject] = useState(false);
  const [newSubject, setNewSubject] = useState({ code: '', title: '', units: 3 });

  // Delete Confirmation State
  const [subjectToDelete, setSubjectToDelete] = useState(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('gwa-grades', JSON.stringify(grades));
  }, [grades]);

  useEffect(() => {
    localStorage.setItem('gwa-units', JSON.stringify(units));
  }, [units]);

  useEffect(() => {
    localStorage.setItem('gwa-student-name', studentName);
    localStorage.setItem('gwa-college', college);
    localStorage.setItem('gwa-course', course);
  }, [studentName, college, course]);

  useEffect(() => {
    localStorage.setItem('gwa-terms', JSON.stringify(termsData));
  }, [termsData]);


  const handleGradeChange = (id, value) => {
    setGrades(prev => ({ ...prev, [id]: value }));
  };

  const handleUnitChange = (id, value) => {
    setUnits(prev => ({ ...prev, [id]: parseFloat(value) || 0 }));
  };

  const nextStep = () => {
    if (step === 2) {
      // Reload "real and complete normal courses" for the selected semester
      const defaultSubjects = TERMS[selectedTermIndex].subjects;
      const currentSubjects = termsData[selectedTermIndex].subjects;

      // Filter out current subjects that are "defaults" (to reset them) 
      // but keep any custom subjects the user added.
      const customSubjects = currentSubjects.filter(sub =>
        !defaultSubjects.some(def => def.id === sub.id)
      );

      const updatedTerms = [...termsData];
      updatedTerms[selectedTermIndex] = {
        ...updatedTerms[selectedTermIndex],
        subjects: [...defaultSubjects, ...customSubjects]
      };
      setTermsData(updatedTerms);
    }
    setStep(prev => prev + 1);
  };

  // Subject Management Functions
  const handleRemoveSubject = (termIndex, subjectId) => {
    setSubjectToDelete({ termIndex, subjectId });
  };

  const confirmDelete = () => {
    if (!subjectToDelete) return;
    const { termIndex, subjectId } = subjectToDelete;

    const newTerms = [...termsData];
    newTerms[termIndex].subjects = newTerms[termIndex].subjects.filter(sub => sub.id !== subjectId);
    setTermsData(newTerms);

    // Cleanup associated grades and units
    setGrades(prev => {
      const next = { ...prev };
      delete next[subjectId];
      return next;
    });
    setUnits(prev => {
      const next = { ...prev };
      delete next[subjectId];
      return next;
    });

    setSubjectToDelete(null);
  };

  const cancelDelete = () => {
    setSubjectToDelete(null);
  };

  const handleAddSubject = () => {
    if (!newSubject.code || !newSubject.title) {
      alert("Please enter code and title.");
      return;
    }

    const newTerms = [...termsData];
    const id = `custom-${Date.now()}`;
    newTerms[selectedTermIndex].subjects.push({
      id,
      code: newSubject.code,
      title: newSubject.title,
      units: parseFloat(newSubject.units) || 3
    });
    setTermsData(newTerms);

    // Also initialize unit in state
    setUnits(prev => ({ ...prev, [id]: parseFloat(newSubject.units) || 3 }));

    setNewSubject({ code: '', title: '', units: 3 });
    setIsAddingSubject(false);
  };

  const currentTerm = termsData[selectedTermIndex];

  // Detailed Calculation Logic
  const calculationDetails = useMemo(() => {
    let totalUnits = 0;
    let totalWeightedGrades = 0;
    let details = [];

    currentTerm.subjects.forEach(sub => {
      const val = grades[sub.id];
      const grade = parseFloat(val);
      const unit = units[sub.id] !== undefined ? units[sub.id] : sub.units;

      if (val !== undefined && val !== '' && !isNaN(grade) && grade > 0) {
        const product = grade * unit;
        totalWeightedGrades += product;
        totalUnits += unit;
        details.push({
          code: sub.code,
          grade,
          unit,
          product
        });
      }
    });

    const gwa = totalUnits > 0 ? (totalWeightedGrades / totalUnits) : 0;

    return {
      details,
      totalUnits,
      totalWeightedGrades,
      gwa
    };
  }, [grades, units, currentTerm]);

  // Overall GWA
  const overallGWA = useMemo(() => {
    const allSubjects = termsData.flatMap(t => t.subjects);
    let totalUnits = 0;
    let totalWeighted = 0;

    allSubjects.forEach(sub => {
      const val = grades[sub.id];
      const grade = parseFloat(val);
      const unit = units[sub.id] !== undefined ? units[sub.id] : sub.units;
      if (val && !isNaN(grade) && grade > 0) {
        totalWeighted += grade * unit;
        totalUnits += unit;
      }
    });

    return totalUnits > 0 ? (totalWeighted / totalUnits) : 0;
  }, [grades, units, termsData]);

  // --- WIZARD PAGES ---

  // Page 1: Name
  if (step === 0) {
    return (
      <LandingLayout
        buttonText="START CALCULATING"
        onNext={nextStep}
      >
        <div className="landing-input-group">
          <input
            type="text"
            className="premium-input"
            placeholder="Enter your name..."
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && nextStep()}
            autoFocus
          />
        </div>
      </LandingLayout>
    );
  }

  // Page 2: College & Course
  if (step === 1) {
    return (
      <LandingLayout
        buttonText="PROCEED"
        onNext={nextStep}
      >
        <div className="landing-input-group">
          <select
            className="premium-select"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            style={{ marginBottom: '1rem' }}
          >
            <option value="College of Information and Computing">College of Information and Computing</option>
            <option value="College of Engineering">College of Engineering</option>
            <option value="College of Arts and Sciences">College of Arts and Sciences</option>
            <option value="College of Education">College of Education</option>
            <option value="College of Business Administration">College of Business Administration</option>
          </select>
          <select
            className="premium-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="Computer Science">BS Computer Science</option>
            <option value="Information Technology">BS Information Technology</option>
            <option value="Software Engineering">BS Software Engineering</option>
          </select>
        </div>
      </LandingLayout>
    );
  }

  // Page 3: Semester
  if (step === 2) {
    return (
      <LandingLayout
        buttonText="PROCEED"
        onNext={nextStep}
      >
        <div className="landing-input-group">
          <select
            className="premium-select"
            value={selectedTermIndex}
            onChange={(e) => setSelectedTermIndex(Number(e.target.value))}
          >
            {termsData.map((term, index) => (
              <option key={index} value={index}>{term.name}</option>
            ))}
          </select>
        </div>
      </LandingLayout>
    );
  }

  // Page 4: Main App (Step === 3)
  return (
    <>
      <div className="container animate-fade-in">
        <div className="header">
          <div className="header-left">
            <h1
              className="title"
              onClick={() => setStep(0)}
              title="Go to Home"
            >
              Report of Grades
            </h1>
            <div className="student-info-header">
              <div className="student-name-display">{studentName}</div>
              <div className="student-details-display">{course} • {college}</div>
              <div className="student-details-display">{currentTerm.name}</div>
            </div>
          </div>

          <div className="controls">
            <button
              className="term-select-custom"
              title="Switch Semester"
              onClick={() => setStep(2)}
            >
              Switch Semester <span>▼</span>
            </button>

            <div className="gwa-badge">
              <span className="gwa-number">{calculationDetails.gwa > 0 ? Number(calculationDetails.gwa).toFixed(2) : '--'}</span>
              <span className={`remarks-status ${calculationDetails.gwa > 3.0 ? 'status-failed' : 'status-passed'}`}>
                {calculationDetails.gwa > 0 ? (calculationDetails.gwa <= 3.0 ? 'PASSED' : 'FAILED') : '--'}
              </span>
            </div>

            <button
              className="home-btn"
              title="Go to Home"
              onClick={() => setStep(0)}
            >
              Home
            </button>
          </div>
        </div>

        <div className="grades-card">
          <table className="grades-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Title</th>
                <th>Unit</th>
                <th>Final</th>
                <th>Remarks</th>
                <th style={{ width: '50px' }}></th>
              </tr>
            </thead>
            <tbody>
              {currentTerm.subjects.map(sub => {
                const grade = grades[sub.id] !== undefined ? grades[sub.id] : '';
                let remarks = 'ENROLLED';
                let statusClass = 'status-enrolled';

                if (grade !== '' && grade !== null) {
                  const g = parseFloat(grade);
                  if (!isNaN(g)) {
                    if (g <= 3.0) {
                      remarks = 'PASSED';
                      statusClass = 'status-passed';
                    } else {
                      remarks = 'FAILED';
                      statusClass = 'status-failed';
                    }
                  }
                }

                return (
                  <tr key={sub.id}>
                    <td className="subject-code">{sub.code}</td>
                    <td className="subject-title">{sub.title}</td>
                    <td>
                      <input
                        className="unit-input"
                        type="number"
                        value={units[sub.id] !== undefined ? units[sub.id] : sub.units}
                        onChange={(e) => handleUnitChange(sub.id, e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="grade-input"
                        value={grade}
                        placeholder="--"
                        step="0.01"
                        min="1.0"
                        max="5.0"
                        onChange={(e) => handleGradeChange(sub.id, e.target.value)}
                      />
                    </td>
                    <td>
                      <span className={statusClass}>
                        {remarks}
                      </span>
                    </td>
                    <td>
                      <button
                        className="remove-btn"
                        title="Remove Subject"
                        onClick={() => handleRemoveSubject(selectedTermIndex, sub.id)}
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Add Subject Section */}
          <div className="add-subject-container">
            {!isAddingSubject ? (
              <button className="add-subject-btn" onClick={() => setIsAddingSubject(true)}>
                + ADD SUBJECT
              </button>
            ) : (
              <div className="add-subject-form animate-fade-in">
                <input
                  className="new-input code-field"
                  placeholder="Code"
                  value={newSubject.code}
                  onChange={(e) => setNewSubject(prev => ({ ...prev, code: e.target.value }))}
                />
                <input
                  className="new-input title-field"
                  placeholder="Title"
                  value={newSubject.title}
                  onChange={(e) => setNewSubject(prev => ({ ...prev, title: e.target.value }))}
                />
                <input
                  type="number"
                  className="new-input unit-field"
                  placeholder="3"
                  value={newSubject.units}
                  onChange={(e) => setNewSubject(prev => ({ ...prev, units: e.target.value }))}
                />
                <div className="add-actions">
                  <button className="confirm-add-btn" onClick={handleAddSubject}>Add</button>
                  <button className="cancel-add-btn" onClick={() => setIsAddingSubject(false)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Aesthetic Result Cards Section */}
        <div className="results-grid animate-fade-in">
          {/* Computation Card */}
          <div className="calculation-section">
            <button
              className={`calc-toggle-btn ${showCalculation ? 'active' : ''}`}
              onClick={() => setShowCalculation(!showCalculation)}
            >
              {showCalculation ? 'Hide Computation' : 'Show Computation'}
            </button>

            {showCalculation && (
              <div className="computation-card">
                <div className="card-header">
                  <span className="card-icon">Σ</span>
                  <h3>Semester GWA Computation</h3>
                </div>

                <div className="formula-box">
                  <code>GWA = Σ(Grade × Units) / ΣUnits</code>
                </div>

                {calculationDetails.details.length > 0 ? (
                  <div className="steps-container">
                    <div className="step-list">
                      {calculationDetails.details.map((item, idx) => (
                        <div key={idx} className="step-row">
                          <span className="step-subject">{item.code}</span>
                          <span className="step-math">
                            {item.grade.toFixed(2)} <span className="math-label">grade</span> × {item.unit} <span className="math-label">units</span> = <strong>{item.product.toFixed(2)}</strong>
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="summary-section">
                      <div className="summary-row">
                        <span>Total Units</span>
                        <strong>{calculationDetails.totalUnits}</strong>
                      </div>
                      <div className="summary-row">
                        <span>Total Weighted Points</span>
                        <strong>{calculationDetails.totalWeightedGrades.toFixed(2)}</strong>
                      </div>
                      <div className="final-step">
                        <span className="equals">→</span>
                        <span>{calculationDetails.totalWeightedGrades.toFixed(2)} / {calculationDetails.totalUnits} =</span>
                        <span className="highlight-result">{calculationDetails.gwa.toFixed(4)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="empty-msg">Enter some grades to see the detailed breakdown.</p>
                )}
              </div>
            )}
          </div>

          {/* Overall Summary Card */}
          <div className="overall-summary-card">
            <div className="card-header">
              <span className="card-icon">🎓</span>
              <h3>Academic Summary</h3>
            </div>
            <div className="summary-content">
              <div className="summary-badge-item">
                <span className="item-label">CUMULATIVE GWA</span>
                <span className="item-value">{overallGWA > 0 ? Number(overallGWA).toFixed(4) : '--'}</span>
              </div>
              {overallGWA > 0 && (
                <div className={`status-pill ${overallGWA <= 3.0 ? 'status-passed' : 'status-failed'}`}>
                  {overallGWA <= 3.0 ? 'PASSED' : 'FAILED'}
                </div>
              )}
              <p className="summary-footer">Based on all recorded semesters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {subjectToDelete && (
        <div className="modal-overlay animate-fade-in">
          <div className="modal-card">
            <h3>Remove Subject</h3>
            <p>Are you sure you want to remove this subject? This action cannot be undone.</p>
            <div className="modal-actions">
              <button className="modal-cancel-btn" onClick={cancelDelete}>Cancel</button>
              <button className="modal-confirm-btn" onClick={confirmDelete}>Remove</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
