import { useState, useMemo, useEffect, useRef } from 'react';
import './App.css';
import { COLLEGES, CURRICULUMS } from './data';

const LandingLayout = ({ children, buttonText, onNext, onBack, showBack = false, extraContent = null }) => (
  <div className="landing-container">
    <div className="landing-card">
      <div className="official-badge">Student Personal Project</div>
      <div className="icon-box">
        <img src="/logo.png" alt="Grado ni Yano Logo" />
      </div>
      <h1 className="brand-title">Grado ni<span>Yano</span></h1>
      <p className="brand-subtitle">A General Weighted Average Calculator for the <span>USePian</span> community.</p>

      {children}

      <div className="landing-actions">
        {showBack && (
          <button className="premium-button secondary" onClick={onBack}>
            ‹ PREVIOUS
          </button>
        )}
        <button className="premium-button" onClick={onNext}>
          {buttonText} ›
        </button>
      </div>

      {extraContent}

      <div className="landing-footer">
        <span className="footer-link-badge">Privacy First</span>
        <span className="footer-link-badge">USeP Grading</span>
      </div>
    </div>
  </div>
);
const CustomSelect = ({ options, value, onChange, placeholder = "Select option..." }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`custom-dropdown ${isOpen ? 'is-open' : ''}`} ref={dropdownRef}>
      <div
        className="custom-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        title={value}
      >
        <span className="trigger-text">{value || placeholder}</span>
      </div>
      {isOpen && (
        <div className="custom-dropdown-options">
          {options.map((opt) => (
            <div
              key={opt}
              className={`custom-dropdown-option ${opt === value ? 'is-selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function App() {
  // Steps: 0 = Name, 1 = College/Course, 2 = Semester, 3 = Dashboard
  const [step, setStep] = useState(0);

  // User Preferences
  const [studentName, setStudentName] = useState(() => localStorage.getItem('gwa-student-name') || '');
  const [college, setCollege] = useState(() => localStorage.getItem('gwa-college') || 'College of Information and Computing');
  const [course, setCourse] = useState(() => {
    const saved = localStorage.getItem('gwa-course');
    if (saved && CURRICULUMS[saved]) return saved;
    return COLLEGES['College of Information and Computing'][1]; // Default to BSCS (Data Science)
  });

  const [selectedTermIndex, setSelectedTermIndex] = useState(0);
  const [showCalculation, setShowCalculation] = useState(false);

  // Terms Data State (Mutable)
  const [termsData, setTermsData] = useState(() => {
    try {
      const savedRaw = localStorage.getItem('gwa-terms');
      const saved = savedRaw ? JSON.parse(savedRaw) : null;
      const activeCurriculum = CURRICULUMS[course] || CURRICULUMS["BS in Computer Science (Specialization: Data Science)"];
      if (!saved) return activeCurriculum;

      // Sync: Add missing terms from the active curriculum to the saved state
      const synced = [...saved];
      activeCurriculum.forEach(defTerm => {
        if (!synced.some(t => t.name === defTerm.name)) {
          synced.push(defTerm);
        }
      });
      return synced;
    } catch (e) {
      return CURRICULUMS[course] || CURRICULUMS["BS in Computer Science (Specialization: Data Science)"];
    }
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
    const activeCurriculum = CURRICULUMS[course] || CURRICULUMS["BS in Computer Science (Specialization: Data Science)"];
    activeCurriculum.forEach(term => {
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

  // Edit Subject State
  const [subjectToEdit, setSubjectToEdit] = useState(null);

  // Form Validation Error State
  const [errorMessage, setErrorMessage] = useState(null);

  // Excluded Subjects (Excluded from GWA but kept in list)
  const [excludedSubjects, setExcludedSubjects] = useState(() => {
    try {
      const saved = localStorage.getItem('gwa-excluded');
      return saved ? JSON.parse(saved) : [];
    } catch (e) { return []; }
  });

  // Manual Calculation State
  const [manualGWA, setManualGWA] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

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

  useEffect(() => {
    localStorage.setItem('gwa-excluded', JSON.stringify(excludedSubjects));
  }, [excludedSubjects]);

  // Automatic reset when switching course or college
  useEffect(() => {
    setGrades({});
    setExcludedSubjects([]);
    setManualGWA(0);
    const activeCurriculum = CURRICULUMS[course] || CURRICULUMS["BS in Computer Science (Specialization: Data Science)"];
    setTermsData(activeCurriculum);
  }, [college, course]);

  // Reset manual results when switching semesters
  useEffect(() => {
    setManualGWA(0);
  }, [selectedTermIndex]);


  const handleGradeChange = (id, value) => {
    // If it's the select dropdown, we just set the value
    setGrades(prev => ({ ...prev, [id]: value }));
  };

  const handleUnitChange = (id, value) => {
    setUnits(prev => ({ ...prev, [id]: parseFloat(value) || 0 }));
  };

  const handleStartEdit = (termIndex, subject) => {
    setSubjectToEdit({ termIndex, ...subject, units: units[subject.id] !== undefined ? units[subject.id] : subject.units });
  };

  const cancelEdit = () => {
    setSubjectToEdit(null);
  };

  const handleSaveEdit = () => {
    if (!subjectToEdit) return;
    const { termIndex, id, code, title, units: editedUnits } = subjectToEdit;

    const newTerms = [...termsData];
    const sub = newTerms[termIndex].subjects.find(s => s.id === id);
    if (sub) {
      sub.code = code;
      sub.title = title;
      sub.units = parseFloat(editedUnits) || 0;
      setTermsData(newTerms);
      setUnits(prev => ({ ...prev, [id]: parseFloat(editedUnits) || 0 }));
    }
    setSubjectToEdit(null);
  };

  const handleCalculate = () => {
    if (calculationDetails.details.length < 2) {
      setErrorMessage("Calculation requires at least two (2) subjects with grades to compute a true GWA.");
      return;
    }

    setIsCalculating(true);
    // Add a slight premium delay for "Coolness"
    setTimeout(() => {
      setManualGWA(calculationDetails.gwa);
      setIsCalculating(false);
    }, 1000);
  };


  const nextStep = () => {
    if (step === 2) {
      // Robust lookup: Find the default definition by name
      const currentTermName = termsData[selectedTermIndex].name;
      const activeCurriculum = CURRICULUMS[course] || CURRICULUMS["BS in Computer Science (Specialization: Data Science)"];
      const defaultTerm = activeCurriculum.find(t => t.name === currentTermName);
      const defaultSubjects = defaultTerm ? defaultTerm.subjects : [];

      // STRICT RESET: Discard any previous custom subjects and always use the default curriculum
      // This ensures "Custom (Manual Input)" is "really empty" (subjects: [])
      const updatedTerms = [...termsData];
      updatedTerms[selectedTermIndex] = {
        ...updatedTerms[selectedTermIndex],
        subjects: [...defaultSubjects]
      };
      setTermsData(updatedTerms);

      // Reset exclusion status for this term
      const termSubjectIds = updatedTerms[selectedTermIndex].subjects.map(s => s.id);
      setExcludedSubjects(prev => prev.filter(id => !termSubjectIds.includes(id)));
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => Math.max(0, prev - 1));
  };

  const handleManualInput = () => {
    const manualCurriculum = CURRICULUMS["Custom (Manual Input)"];
    setCourse("Custom (Manual Input)");
    setTermsData(manualCurriculum);
    setSelectedTermIndex(0);
    setStep(3); // Jump directly to dashboard
  };

  // Subject Management Functions
  const handleRemoveSubject = (termIndex, subjectId) => {
    setSubjectToDelete({ termIndex, subjectId });
    setShowDeleteModal(true);
  };

  const handleGoHome = () => {
    // If returning from Manual Input, reset to a valid course for the selected college
    if (course === "Custom (Manual Input)") {
      const defaultCourse = COLLEGES[college]?.[0];
      if (defaultCourse) setCourse(defaultCourse);
    }
    setStep(0);
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

  const toggleSubjectInclusion = (id) => {
    setExcludedSubjects(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleAddSubject = () => {
    if (!newSubject.code || !newSubject.title) {
      setErrorMessage("Please enter both the subject code and title before adding.");
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
    let hasFailingGrade = false;
    let totalEnrolledUnits = 0;

    currentTerm.subjects.forEach(sub => {
      const val = grades[sub.id];
      const grade = parseFloat(val);
      const unit = units[sub.id] !== undefined ? units[sub.id] : sub.units;
      const isExcluded = excludedSubjects.includes(sub.id);

      totalEnrolledUnits += unit;

      if (val !== undefined && val !== '' && !isNaN(grade)) {
        if (grade > 3.0) hasFailingGrade = true;

        if (grade > 0 && !isExcluded) {
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
      }
    });

    const gwa = totalUnits > 0 ? (totalWeightedGrades / totalUnits) : 0;

    // Honor Logic
    const activeCurriculum = CURRICULUMS[course] || CURRICULUMS["BS in Computer Science (Specialization: Data Science)"];
    const defaultTerm = activeCurriculum.find(t => t.name === currentTerm.name);
    const prescribedLoad = defaultTerm ? defaultTerm.subjects.reduce((sum, s) => sum + s.units, 0) : 18;
    const isFullLoad = totalEnrolledUnits >= Math.min(18, prescribedLoad);

    // Check for INC manually in case it's not a number
    let hasINC = false;
    currentTerm.subjects.forEach(sub => {
      const val = grades[sub.id];
      if (val && typeof val === 'string' && val.toUpperCase() === 'INC') {
        hasINC = true;
      }
    });

    let honorStatus = null;
    if (gwa > 0) {
      if (isFullLoad && !hasFailingGrade && !hasINC) {
        if (gwa <= 1.25) {
          honorStatus = "University Scholar";
        } else if (gwa <= 1.45) {
          honorStatus = "College Scholar";
        } else if (gwa <= 1.75) {
          honorStatus = "Dean's Lister";
        } else {
          honorStatus = "Not Qualified";
        }
      } else {
        honorStatus = "Not Qualified";
      }
    }

    return {
      details,
      totalUnits,
      totalWeightedGrades,
      gwa,
      honorStatus,
      isFullLoad,
      hasFailingGrade,
      hasINC
    };
  }, [grades, units, currentTerm, excludedSubjects]);

  // Overall GWA
  const overallGWA = useMemo(() => {
    const allSubjects = termsData.flatMap(t => t.subjects);
    let totalUnits = 0;
    let totalWeighted = 0;

    allSubjects.forEach(sub => {
      const val = grades[sub.id];
      const grade = parseFloat(val);
      const unit = units[sub.id] !== undefined ? units[sub.id] : sub.units;
      const isExcluded = excludedSubjects.includes(sub.id);

      if (val && !isNaN(grade) && grade > 0 && !isExcluded) {
        totalWeighted += grade * unit;
        totalUnits += unit;
      }
    });

    return totalUnits > 0 ? (totalWeighted / totalUnits) : 0;
  }, [grades, units, termsData, excludedSubjects]);

  // --- WIZARD PAGES ---

  // Page 1: Name
  if (step === 0) {
    return (
      <LandingLayout
        buttonText="PROCEED"
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
        extraContent={
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <button
              onClick={handleManualInput}
              style={{
                background: 'none',
                border: 'none',
                color: '#666',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'underline',
                opacity: 0.8,
                transition: 'opacity 0.2s'
              }}
              onMouseOver={(e) => e.target.style.opacity = '1'}
              onMouseOut={(e) => e.target.style.opacity = '0.8'}
            >
              Not from USeP? Input Manually ›
            </button>
          </div>
        }
        buttonText="PROCEED"
        onNext={nextStep}
        onBack={prevStep}
        showBack={true}
      >
        <div className="landing-input-group">
          <CustomSelect
            options={Object.keys(COLLEGES)}
            value={college}
            onChange={(val) => {
              setCollege(val);
              const firstCourse = COLLEGES[val]?.[0];
              if (firstCourse) setCourse(firstCourse);
            }}
          />
          <div style={{ height: '1rem' }} />
          <CustomSelect
            options={COLLEGES[college] || []}
            value={course}
            onChange={(val) => setCourse(val)}
          />
        </div>
      </LandingLayout >
    );
  }

  // Page 3: Semester
  if (step === 2) {
    return (
      <LandingLayout
        buttonText="PROCEED"
        onNext={nextStep}
        onBack={prevStep}
        showBack={true}
      >
        <div className="landing-input-group">
          <CustomSelect
            options={termsData.map(t => t.name)}
            value={termsData[selectedTermIndex].name}
            onChange={(val) => {
              const idx = termsData.findIndex(t => t.name === val);
              setSelectedTermIndex(idx);
            }}
          />
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
            <div className="app-branding" onClick={handleGoHome}>Grado ni Yano</div>
            <h1
              className="title"
              onClick={handleGoHome}
              title="Go to Home"
            >
              Report of Grades
            </h1>
            <div className="student-info-header">
              <div className="student-name-display">{studentName}</div>
              {course === "Custom (Manual Input)" ? (
                <div className="student-details-display">Manual Grade Entry</div>
              ) : (
                <>
                  <div className="student-details-display">{college}</div>
                  <div className="student-details-display">{course}</div>
                  <div className="student-details-display">{currentTerm.name}</div>
                </>
              )}
            </div>
          </div>

          <div className="controls">
            <div className="gwa-badge">
              <span className="gwa-number">{manualGWA > 0 ? Number(manualGWA).toFixed(4) : '--'}</span>
              <span className={`remarks-status ${manualGWA > 3.0 ? 'status-failed' : 'status-passed'}`}>
                {manualGWA > 0 ? (manualGWA <= 3.0 ? 'PASSED' : 'FAILED') : '--'}
              </span>
            </div>


            {course !== "Custom (Manual Input)" && (
              <button
                className="home-btn secondary"
                title="Back to Semester List"
                onClick={() => setStep(2)}
                style={{
                  background: 'none',
                  border: '1px solid #e5e5e5',
                  color: '#666',
                  marginRight: '0.8rem'
                }}
              >
                ‹ Back
              </button>
            )}

            <button
              className="home-btn"
              title="Go to Home"
              onClick={handleGoHome}
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
                <th className="mobile-hide">Remarks</th>
                <th style={{ width: '80px' }}>Include</th>
                <th style={{ width: '100px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentTerm.subjects.length > 0 ? (
                currentTerm.subjects.map(sub => {
                  const grade = grades[sub.id] !== undefined ? grades[sub.id] : '';
                  const isExcluded = excludedSubjects.includes(sub.id);
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
                    <tr key={sub.id} className={isExcluded ? 'row-excluded' : ''}>
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
                        <select
                          className="grade-input"
                          value={grade}
                          onChange={(e) => handleGradeChange(sub.id, e.target.value)}
                        >
                          <option value="">--</option>
                          <option value="1.00">1.00</option>
                          <option value="1.25">1.25</option>
                          <option value="1.50">1.50</option>
                          <option value="1.75">1.75</option>
                          <option value="2.00">2.00</option>
                          <option value="2.25">2.25</option>
                          <option value="2.50">2.50</option>
                          <option value="2.75">2.75</option>
                          <option value="3.00">3.00</option>
                          <option value="5.00">5.00</option>
                          <option value="INC">INC</option>
                        </select>
                      </td>
                      <td className="mobile-hide">
                        <span className={isExcluded ? 'status-enrolled' : statusClass}>
                          {isExcluded ? 'EXCLUDED' : remarks}
                        </span>
                      </td>
                      <td>
                        <button
                          className={`toggle-include-btn ${isExcluded ? 'is-excluded' : ''}`}
                          title={isExcluded ? "Include in GWA" : "Exclude from GWA"}
                          onClick={() => toggleSubjectInclusion(sub.id)}
                        />
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="edit-row-btn"
                            title="Edit Subject"
                            onClick={() => handleStartEdit(selectedTermIndex, sub)}
                          >
                            ✎
                          </button>
                          <button
                            className="remove-btn"
                            title="Remove Subject"
                            onClick={() => handleRemoveSubject(selectedTermIndex, sub.id)}
                          >
                            ×
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="empty-table-msg">
                    No subjects added yet. Click <strong>+ ADD SUBJECT</strong> below to start manual input.
                  </td>
                </tr>
              )}
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
            <div className="calc-actions">
              <button
                className={`calc-toggle-btn ${showCalculation ? 'active' : ''}`}
                onClick={() => setShowCalculation(!showCalculation)}
              >
                {showCalculation ? 'Hide Computation' : 'Show Computation'}
              </button>

              <button
                className={`calculate-trigger-btn ${isCalculating ? 'is-loading' : ''}`}
                onClick={handleCalculate}
                disabled={isCalculating}
              >
                {isCalculating ? 'Computing...' : 'Calculate My GWA'}
              </button>
            </div>

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
                        <span className="highlight-result">{manualGWA > 0 ? manualGWA.toFixed(4) : '----'}</span>
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
                <span className="item-label">SEMESTER GWA</span>
                <span className="item-value">{manualGWA > 0 ? Number(manualGWA).toFixed(4) : '--'}</span>
              </div>
              {manualGWA > 0 && (
                <>
                  <div className={`status-pill ${manualGWA <= 3.0 ? 'status-passed' : 'status-failed'}`}>
                    {manualGWA <= 3.0 ? 'PASSED' : 'FAILED'}
                  </div>

                  <div className="honors-container">
                    {calculationDetails.honorStatus && calculationDetails.honorStatus !== "Not Qualified" ? (
                      <div className="honor-badge animate-pop">
                        <span className="honor-icon">🎖️</span>
                        <div className="honor-texts">
                          <span className="honor-title">{calculationDetails.honorStatus}</span>
                          <span className="honor-subtitle">OFFICIAL DEAN'S LISTER</span>
                        </div>
                      </div>
                    ) : (
                      <div className="honor-disqualified animate-pop">
                        <span className="dq-label">HONOR STATUS</span>
                        <span className="dq-value">NOT DEAN'S LIST</span>
                        <div className="dq-reasons">
                          {!calculationDetails.isFullLoad && <span>• Underloaded (Min 18 units)</span>}
                          {calculationDetails.hasFailingGrade && <span>• Failing Grade detected (Above 3.0)</span>}
                          {calculationDetails.hasINC && <span>• Incomplete (INC) detected</span>}
                          {manualGWA > 1.75 && <span>• GWA must be 1.75 or better</span>}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
              <p className="summary-footer">Result for {currentTerm.name}</p>
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
      {/* Error Modal */}
      {errorMessage && (
        <div className="modal-overlay animate-fade-in">
          <div className="modal-card error-card">
            <div className="error-icon">⚠️</div>
            <h3>Missing Information</h3>
            <p>{errorMessage}</p>
            <div className="modal-actions" style={{ justifyContent: 'center' }}>
              <button className="modal-ok-btn" onClick={() => setErrorMessage(null)}>Got it</button>
            </div>
          </div>
        </div>
      )}
      {/* Edit Subject Modal */}
      {subjectToEdit && (
        <div className="modal-overlay animate-fade-in">
          <div className="modal-card">
            <div className="card-header" style={{ margin: '-2.5rem -2.5rem 2rem -2.5rem' }}>
              <span className="card-icon">✏️</span>
              <h3>Edit Subject</h3>
            </div>
            <div className="edit-subject-form">
              <div className="edit-group">
                <label>Subject Code</label>
                <input
                  className="premium-input"
                  value={subjectToEdit.code}
                  onChange={(e) => setSubjectToEdit({ ...subjectToEdit, code: e.target.value })}
                />
              </div>
              <div className="edit-group">
                <label>Subject Title</label>
                <input
                  className="premium-input"
                  value={subjectToEdit.title}
                  onChange={(e) => setSubjectToEdit({ ...subjectToEdit, title: e.target.value })}
                />
              </div>
              <div className="edit-group">
                <label>Units</label>
                <input
                  type="number"
                  className="premium-input"
                  value={subjectToEdit.units}
                  onChange={(e) => setSubjectToEdit({ ...subjectToEdit, units: e.target.value })}
                />
              </div>
            </div>
            <div className="modal-actions" style={{ marginTop: '2rem' }}>
              <button className="modal-cancel-btn" onClick={cancelEdit}>Cancel</button>
              <button className="modal-confirm-btn" onClick={handleSaveEdit}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
