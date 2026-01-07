import { useState, useMemo, useEffect } from 'react';
import './App.css';
import { TERMS } from './data';

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
      <div className="landing-container animate-fade-in">
        <div className="landing-content">
          <h1 className="landing-title">Grado Liyag</h1>
          <p className="landing-subtitle">Let's get to know you.</p>

          <div className="input-group">
            <label className="input-label">What is your name?</label>
            <input
              type="text"
              className="name-input"
              placeholder="e.g. Juan dela Cruz"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && nextStep()}
              autoFocus
            />
          </div>

          <button className="enter-button" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    );
  }

  // Page 2: College & Course
  if (step === 1) {
    return (
      <div className="landing-container animate-fade-in">
        <div className="landing-content">
          <h1 className="landing-title">Academics</h1>
          <p className="landing-subtitle">Tell us about your program.</p>

          <div className="input-group">
            <label className="input-label">College</label>
            <select
              className="setup-select"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            >
              <option value="College of Information and Computing">College of Information and Computing</option>
              {/* Future colleges */}
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">Course</label>
            <select
              className="setup-select"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="Computer Science">Computer Science</option>
              {/* Future courses */}
            </select>
          </div>

          <button className="enter-button" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    );
  }

  // Page 3: Semester
  if (step === 2) {
    return (
      <div className="landing-container animate-fade-in">
        <div className="landing-content">
          <h1 className="landing-title">Semester</h1>
          <p className="landing-subtitle">Which term do you want to view first?</p>

          <div className="input-group">
            <select
              className="setup-select"
              value={selectedTermIndex}
              onChange={(e) => setSelectedTermIndex(Number(e.target.value))}
            >
              {termsData.map((term, index) => (
                <option key={index} value={index}>{term.name}</option>
              ))}
            </select>
          </div>

          <button className="enter-button" onClick={nextStep}>
            PROCEED
          </button>
        </div>
      </div>
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
              Switch Semester <span style={{ marginLeft: '8px', fontSize: '10px' }}>▼</span>
            </button>

            <div className="gwa-badge">
              <span className="gwa-number">{calculationDetails.gwa > 0 ? Number(calculationDetails.gwa).toFixed(2) : '--'}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--success-color)' }}>PASSED</span>
            </div>

            <button
              className="home-btn"
              title="Go to Home"
              onClick={() => setStep(0)}
              style={{ fontWeight: 600 }}
            >
              Home
            </button>
          </div>
        </div>

        {/* <h2 className="current-term-heading">{currentTerm.name}</h2> - Moved to dropdown button */}

        <div className="grades-card">
          <table className="grades-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Title</th>
                <th className="unit-cell">Unit</th>
                <th className="grade-cell">Final</th>
                <th className="remarks-cell">Remarks</th>
                <th className="action-cell"></th>
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
                    <td className="unit-cell">
                      <input
                        className="unit-input"
                        type="number"
                        value={units[sub.id] !== undefined ? units[sub.id] : sub.units}
                        onChange={(e) => handleUnitChange(sub.id, e.target.value)}
                      />
                    </td>
                    <td className="grade-cell">
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
                    <td className="remarks-cell">
                      <span className={statusClass}>
                        {remarks}
                      </span>
                    </td>
                    <td className="action-cell">
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
                  placeholder="Units"
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

        {/* Calculation Toggle */}
        <div className="calculation-section">
          <button
            className="calc-toggle-btn"
            onClick={() => setShowCalculation(!showCalculation)}
          >
            {showCalculation ? 'Hide Computation' : 'Show Computation'}
          </button>

          {showCalculation && calculationDetails.details.length > 0 && (
            <div className="calculation-breakdown animate-fade-in">
              <h4>Semester GWA Computation</h4>
              <div className="calc-formula">
                GWA = (Sum of Grade × Units) / Sum of Units
              </div>

              <div className="calc-steps">
                {calculationDetails.details.map((item, idx) => (
                  <div key={idx} className="calc-step-row">
                    <span className="calc-step-code">{item.code}</span>
                    <span className="calc-step-math">
                      {item.grade} (Grade) × {item.unit} (Units) = <strong>{item.product.toFixed(2)}</strong>
                    </span>
                  </div>
                ))}
              </div>

              <div className="calc-result-row">
                <div className="calc-total-units">Total Units: <strong>{calculationDetails.totalUnits}</strong></div>
                <div className="calc-total-weighted">Total Weighted: <strong>{calculationDetails.totalWeightedGrades.toFixed(2)}</strong></div>
              </div>

              <div className="calc-final-big">
                {calculationDetails.totalWeightedGrades.toFixed(2)} / {calculationDetails.totalUnits} = <span className="highlight-gwa">{calculationDetails.gwa.toFixed(4)}</span>
              </div>
            </div>
          )}

          {showCalculation && calculationDetails.details.length === 0 && (
            <div className="calculation-breakdown animate-fade-in">
              <p>Enter some grades to see the computation.</p>
            </div>
          )}
        </div>

        <div className="overall-gwa-container">
          <h3>Overall Cumulative GWA</h3>
          <div className="overall-gwa-value">{overallGWA > 0 ? Number(overallGWA).toFixed(4) : '--'}</div>
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
