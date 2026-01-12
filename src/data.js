export const COLLEGES = {
    "College of Information and Computing": [
        "BS in Information Technology (Specialization: Information Security)",
        "BS in Computer Science (Specialization: Data Science)",
        "BS in Information Technology (Specialization: Business Technology Management)",
        "Bachelor of Library and Information Science (BLIS)"
    ],
    "College of Engineering": ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering"],
    "College of Arts and Sciences": ["Biology", "Mathematics", "English"],
    "College of Education": ["Elementary Education", "Secondary Education"],
    "College of Business Administration": ["Accountancy", "Business Management", "Entrepreneurship"]
};

// Common Subjects Utility
const GE_COMMONS = {
    GE111: { id: "GE 111", code: "GE 111", title: "Purposive Communication", units: 3 },
    GE112: { id: "GE 112", code: "GE 112", title: "Mathematics in the Modern World", units: 3 },
    GE113: { id: "GE 113", code: "GE 113", title: "Understanding the Self", units: 3 },
    GE114: { id: "GE 114", code: "GE 114", title: "Ethics", units: 3 },
    GE215: { id: "GE 215", code: "GE 215", title: "Life and Works of Rizal", units: 3 },
    GE216: { id: "GE 216", code: "GE 216", title: "Readings in Philippine History", units: 3 },
    GE217: { id: "GE 217", code: "GE 217", title: "Science, Technology and Society", units: 3 },
    GE218: { id: "GE 218", code: "GE 218", title: "Arts Appreciation", units: 3 },
    GE319: { id: "GE 319", code: "GE 319", title: "The Contemporary World", units: 3 },
    EGE311: { id: "EGE 311", code: "EGE 311", title: "General Education Elective 1", units: 3 },
    EGE312: { id: "EGE 312", code: "EGE 312", title: "General Education Elective 2", units: 3 },
    EGE313: { id: "EGE 313", code: "EGE 313", title: "General Education Elective 3", units: 3 },
    PE111: { id: "PE 111", code: "PE 111", title: "Movement Enhancement", units: 2 },
    PE122: { id: "PE 122", code: "PE 122", title: "Fitness Exercise", units: 2 },
    PE213: { id: "PE 213", code: "PE 213", title: "Physical Activities Towards Health and Fitness I", units: 2 },
    PE224: { id: "PE 224", code: "PE 224", title: "Physical Activities Towards Health and Fitness II", units: 2 },
    NSTP111: { id: "NSTP 111", code: "NSTP 111", title: "National Service Training Program 1", units: 3 },
    NSTP122: { id: "NSTP 122", code: "NSTP 122", title: "National Service Training Program 2", units: 3 },
    IC111: { id: "IC 111", code: "IC 111", title: "Programming Paradigm 1", units: 3 },
    IC112: { id: "IC 112", code: "IC 112", title: "Professional Ethics in Computing", units: 3 },
    IC113: { id: "IC 113", code: "IC 113", title: "Probability and Statistics for Computing", units: 3 },
    IC124: { id: "IC 124", code: "IC 124", title: "Programming Paradigm 2", units: 3 },
    IC125: { id: "IC 125", code: "IC 125", title: "Discrete Structures", units: 3 },
    IC126: { id: "IC 126", code: "IC 126", title: "Interaction Design", units: 3 },
    IC217: { id: "IC 217", code: "IC 217", title: "Data Structures and Algorithms", units: 3 },
    ICE311: { id: "ICE 311", code: "ICE 311", title: "Professional Elective 1", units: 3 },
    ICE322: { id: "ICE 322", code: "ICE 322", title: "Professional Elective 2", units: 3 },
    ICE323: { id: "ICE 323", code: "ICE 323", title: "Professional Elective 3", units: 3 },
    ICE414: { id: "ICE 414", code: "ICE 414", title: "Professional Elective 4", units: 3 },
    ICE415: { id: "ICE 415", code: "ICE 415", title: "Professional Elective 5", units: 3 },
};

export const CURRICULUMS = {
    "BS in Information Technology (Specialization: Information Security)": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112, GE_COMMONS.IC111, GE_COMMONS.IC112, GE_COMMONS.IC113, GE_COMMONS.PE111, GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE113, GE_COMMONS.GE114, GE_COMMONS.IC124, GE_COMMONS.IC125, GE_COMMONS.IC126,
                { id: "IT 121", code: "IT 121", title: "Technopreneurship", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE215, GE_COMMONS.GE216, GE_COMMONS.IC217,
                { id: "IT 212", code: "IT 212", title: "IT Project Management", units: 3 },
                { id: "IT 213", code: "IT 213", title: "Information Management", units: 3 },
                { id: "IT 214", code: "IT 214", title: "Applied Computer Networks", units: 3 },
                GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE217, GE_COMMONS.GE218,
                { id: "IT 225", code: "IT 225", title: "Applied Operating System", units: 3 },
                { id: "IT 226", code: "IT 226", title: "Application Systems Development", units: 3 },
                { id: "IT 227", code: "IT 227", title: "Advanced Information Management", units: 3 },
                { id: "IT 228", code: "IT 228", title: "Software Engineering 1", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE311, GE_COMMONS.GE319,
                { id: "ITIS 311", code: "ITIS 311", title: "Fundamentals in Security Design", units: 3 },
                { id: "ITIS 312", code: "ITIS 312", title: "Identity Management", units: 3 },
                { id: "ITIS 313", code: "ITIS 313", title: "Information Storage Security", units: 3 },
                { id: "ITIS 314", code: "ITIS 314", title: "Cybersecurity", units: 3 },
                { id: "IT 319", code: "IT 319", title: "Software Engineering 2", units: 3 },
                GE_COMMONS.ICE311
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                GE_COMMONS.EGE312, GE_COMMONS.EGE313,
                { id: "ITIS 325", code: "ITIS 325", title: "Systems and Administration", units: 3 },
                { id: "ITIS 326", code: "ITIS 326", title: "Data Privacy and Security", units: 3 },
                { id: "ITIS 327", code: "ITIS 327", title: "Security Policy and Governance", units: 3 },
                GE_COMMONS.ICE322, GE_COMMONS.ICE323,
                { id: "IT 3210", code: "IT 3210", title: "IT Research Paradigm", units: 3 }
            ]
        },
        {
            name: "Summer",
            subjects: [
                { id: "ITCP 400_S", code: "ITCP 400", title: "Capstone Project", units: 2 },
                { id: "ITPR 401_S", code: "ITPR 401", title: "IT Practicum", units: 5 }
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                { id: "ITPR 401_41", code: "ITPR 401", title: "Practicum", units: 4 },
                GE_COMMONS.ICE414, GE_COMMONS.ICE415,
                { id: "ITCP 400_41", code: "ITCP 400", title: "Capstone", units: 2 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                { id: "ITCP 400_42", code: "ITCP 400", title: "Capstone", units: 2 },
                { id: "IT 4211", code: "IT 4211", title: "IPR Management", units: 3 }
            ]
        }
    ],
    "BS in Computer Science (Specialization: Data Science)": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112, GE_COMMONS.IC111, GE_COMMONS.IC112, GE_COMMONS.IC113,
                { id: "CS 111", code: "CS 111", title: "Advanced Algebra", units: 3 },
                GE_COMMONS.PE111, GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE113, GE_COMMONS.GE114, GE_COMMONS.IC124, GE_COMMONS.IC125, GE_COMMONS.IC126,
                { id: "CS 122", code: "CS 122", title: "Intro to Data Science", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE215, GE_COMMONS.GE216, GE_COMMONS.IC217,
                { id: "CS 213", code: "CS 213", title: "Database Management Systems", units: 3 },
                { id: "CS 214", code: "CS 214", title: "Computer Networks Concepts and Theories", units: 3 },
                { id: "CS 215", code: "CS 215", title: "Design and Analysis of Algorithm", units: 3 },
                GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE217, GE_COMMONS.GE218,
                { id: "CS 226", code: "CS 226", title: "Data Analytics", units: 3 },
                { id: "CS 227", code: "CS 227", title: "Automata Theory", units: 3 },
                { id: "CS 228", code: "CS 228", title: "Artificial Intelligence", units: 3 },
                { id: "CS 229", code: "CS 229", title: "Design and Development Methodologies", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE311, GE_COMMONS.GE319,
                { id: "CSDS 311", code: "CSDS 311", title: "Big Data Management", units: 3 },
                { id: "CSDS 312", code: "CSDS 312", title: "Applied Data Science", units: 3 },
                { id: "CSDS 313", code: "CSDS 313", title: "Business Intelligence", units: 3 },
                { id: "CSDS 314", code: "CSDS 314", title: "Machine Learning", units: 3 },
                { id: "CS 3110", code: "CS 3110", title: "Modelling and Simulation", units: 3 },
                GE_COMMONS.ICE311
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                GE_COMMONS.EGE312, GE_COMMONS.EGE313,
                { id: "CSDS 325", code: "CSDS 325", title: "Intelligent Info Systems", units: 3 },
                { id: "CSDS 326", code: "CSDS 326", title: "Social Network Analysis", units: 3 },
                { id: "CSDS 327", code: "CSDS 327", title: "Data Visualization", units: 3 },
                GE_COMMONS.ICE322, GE_COMMONS.ICE323,
                { id: "CS 3211", code: "CS 3211", title: "CS Research Methods", units: 3 }
            ]
        },
        {
            name: "Summer",
            subjects: [
                { id: "Thesis 400_S", code: "Thesis 400", title: "Thesis", units: 2 },
                { id: "CSPR 331", code: "CSPR 331", title: "Practicum", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                GE_COMMONS.ICE414, GE_COMMONS.ICE415,
                { id: "Thesis 400_41", code: "Thesis 400", title: "Thesis", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                { id: "CS 4212", code: "CS 4212", title: "Legal, Ethical, Policy Issues in Data Science", units: 3 },
                { id: "Thesis 400_42", code: "Thesis 400", title: "Thesis", units: 3 }
            ]
        }
    ],
    "BS in Information Technology (Specialization: Business Technology Management)": [
        {
            name: "First Year - 1st Semester",
            subjects: [GE_COMMONS.GE111, GE_COMMONS.GE112, GE_COMMONS.IC111, GE_COMMONS.IC112, GE_COMMONS.IC113, GE_COMMONS.PE111, GE_COMMONS.NSTP111]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [GE_COMMONS.GE113, GE_COMMONS.GE114, GE_COMMONS.IC124, GE_COMMONS.IC125, GE_COMMONS.IC126, { id: "IT 121", code: "IT 121", title: "Technopreneurship", units: 3 }, GE_COMMONS.PE122, GE_COMMONS.NSTP122]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [GE_COMMONS.GE215, GE_COMMONS.GE216, GE_COMMONS.IC217, { id: "IT 212", code: "IT 212", title: "IT Project Management", units: 3 }, { id: "IT 213", code: "IT 213", title: "Information Management", units: 3 }, { id: "IT 214", code: "IT 214", title: "Applied Computer Networks", units: 3 }, GE_COMMONS.PE213]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [GE_COMMONS.GE217, GE_COMMONS.GE218, { id: "IT 225", code: "IT 225", title: "Applied Operating System", units: 3 }, { id: "IT 226", code: "IT 226", title: "Application Systems Development", units: 3 }, { id: "IT 227", code: "IT 227", title: "Advanced Information Management", units: 3 }, { id: "IT 228", code: "IT 228", title: "Software Engineering 1", units: 3 }, GE_COMMONS.PE224]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE311, GE_COMMONS.GE319,
                { id: "ITBTM 311", code: "ITBTM 311", title: "Intro to BTM", units: 3 },
                { id: "ITBTM 312", code: "ITBTM 312", title: "IT Accounting", units: 3 },
                { id: "ITBTM 313", code: "ITBTM 313", title: "Marketing Principles", units: 3 },
                { id: "ITBTM 314", code: "ITBTM 314", title: "Enterprise Resource Planning", units: 3 },
                { id: "IT 319", code: "IT 319", title: "Software Engineering 2", units: 3 },
                GE_COMMONS.ICE311
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                GE_COMMONS.EGE312, GE_COMMONS.EGE313,
                { id: "ITBTM 325", code: "ITBTM 325", title: "E-Commerce", units: 3 },
                { id: "ITBTM 326", code: "ITBTM 326", title: "Adv. Technopreneurship", units: 3 },
                { id: "ITBTM 327", code: "ITBTM 327", title: "Business Analytics", units: 3 },
                GE_COMMONS.ICE322, GE_COMMONS.ICE323,
                { id: "IT 3210", code: "IT 3210", title: "IT Research Paradigm", units: 3 }
            ]
        },
        {
            name: "Summer",
            subjects: [{ id: "ITCP 400_S", code: "ITCP 400", title: "Capstone Project", units: 2 }, { id: "ITPR 401_S", code: "ITPR 401", title: "IT Practicum", units: 5 }]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [{ id: "ITPR 401_41", code: "ITPR 401", title: "Practicum", units: 4 }, GE_COMMONS.ICE414, GE_COMMONS.ICE415, { id: "ITCP 400_41", code: "ITCP 400", title: "Capstone", units: 2 }]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [{ id: "ITCP 400_42", code: "ITCP 400", title: "Capstone", units: 2 }, { id: "IT 4211", code: "IT 4211", title: "IPR Management", units: 3 }]
        }
    ],
    "Bachelor of Library and Information Science (BLIS)": [
        {
            name: "1st Year - 1st Semester",
            subjects: [GE_COMMONS.GE113, GE_COMMONS.GE114, { id: "LIS 111", code: "LIS 111", title: "Intro to LIS", units: 3 }, { id: "LST 111", code: "LST 111", title: "Academic Librarianship", units: 3 }, { id: "LST 112", code: "LST 112", title: "Special/Public Librarianship", units: 3 }, { id: "LICT 111", code: "LICT 111", title: "Info Processing & Handling", units: 3 }, GE_COMMONS.PE111, GE_COMMONS.NSTP111]
        },
        {
            name: "1st Year - 2nd Semester",
            subjects: [GE_COMMONS.GE111, GE_COMMONS.GE112, { id: "LIS 122", code: "LIS 122", title: "Collection Mgmt 1", units: 2 }, { id: "LIS 123", code: "LIS 123", title: "Intro to Records Mgmt", units: 3 }, { id: "LST 123", code: "LST 123", title: "Philosophies of Teaching", units: 3 }, { id: "LICT 122", code: "LICT 122", title: "Web Tech in Libraries", units: 3 }, GE_COMMONS.PE122, GE_COMMONS.NSTP122]
        },
        {
            name: "2nd Year - 1st Semester",
            subjects: [GE_COMMONS.GE217, GE_COMMONS.GE218, { id: "LIS 214", code: "LIS 214", title: "Info Resources & Services 1", units: 3 }, { id: "LIS 215", code: "LIS 215", title: "Organization of Info 1", units: 3 }, { id: "LIS 216", code: "LIS 216", title: "Collection Mgmt 2", units: 3 }, { id: "LST 214", code: "LST 214", title: "Preservation of Info Resources", units: 3 }, { id: "LICT 213", code: "LICT 213", title: "Digital Libraries", units: 3 }, GE_COMMONS.PE213]
        },
        {
            name: "2nd Year - 2nd Semester",
            subjects: [GE_COMMONS.GE215, GE_COMMONS.GE216, { id: "LIS 227", code: "LIS 227", title: "Info Resources & Services 2", units: 3 }, { id: "LIS 228", code: "LIS 228", title: "Organization of Info 2", units: 3 }, { id: "LIS 228b", code: "LIS 228b", title: "Library Materials for Children", units: 3 }, { id: "LST 225", code: "LST 225", title: "Educational Tech", units: 3 }, { id: "LICT 224", code: "LICT 224", title: "Programming Fundamentals", units: 3 }, GE_COMMONS.PE224]
        },
        {
            name: "Summer",
            subjects: [{ id: "LP 331", code: "LP 331", title: "Library Practice/Campus Practicum", units: 3 }]
        },
        {
            name: "4th Year - 1st Semester",
            subjects: [{ id: "LIS 400_41", code: "LIS 400", title: "Thesis", units: 3 }, { id: "LICE 414", code: "LICE 414", title: "Prof Elective 4", units: 3 }, { id: "LP 412", code: "LP 412", title: "Library Practice", units: 3 }]
        },
        {
            name: "4th Year - 2nd Semester",
            subjects: [{ id: "LIS 400_42", code: "LIS 400", title: "Thesis Research Writing", units: 3 }, { id: "LST 429", code: "LST 429", title: "Foreign Language", units: 3 }, { id: "KORA 21", code: "KORA 21", title: "Integrated Course Review", units: 3 }]
        }
    ],
    "Custom (Manual Input)": [
        {
            name: "Semester 1",
            subjects: []
        }
    ]
};

// For backward compatibility or default view
export const TERMS = CURRICULUMS["BS Computer Science (Data Science)"];
