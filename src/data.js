export const COLLEGES = {
    "College of Information and Computing": [
        "BS in Information Technology (Specialization: Information Security)",
        "BS in Computer Science (Specialization: Data Science)",
        "BS in Information Technology (Specialization: Business Technology Management)",
        "Bachelor of Library and Information Science (BLIS)"
    ],
    "College of Engineering": [
        "BS in Civil Engineering (Transportation Engineering)",
        "BS in Electronics Engineering (BSECE)",
        "BS in Electrical Engineering (BSEE)",
        "BS in Geodetic Engineering (BSGE)",
        "BS in Mechanical Engineering (BSME)",
        "BS in Mining Engineering",
        "BS in Sanitary Engineering (BSSE)",
        "BS in Geology",
        "BS in Agricultural and Biosystems Engineering (BSABE)"
    ],
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
    "BS in Civil Engineering (Transportation Engineering)": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112, GE_COMMONS.GE215,
                { id: "Math 111", code: "Math 111", title: "Engineering Calculus 1", units: 3 },
                { id: "Nat Sci 1", code: "Nat Sci 1", title: "Chemistry for Engineers", units: 3 },
                { id: "BES 101", code: "BES 101", title: "Engineering Drawing and Plans", units: 3 },
                { id: "CEC 111", code: "CEC 111", title: "Civil Engineering Orientation", units: 3 },
                GE_COMMONS.PE111, GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE113, GE_COMMONS.GE114, GE_COMMONS.GE217,
                { id: "Math 121", code: "Math 121", title: "Engineering Calculus 2", units: 3 },
                { id: "Nat Sci 2", code: "Nat Sci 2", title: "Physics for Engineers", units: 3 },
                { id: "BES 102", code: "BES 102", title: "Computer Aided Drafting", units: 3 },
                { id: "Nat Sci 3", code: "Nat Sci 3", title: "Engineering Geology", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Off Semester 1",
            subjects: [
                { id: "BES 103", code: "BES 103", title: "Computer Fundamentals and Programming", units: 3 }
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE216, GE_COMMONS.EGE311, GE_COMMONS.GE319,
                { id: "Math 211", code: "Math 211", title: "Differential Equations", units: 3 },
                { id: "Math 212", code: "Math 212", title: "Engineering Data Analysis", units: 3 },
                { id: "BES 115", code: "BES 115", title: "Mechanics of Rigid Bodies", units: 3 },
                { id: "BES 106", code: "BES 106", title: "Engineering Economics", units: 3 },
                GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE218,
                { id: "Math 311", code: "Math 311", title: "Numerical Solutions to CE Problems", units: 3 },
                GE_COMMONS.EGE312,
                { id: "BES 105", code: "BES 105", title: "Mechanics of Deformable Bodies", units: 3 },
                { id: "BES 107", code: "BES 107", title: "Methods of Research", units: 3 },
                { id: "CEC 221", code: "CEC 221", title: "Fundamentals of Surveying", units: 3 },
                { id: "CEC 221F", code: "CEC 221F", title: "Fundamentals of Surveying, Field", units: 3 },
                { id: "CEC 222", code: "CEC 222", title: "Building System Design", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Off Semester 2",
            subjects: [
                { id: "ALE 221", code: "ALE 221", title: "Engineering Utilities 1", units: 3 },
                { id: "ALE 222", code: "ALE 222", title: "Engineering Utilities 2", units: 3 }
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE313,
                { id: "BES 109", code: "BES 109", title: "Engineering Management", units: 3 },
                { id: "CEC 311", code: "CEC 311", title: "Structural Theory", units: 3 },
                { id: "CEC 312", code: "CEC 312", title: "Principle of Transportation Engineering", units: 3 },
                { id: "CEC 313", code: "CEC 313", title: "Geotechnical Engineering, Lecture", units: 3 },
                { id: "CEC 313L", code: "CEC 313L", title: "Geotechnical Engineering, Lab", units: 3 },
                { id: "CEC 314", code: "CEC 314", title: "Quantity Surveying", units: 3 },
                { id: "CEC 315", code: "CEC 315", title: "Hydraulics, lecture", units: 3 },
                { id: "CEC 315L", code: "CEC 315L", title: "Hydraulics lab", units: 3 }
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                { id: "CEC 321", code: "CEC 321", title: "Highway and Railroad Engineering", units: 3 },
                { id: "CEC 322", code: "CEC 322", title: "Construction Materials and Testing, lecture", units: 3 },
                { id: "CEC 322L", code: "CEC 322L", title: "Construction Materials and Testing Lab", units: 3 },
                { id: "CEC 323", code: "CEC 323", title: "Principle of Steel & Timber Design", units: 3 },
                { id: "CEC 324", code: "CEC 324", title: "Principle of Reinforced Pre-stressed Concrete", units: 3 },
                { id: "CEC 325", code: "CEC 325", title: "Hydrology", units: 3 },
                { id: "CEC 326", code: "CEC 326", title: "Construction Methods and Project Management", units: 3 },
                { id: "CEC 327", code: "CEC 327", title: "CE Laws, Ethics and Contracts", units: 3 },
                { id: "BES 110", code: "BES 110", title: "Technopreneurship", units: 3 }
            ]
        },
        {
            name: "Off Semester 3",
            subjects: [
                { id: "CENC", code: "CENC", title: "Basic Driving and Automotive", units: 3 },
                { id: "CE IC 2", code: "CE IC 2", title: "Scaffold Erection", units: 3 },
                { id: "CE IC S", code: "CE IC S", title: "Disaster Risk Management", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                { id: "CEC 400", code: "CEC 400", title: "CE Project (Specialization Project, Thesis)", units: 3 },
                { id: "CE FC 4", code: "CE FC 4", title: "Field trip and Seminars", units: 3 },
                { id: "CE 43_1", code: "CE 43", title: "Professional Course Specialized 1", units: 3 },
                { id: "CE 43_2", code: "CE 43", title: "Professional Course - Specialized 2", units: 3 },
                { id: "CE 43_3", code: "CE 43", title: "Professional Course-Specialized 3", units: 3 },
                { id: "CE 43_4", code: "CE 43", title: "Professional Course - Specialized 4", units: 3 },
                { id: "CE 43_5", code: "CE 43", title: "Professional Course-Specialized 5", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                { id: "CEC 400_2", code: "CEC 400", title: "CE Project (Specialization Project, Thesis)", units: 3 },
                { id: "CE Elective", code: "CE Elective", title: "Correlation Course", units: 3 },
                { id: "CEC 401", code: "CEC 401", title: "Specialized On-the-Job Training (320 hrs)", units: 3 },
                { id: "ELEC", code: "ELEC", title: "FREE ELECTIVE", units: 3 }
            ]
        }
    ],
    "BS in Electronics Engineering (BSECE)": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112, GE_COMMONS.GE217,
                { id: "Math 111", code: "Math 111", title: "Engineering Calculus 1", units: 3 },
                { id: "Nat Sci 1", code: "Nat Sci 1", title: "Chemistry for Engineers", units: 3 },
                { id: "BES 101", code: "BES 101", title: "Engineering Drawing and Plans", units: 3 },
                { id: "ECE 111", code: "ECE 111", title: "Computer Programming Object Oriented Programming", units: 3 },
                { id: "ECE IC1", code: "ECE IC1", title: "Integration Course for ECE 1", units: 3 },
                GE_COMMONS.PE111, GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE113, GE_COMMONS.GE114,
                { id: "Math 121", code: "Math 121", title: "Engineering Calculus 2", units: 3 },
                { id: "Nat Sci 2", code: "Nat Sci 2", title: "Physics for Engineers", units: 3 },
                { id: "Nat Sci 2L", code: "Nat Sci 2L", title: "College Physics", units: 3 },
                { id: "BES 102", code: "BES 102", title: "Computer Aided Drafting", units: 3 },
                { id: "ECE IC2", code: "ECE IC2", title: "Integration Course for ECE 2", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE215, GE_COMMONS.GE216,
                { id: "Math 211", code: "Math 211", title: "Differential Equations", units: 3 },
                { id: "Math 212", code: "Math 212", title: "Engineering Data Analysis", units: 3 },
                { id: "EE 211", code: "EE 211", title: "Electrical Circuits 1", units: 3 },
                { id: "EE 211L", code: "EE 211L", title: "Electrical Circuits 1 Lab", units: 3 },
                { id: "ECE 211", code: "ECE 211", title: "Electronic Devices and Circuits", units: 3 },
                { id: "ECE 211L", code: "ECE 211L", title: "Electronic Devices and Circuits Lab", units: 3 },
                { id: "ECE 212", code: "ECE 212", title: "Fundamentals of Scientific Computing", units: 3 },
                { id: "ECE IC3", code: "ECE IC3", title: "Integration Course for ECE 3", units: 3 },
                GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                GE_COMMONS.EGE311,
                { id: "BES 106", code: "BES 106", title: "Engineering Economics", units: 3 },
                { id: "EE 221", code: "EE 221", title: "Electrical Circuits 2", units: 3 },
                { id: "EE 221L", code: "EE 221L", title: "Electrical Circuits 2 Lab", units: 3 },
                { id: "ECE 221", code: "ECE 221", title: "Electronic Circuit Analysis & Design", units: 3 },
                { id: "ECE 221L", code: "ECE 221L", title: "Electronic Circuit Analysis & Design Lab", units: 3 },
                { id: "ECE 222", code: "ECE 222", title: "Principles of Communication Systems", units: 3 },
                { id: "ECE 222L", code: "ECE 222L", title: "Principles of Communication Systems Lab", units: 3 },
                { id: "ECE 223", code: "ECE 223", title: "Advanced Engineering Mathematics for ECE", units: 3 },
                { id: "ECE 223L", code: "ECE 223L", title: "Advanced Engineering Mathematics for ECE Lab", units: 3 },
                { id: "ECE IC4", code: "ECE IC4", title: "Integration Course for ECE 4", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                { id: "ECE 311", code: "ECE 311", title: "Electronic Systems and Designs", units: 3 },
                { id: "ECE 311L", code: "ECE 311L", title: "Electronic Systems and Designs Lab", units: 3 },
                { id: "ECE 312", code: "ECE 312", title: "Signals, Spectra, Signal Processing", units: 3 },
                { id: "ECE 312L", code: "ECE 312L", title: "Signals, Spectra, Signal Processing Lab", units: 3 },
                { id: "ECE 313", code: "ECE 313", title: "Modulation & Coding Techniques", units: 3 },
                { id: "ECE 313L", code: "ECE 313L", title: "Modulation & Coding Techniques Lab", units: 3 },
                { id: "ECE 314", code: "ECE 314", title: "Logic Circuits Design & Switching Theory", units: 3 },
                { id: "ECE 314L", code: "ECE 314L", title: "Logic Circuits Design & Switching Theory Lab", units: 3 },
                { id: "ECE 315", code: "ECE 315", title: "Electromagnetics for ECE", units: 3 },
                GE_COMMONS.GE218, GE_COMMONS.EGE313
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                { id: "ECE 321", code: "ECE 321", title: "Data Communications", units: 3 },
                { id: "ECE 321L", code: "ECE 321L", title: "Data Communications Lab", units: 3 },
                { id: "ECE 322", code: "ECE 322", title: "Transmission Media, Antenna System & Design", units: 3 },
                { id: "EGE 322", code: "EGE 322", title: "Transmission Media, Antenna System & Design Lab", units: 3 },
                { id: "ECE 323", code: "ECE 323", title: "Feedback and Control Systems", units: 3 },
                { id: "ECE 323L", code: "ECE 323L", title: "Feedback and Control Systems Lab", units: 3 },
                { id: "ECE 324", code: "ECE 324", title: "Microprocessor & Microcontroller Systems", units: 3 },
                { id: "ECE 324L", code: "ECE 324L", title: "Microprocessor & Microcontroller Systems Lab", units: 3 },
                { id: "ECE EL1", code: "ECE EL1", title: "ECE Elective 1", units: 3 },
                { id: "ECE EL1L", code: "ECE EL1L", title: "ECE Elective 1 Lab", units: 3 },
                { id: "BES 107", code: "BES 107", title: "Methods of Research", units: 3 }
            ]
        },
        {
            name: "Fourth Year - Off Semester",
            subjects: [
                GE_COMMONS.EGE312, GE_COMMONS.GE319
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                { id: "BES 109", code: "BES 109", title: "Engineering Management", units: 3 },
                { id: "BES 110", code: "BES 110", title: "Technoprenuership", units: 3 },
                { id: "BES 112", code: "BES 112", title: "Environmental Science and Engineering", units: 3 },
                { id: "BES 114", code: "BES 114", title: "Material Science and Engineering", units: 3 },
                { id: "ECE 400", code: "ECE 400", title: "Capstone Project", units: 3 },
                { id: "ECE 411", code: "ECE 411", title: "ECE Laws Contracts Ethics Standards & Safety", units: 3 },
                { id: "ECE 412", code: "ECE 412", title: "Industrial Plant Visits and Seminars", units: 3 },
                { id: "ECE 413", code: "ECE 413", title: "Free Elective", units: 3 },
                { id: "ECE EL2", code: "ECE EL2", title: "ECE Elective 2", units: 3 },
                { id: "ECE EL2L", code: "ECE EL2L", title: "ECE Elective 2 Lab", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                { id: "ECE 400_2", code: "ECE 400", title: "Capstone Project", units: 3 },
                { id: "ECE 421", code: "ECE 421", title: "Correlation Course for ECE", units: 3 },
                { id: "ECE 422", code: "ECE 422", title: "On the Job Training (320 Hours)", units: 3 }
            ]
        }
    ],
    "BS in Electrical Engineering (BSEE)": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112, GE_COMMONS.GE215, GE_COMMONS.GE216,
                { id: "Math 111", code: "Math 111", title: "Engineering Calculus 1", units: 3 },
                { id: "Nat Sci 1", code: "Nat Sci 1", title: "Chemistry for Engineers", units: 3 },
                { id: "BES 101", code: "BES 101", title: "Engineering Drawing and Plans", units: 3 },
                GE_COMMONS.PE111, GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE113, GE_COMMONS.GE114,
                { id: "Math 121", code: "Math 121", title: "Engineering Calculus 2", units: 3 },
                { id: "Math 212", code: "Math 212", title: "Engineering Data Analysis", units: 3 },
                { id: "Nat Sci 2", code: "Nat Sci 2", title: "Physics for Engineers", units: 3 },
                { id: "BES 102", code: "BES 102", title: "Computer Aided Drafting", units: 3 },
                { id: "BES 100", code: "BES 100", title: "Computer Fundamentals and Programming", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                { id: "Math 211", code: "Math 211", title: "Differential Equations", units: 3 },
                { id: "EE 211", code: "EE 211", title: "Electrical Circuits 1", units: 3 },
                { id: "EE 211L", code: "EE 211L", title: "Electrical Circuits 1 Lab", units: 3 },
                { id: "BES 104", code: "BES 104", title: "Engineering Mechanics", units: 3 },
                { id: "BES 108", code: "BES 108", title: "Fluid Mechanics", units: 3 },
                { id: "AEE 213", code: "AEE 213", title: "Basic Thermodynamics", units: 3 },
                { id: "BES 113", code: "BES 113", title: "Basic Occupational Health and Safety", units: 3 },
                GE_COMMONS.GE217, GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                GE_COMMONS.EGE311, GE_COMMONS.GE218,
                { id: "EE 221", code: "EE 221", title: "Electrical Circuits 2", units: 3 },
                { id: "EE 221L", code: "EE 221L", title: "Electrical Circuits 2 Lab", units: 3 },
                { id: "EE 222", code: "EE 222", title: "Advanced Engineering Mathematics for EE", units: 3 },
                { id: "EE 223", code: "EE 223", title: "Electromagnetics 1", units: 3 },
                { id: "AEE 221", code: "AEE 221", title: "Electronic Circuits Devices and Analysis", units: 3 },
                { id: "AEE 221L", code: "AEE 221L", title: "Electronic Circuits Devices and Analysis Lab", units: 3 },
                { id: "AEE 222", code: "AEE 222", title: "Fundamentals of Deformable Bodies", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE313,
                { id: "EE 311", code: "EE 311", title: "Electrical Machines 1", units: 3 },
                { id: "EE 311L", code: "EE 311L", title: "Electrical Machines 1 Lab", units: 3 },
                { id: "EE 312", code: "EE 312", title: "EE Laws Codes and Professional Ethics", units: 3 },
                { id: "EE 313", code: "EE 313", title: "Feedback Control Systems", units: 3 },
                { id: "BES 114", code: "BES 114", title: "Material Science and Engineering", units: 3 },
                { id: "AEE 311", code: "AEE 311", title: "Industrial Electronics", units: 3 },
                { id: "AEE 311L", code: "AEE 311L", title: "Industrial Electronics Lab", units: 3 },
                { id: "AEE 313", code: "AEE 313", title: "Logic Circuits Design and Switching Theory", units: 3 },
                { id: "AEE 313L", code: "AEE 313L", title: "Logic Circuits Design and Switching Theory Lab", units: 3 },
                { id: "ECE 222", code: "ECE 222", title: "Principles of Communication Systems", units: 3 }
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                { id: "BES 109", code: "BES 109", title: "Engineering Management", units: 3 },
                { id: "BES 110", code: "BES 110", title: "Technopreneurship", units: 3 },
                { id: "EE 321", code: "EE 321", title: "Electrical Machines 2", units: 3 },
                { id: "EE 321L", code: "EE 321L", title: "Electrical Machines 2 Lab", units: 3 },
                { id: "EE 322", code: "EE 322", title: "Electrical Standards and Practice", units: 3 },
                { id: "EE 323", code: "EE 323", title: "Instrumentation and Control", units: 3 },
                { id: "EE 323L", code: "EE 323L", title: "Instrumentation and Control Lab", units: 3 },
                { id: "AEE 321", code: "AEE 321", title: "Microprocessor Systems", units: 3 },
                { id: "AEE 321L", code: "AEE 321L", title: "Microprocessor Systems Lab", units: 3 },
                { id: "BES 107", code: "BES 107", title: "Methods of Research", units: 3 },
                { id: "EE EL1", code: "EE EL1", title: "EE Elective 1", units: 3 },
                { id: "EE 324", code: "EE 324", title: "Numerical Methods and Analysis", units: 3 },
                { id: "EE 324L", code: "EE 324L", title: "Numerical Methods and Analysis Lab", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                { id: "EE 400", code: "EE 400", title: "Capstone Design Project", units: 3 },
                { id: "EE 411", code: "EE 411", title: "Power System Analysis", units: 3 },
                { id: "EE 411L", code: "EE 411L", title: "Power System Analysis Lab", units: 3 },
                { id: "EE 412", code: "EE 412", title: "Industrial Plant Visits and Seminars", units: 3 },
                { id: "EE 413", code: "EE 413", title: "Electrical Systems & Illumination Engg Design", units: 3 },
                { id: "EE 413L", code: "EE 413L", title: "Electrical Systems & Illumination Engg Design Lab", units: 3 },
                { id: "EE 414L", code: "EE 414L", title: "Fundamentals of Power Plant Engineering Design", units: 3 },
                { id: "EE 415", code: "EE 415", title: "Distribution Systems and Substation Design", units: 3 },
                { id: "EE 415L", code: "EE 415L", title: "Distribution Systems and Substation Design Lab", units: 3 },
                { id: "EE EL2", code: "EE EL2", title: "EE Elective 2", units: 3 },
                { id: "EE 416", code: "EE 416", title: "Electrical Apparatus and Devices", units: 3 },
                { id: "EE 416L", code: "EE 416L", title: "Electrical Apparatus and Devices Lab", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                { id: "EE 400_2", code: "EE 400", title: "Capstone Design Project", units: 3 },
                { id: "EE 421", code: "EE 421", title: "On-the-Job Training (320 hrs)", units: 3 },
                { id: "EE EL3", code: "EE EL3", title: "EE Elective 3 Correlation Course 1", units: 3 },
                { id: "EE EL4", code: "EE EL4", title: "Free Elective", units: 3 }
            ]
        }
    ],

    "BS in Geodetic Engineering (BSGE)": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112,
                { id: "GEn 111", code: "GEn 111", title: "Geodetic Engineering Orientation", units: 3 },
                { id: "GEn 112", code: "GEn 112", title: "General Surveying 1", units: 3 },
                { id: "BES 101", code: "BES 101", title: "Engineering Drawing and Plans", units: 3 },
                { id: "BES 103", code: "BES 103", title: "Computer Fundamentals and Programming", units: 3 },
                { id: "Math 111", code: "Math 111", title: "Engineering Calculus 1", units: 3 },
                GE_COMMONS.PE111, GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                { id: "GEn 121", code: "GEn 121", title: "General Surveying 2", units: 3 },
                { id: "GEn 122", code: "GEn 122", title: "Intro to the Laws on Private & Public Lands", units: 3 },
                { id: "Nat Sci 2", code: "Nat Sci 2", title: "Physics for Engineers", units: 3 },
                { id: "BES 111", code: "BES 111", title: "Computer Aided Drafting", units: 3 },
                { id: "Geo 111", code: "Geo 111", title: "Principles of Geology", units: 3 },
                { id: "Math 121", code: "Math 121", title: "Engineering Calculus 2", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                { id: "GE 211", code: "GE 211", title: "Engineering Surveys", units: 3 },
                { id: "GE 212", code: "GE 212", title: "Theory of Errors & Adjustments", units: 3 },
                { id: "GE 213", code: "GE 213", title: "Geometric Geodesy", units: 3 },
                { id: "GE 214", code: "GE 214", title: "Cartography & Map Projections", units: 3 },
                { id: "GE 215_g", code: "GE 215", title: "Geodetic Astronomy", units: 3 },
                { id: "Math 212", code: "Math 212", title: "Engineering Data Analysis", units: 3 },
                { id: "AGEn 1", code: "AGEn 1", title: "Advanced Information & Communications Tech", units: 3 },
                GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE113, GE_COMMONS.GE217, GE_COMMONS.GE215, GE_COMMONS.GE216,
                { id: "GEn 221", code: "GEn 221", title: "Hydrographic Surveying", units: 3 },
                { id: "GE 222", code: "GE 222", title: "Physical Geodesy", units: 3 },
                { id: "GEn 223", code: "GEn 223", title: "GE Laws Obligations and Contracts, & Ethics", units: 3 },
                { id: "GE 224", code: "GE 224", title: "Land Laws & Laws on Natural Resources", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE311,
                { id: "GEn 311", code: "GEn 311", title: "Satellite Geodesy", units: 3 },
                { id: "GEn 312", code: "GEn 312", title: "Geodetic Computations & Adjustments", units: 3 },
                { id: "GEn 313", code: "GEn 313", title: "Land Registration Laws", units: 3 },
                { id: "GEn 314", code: "GEn 314", title: "Geographic Information Systems", units: 3 },
                { id: "GEn 315", code: "GEn 315", title: "Mine Surveying", units: 3 },
                { id: "BES 106", code: "BES 106", title: "Engineering Economics", units: 3 },
                { id: "AGEn 2", code: "AGEn 2", title: "Electrical & Electronics Engg for Geodetic Engrs", units: 3 }
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                GE_COMMONS.EGE312,
                { id: "GE 321", code: "GE 321", title: "Geodetic Surveying", units: 3 },
                { id: "GEn 322", code: "GEn 322", title: "Photogrammetry", units: 3 },
                { id: "GE 323", code: "GE 323", title: "Property Surveys", units: 3 },
                { id: "BES 107", code: "BES 107", title: "Methods of Research", units: 3 },
                { id: "BES 109", code: "BES 109", title: "Engineering Management", units: 3 },
                { id: "BES 110", code: "BES 110", title: "Technopreneurship", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE313, GE_COMMONS.GE218, GE_COMMONS.GE319,
                { id: "GE 400", code: "GE 400", title: "Special Studies in Geodetic Engineering", units: 3 },
                { id: "GEn 411", code: "GEn 411", title: "Remote Sensing", units: 3 },
                { id: "GEn 412", code: "GEn 412", title: "Land Administration & Management", units: 3 },
                { id: "GEn 413", code: "GEn 413", title: "GEn Elective", units: 3 },
                { id: "AGEn 3", code: "AGEn 3", title: "Intro to Environmental Science & Engineering", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE114,
                { id: "GEn 400", code: "GEn 400", title: "Special Studies in Geodetic Engineering", units: 3 },
                { id: "GEn 421", code: "GEn 421", title: "Land Use Planning & Development", units: 3 },
                { id: "GEn 422", code: "GEn 422", title: "Correlation Course for GE", units: 3 },
                { id: "ELEC", code: "ELEC", title: "Free Elective", units: 3 },
                { id: "BES 113", code: "BES 113", title: "Basic Occupational Health & Safety", units: 3 }
            ]
        }
    ],
    "BS in Mechanical Engineering (BSME)": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112, GE_COMMONS.GE113,
                { id: "Math 111", code: "Math 111", title: "Engineering Calculus 1", units: 3 },
                { id: "Nat Sci 1", code: "Nat Sci 1", title: "Chemistry for Engineers", units: 3 },
                { id: "ME 111", code: "ME 111", title: "Orientation to Mechanical Engineering", units: 3 },
                { id: "BES 101", code: "BES 101", title: "Engineering Drawing and Plans", units: 3 },
                GE_COMMONS.PE111, GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE114, GE_COMMONS.GE217, GE_COMMONS.GE218,
                { id: "Math 121", code: "Math 121", title: "Engineering Calculus 2", units: 3 },
                { id: "Nat Sci 2", code: "Nat Sci 2", title: "Physics for Engineers", units: 3 },
                { id: "BES 103", code: "BES 103", title: "Computer Fundamentals and Programming", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE215, GE_COMMONS.GE216,
                { id: "Math 211", code: "Math 211", title: "Differential Equations", units: 3 },
                { id: "Math 212", code: "Math 212", title: "Engineering Data Analysis", units: 3 },
                { id: "ME 211", code: "ME 211", title: "Thermodynamics 1", units: 3 },
                { id: "ME 212L", code: "ME 212L", title: "Workshop Theory and Practice", units: 3 },
                { id: "AME 1", code: "AME 1", title: "Basic Electrical Engineering", units: 3 },
                { id: "AME 1L", code: "AME 1L", title: "Basic Electrical Engineering Laboratory", units: 3 },
                { id: "BES 115", code: "BES 115", title: "Mechanics of Rigid Bodies", units: 3 },
                GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                { id: "Math 221", code: "Math 221", title: "Advanced Mathematics for ME", units: 3 },
                { id: "ME 221", code: "ME 221", title: "Thermodynamics 2", units: 3 },
                { id: "ME 222", code: "ME 222", title: "Machine Elements", units: 3 },
                { id: "ME 222L", code: "ME 222L", title: "Machine Elements Laboratory", units: 3 },
                { id: "ME 223", code: "ME 223", title: "Machine Shop Theory", units: 3 },
                { id: "ME 224", code: "ME 224", title: "Heat Transfer", units: 3 },
                { id: "BES 102", code: "BES 102", title: "Computer Aided Drafting", units: 3 },
                { id: "BES 105", code: "BES 105", title: "Mechanics of Deformable Bodies", units: 3 },
                { id: "BES 108", code: "BES 108", title: "Fluid Mechanics", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE311,
                { id: "ME 311", code: "ME 311", title: "Fluid Machineries", units: 3 },
                { id: "ME 312L", code: "ME 312L", title: "Mechanical Engineering Laboratory 1", units: 3 },
                { id: "ME 313", code: "ME 313", title: "Refrigeration Systems", units: 3 },
                { id: "ME 314", code: "ME 314", title: "Combustion Engineering", units: 3 },
                { id: "ME 315L", code: "ME 315L", title: "Computer Applications for ME", units: 3 },
                { id: "AME 2", code: "AME 2", title: "Basic Electronics Engineering", units: 3 },
                { id: "AME 2L", code: "AME 2L", title: "Basic Electronics Engineering Laboratory", units: 3 },
                { id: "BES 106", code: "BES 106", title: "Engineering Economics", units: 3 },
                { id: "BES 111", code: "BES 111", title: "Materials Science and Engineering for ME", units: 3 },
                { id: "BES 111L", code: "BES 111L", title: "Material Science and Engineering Laboratory", units: 3 }
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                GE_COMMONS.EGE312,
                { id: "ME 321", code: "ME 321", title: "Power Plant Design with Renewable Energy", units: 3 },
                { id: "ME 321L", code: "ME 321L", title: "Power Plant Design with Renewable Energy Lab", units: 3 },
                { id: "ME 322", code: "ME 322", title: "Machine Design 1", units: 3 },
                { id: "ME 323", code: "ME 323", title: "Control Engineering", units: 3 },
                { id: "ME 323L", code: "ME 323L", title: "Control Engineering Laboratory", units: 3 },
                { id: "ME 324L", code: "ME 324L", title: "Mechanical Engineering Laboratory 2", units: 3 },
                { id: "ME 325", code: "ME 325", title: "Air-conditioning and Ventilation Systems", units: 3 },
                { id: "AME 3", code: "AME 3", title: "DC & AC Machinery", units: 3 },
                { id: "AME 3L", code: "AME 3L", title: "DC & AC Machinery Laboratory", units: 3 },
                { id: "BES 107", code: "BES 107", title: "Methods of Research", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                { id: "ME 400", code: "ME 400", title: "ME Capstone Project", units: 3 },
                { id: "ME 411", code: "ME 411", title: "Machine Design 2", units: 3 },
                { id: "ME 411L", code: "ME 411L", title: "Machine Design 2 Laboratory", units: 3 },
                { id: "ME 412", code: "ME 412", title: "Industrial Plant Engineering", units: 3 },
                { id: "ME 412L", code: "ME 412L", title: "Industrial Plant Engineering Laboratory", units: 3 },
                { id: "ME 413L", code: "ME 413L", title: "Mechanical Engineering Laboratory 3", units: 3 },
                { id: "ME 414", code: "ME 414", title: "Industrial Processes with Plant Visits and Seminars", units: 3 },
                { id: "ME 415_1", code: "ME 415", title: "ME Laws Ethics Contracts, Codes and Standards", units: 3 },
                { id: "ME 415_2", code: "ME 415", title: "Vibration Engineering", units: 3 },
                { id: "ME EL1", code: "ME EL1", title: "ME Elective 1 (Correlation Course 1)", units: 3 },
                { id: "BES 109", code: "BES 109", title: "Engineering Management", units: 3 },
                { id: "BES 110", code: "BES 110", title: "Technopreneurship", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                { id: "ME 400_2", code: "ME 400", title: "ME Capstone Project", units: 3 },
                { id: "ME 421", code: "ME 421", title: "On-The-Job-Training (320 hours)", units: 3 },
                { id: "ME EL2", code: "ME EL2", title: "ME Elective 2 (Correlation Course 2)", units: 3 },
                { id: "ME EL3", code: "ME EL3", title: "ME Elective 3", units: 3 }
            ]
        }
    ],
    "BS in Mining Engineering": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112,
                { id: "Math 111", code: "Math 111", title: "Engineering Calculus 1", units: 3 },
                { id: "Nat Sci 1", code: "Nat Sci 1", title: "Chemistry for Engineers", units: 3 },
                { id: "BES 101", code: "BES 101", title: "Engineering Drawing and Plans", units: 3 },
                { id: "Geol 111", code: "Geol 111", title: "Principles of Geology", units: 3 },
                GE_COMMONS.PE111, GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE113, GE_COMMONS.GE114, GE_COMMONS.GE217,
                { id: "Math 121", code: "Math 121", title: "Engineering Calculus 2", units: 3 },
                { id: "Nat Sci 2", code: "Nat Sci 2", title: "Physics for Engineers", units: 3 },
                { id: "BES 102", code: "BES 102", title: "Computer-Aided Drafting", units: 3 },
                { id: "Geol 122", code: "Geol 122", title: "Elementary Mineralogy", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE311, GE_COMMONS.GE215, GE_COMMONS.GE216,
                { id: "Math 212", code: "Math 212", title: "Engineering Data Analysis", units: 3 },
                { id: "EM 211", code: "EM 211", title: "Underground Mining", units: 3 },
                { id: "Met E 211", code: "Met E 211", title: "Principles of Metallurgy", units: 3 },
                { id: "Geol 214", code: "Geol 214", title: "Structural Geology", units: 3 },
                GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE218,
                { id: "EM 221", code: "EM 221", title: "Surface Mining", units: 3 },
                { id: "EM 222", code: "EM 222", title: "Mineral Deposits", units: 3 },
                { id: "Met E 221", code: "Met E 221", title: "Mineral Processing", units: 3 },
                { id: "Met E 222", code: "Met E 222", title: "Techniques of Metallurgical Analysis", units: 3 },
                { id: "GEn 112", code: "GEn 112", title: "General Surveying 1", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                { id: "EM 311", code: "EM 311", title: "Techniques of Mining Analysis", units: 3 },
                { id: "EM 312", code: "EM 312", title: "Mine Safety", units: 3 },
                { id: "GEn 315", code: "GEn 315", title: "Mine Surveying", units: 3 },
                { id: "BES 104", code: "BES 104", title: "Engineering Mechanics", units: 3 },
                { id: "BES 108", code: "BES 108", title: "Fluid Mechanics", units: 3 },
                { id: "BES 112", code: "BES 112", title: "Environmental Science and Engineering", units: 3 },
                GE_COMMONS.GE319, GE_COMMONS.EGE312
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                GE_COMMONS.EGE313,
                { id: "EM 322", code: "EM 322", title: "Mine Ventilation", units: 3 },
                { id: "EM 323", code: "EM 323", title: "Basic Mechanical Equipment", units: 3 },
                { id: "EM TS1", code: "EM TS1", title: "Track Specialization 1", units: 3 },
                { id: "BES 105", code: "BES 105", title: "Mechanics of Deformable Bodies", units: 3 },
                { id: "BES 106", code: "BES 106", title: "Engineering Economics", units: 3 },
                { id: "BES 107", code: "BES 107", title: "Methods of Research", units: 3 },
                { id: "AEM", code: "AEM", title: "Basic Electrical Engineering", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                { id: "EM 400", code: "EM 400", title: "Mine Research and Study", units: 3 },
                { id: "EM 411", code: "EM 411", title: "Mine Design", units: 3 },
                { id: "EM 412", code: "EM 412", title: "Mine Environmental Management", units: 3 },
                { id: "EM 413", code: "EM 413", title: "Mining and Environmental Laws and Ethics", units: 3 },
                { id: "EM TS2", code: "EM TS2", title: "Track Specialization 2", units: 3 },
                { id: "EM 414", code: "EM 414", title: "Rock Mechanics", units: 3 },
                { id: "BES 109", code: "BES 109", title: "Engineering Management", units: 3 },
                { id: "BES 110", code: "BES 110", title: "Technopreneurship", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                { id: "EM 400_2", code: "EM 400", title: "Mine Research and Study", units: 3 },
                { id: "EM 421", code: "EM 421", title: "Mining Seminar", units: 3 },
                { id: "EM 422", code: "EM 422", title: "Correlation Course", units: 3 },
                { id: "EM 423", code: "EM 423", title: "Mine Management", units: 3 },
                { id: "EM 424", code: "EM 424", title: "Mine Economics", units: 3 },
                { id: "EM TS3", code: "EM TS3", title: "Track Specialization 3", units: 3 },
                { id: "EL 421", code: "EL 421", title: "Energy Resources", units: 3 },
                { id: "EGE 421", code: "EGE 421", title: "Free Elective", units: 3 }
            ]
        }
    ],
    "BS in Sanitary Engineering (BSSE)": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112, GE_COMMONS.GE215,
                { id: "Math 111", code: "Math 111", title: "Engineering Calculus 1", units: 3 },
                { id: "Nat Sci 1", code: "Nat Sci 1", title: "Chemistry for Engineers", units: 3 },
                { id: "BES 101", code: "BES 101", title: "Engineering Drawing and Plans", units: 3 },
                { id: "SEP 111", code: "SEP 111", title: "Sanitary Engineering Orientation", units: 3 },
                GE_COMMONS.PE111, GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE113, GE_COMMONS.GE114, GE_COMMONS.GE217,
                { id: "Math 121", code: "Math 121", title: "Engineering Calculus 2", units: 3 },
                { id: "Nat Sci 2", code: "Nat Sci 2", title: "Physics for Engineers", units: 3 },
                { id: "BES 102", code: "BES 102", title: "Computer Aided Drafting", units: 3 },
                { id: "SEP 121", code: "SEP 121", title: "Environmental and Sanitary Chemistry", units: 3 },
                { id: "SEP 121L", code: "SEP 121L", title: "Environmental and Sanitary Chemistry Lab", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE216,
                { id: "Nat Sci 3", code: "Nat Sci 3", title: "Engineering Geology", units: 3 },
                { id: "Math 211", code: "Math 211", title: "Differential Equations", units: 3 },
                { id: "Math 212", code: "Math 212", title: "Engineering Data Analysis", units: 3 },
                { id: "BES 103", code: "BES 103", title: "Computer Fundamentals and Programming", units: 3 },
                { id: "BES 106", code: "BES 106", title: "Engineering Economics", units: 3 },
                { id: "BES 115", code: "BES 115", title: "Mechanics of Rigid Bodies", units: 3 },
                GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                { id: "BES 105", code: "BES 105", title: "Mechanics of Deformable Bodies", units: 3 },
                { id: "BES 107", code: "BES 107", title: "Methods of Research", units: 3 },
                { id: "BES 112", code: "BES 112", title: "Environmental Science and Engineering", units: 3 },
                { id: "CEC 221", code: "CEC 221", title: "Fundamentals of Surveying", units: 3 },
                { id: "CEC 221F", code: "CEC 221F", title: "Fundamentals of Surveying Field", units: 3 },
                { id: "ALE 223", code: "ALE 223", title: "Basic Mechanical Engineering", units: 3 },
                { id: "ALE 224", code: "ALE 224", title: "Basic Electrical Engineering", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                { id: "Math 311", code: "Math 311", title: "Numerical Solutions to SE Problems", units: 3 },
                { id: "CEC 313", code: "CEC 313", title: "Geotechnical Engineering, Lecture", units: 3 },
                { id: "CEC 313L", code: "CEC 313L", title: "Geotechnical Engineering, Lab", units: 3 },
                { id: "CED 311", code: "CED 311", title: "Structural Theory", units: 3 },
                { id: "SEP 311", code: "SEP 311", title: "Hydraulics lecture", units: 3 },
                { id: "SEP 311L", code: "SEP 311L", title: "Hydraulics lab", units: 3 },
                { id: "SEP 312", code: "SEP 312", title: "Hydrology", units: 3 },
                { id: "SEP 313", code: "SEP 313", title: "Microbiology and Parasitology for Environmental Engineers", units: 3 },
                { id: "SEP 314", code: "SEP 314", title: "Solid and Hazardous Waste Engineering", units: 3 }
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                { id: "CEC 327", code: "CEC 327", title: "Construction Materials and Testing lecture", units: 3 },
                { id: "CEC 327L", code: "CEC 327L", title: "Construction Materials and Testing lab", units: 3 },
                { id: "CED 321", code: "CED 321", title: "Principle of Reinforced Pre-stressed Concrete", units: 3 },
                { id: "SEP 321", code: "SEP 321", title: "Sanitary Science, Fire Protection and Plumbing as Applied to Building", units: 3 },
                { id: "SEP 322", code: "SEP 322", title: "Water Supply Planning and Design", units: 3 },
                { id: "SEP 323", code: "SEP 323", title: "Sewerage and Urban Drainage", units: 3 },
                { id: "SEP 325", code: "SEP 325", title: "Public Health Engineering", units: 3 },
                { id: "SEP 326", code: "SEP 326", title: "Environmental Planning Laws and Impact Assessment", units: 3 },
                GE_COMMONS.EGE311
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE312, GE_COMMONS.EGE313,
                { id: "SEP 400", code: "SEP 400", title: "SE Project", units: 3 },
                { id: "SED 411", code: "SED 411", title: "Water Purification Process Design", units: 3 },
                { id: "SEP 412", code: "SEP 412", title: "Sewerage and Industrial Wastewater Treatment", units: 3 },
                { id: "SEP 413", code: "SEP 413", title: "Sanitary Engineering Laws Contract and Ethics", units: 3 },
                { id: "SEP 414", code: "SEP 414", title: "Environmental Engineering Laboratory", units: 3 },
                { id: "SEP 415", code: "SEP 415", title: "Planning and Design Environmental and Sanitary Engineering", units: 3 },
                { id: "SEP 416", code: "SEP 416", title: "Project Management", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                { id: "SEP 400_2", code: "SEP 400", title: "SE Project", units: 3 },
                { id: "SEP 421", code: "SEP 421", title: "Correlation Course", units: 3 },
                { id: "SEP 422", code: "SEP 422", title: "FREE ELECTIVE", units: 3 },
                { id: "SEP 423", code: "SEP 423", title: "Specialized On-the-Job Training (320 hrs)", units: 3 }
            ]
        }
    ],
    "BS in Geology": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112, GE_COMMONS.GE215,
                { id: "Math 111", code: "Math 111", title: "Engineering Calculus 1", units: 3 },
                { id: "Nat Sci 4", code: "Nat Sci 4", title: "Quantitative Inorganic Chemistry", units: 3 },
                { id: "Geol 111", code: "Geol 111", title: "Principles of Geology", units: 3 },
                { id: "PE 313", code: "PE 313", title: "Movement Enhancement", units: 2 },
                GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE113,
                { id: "GEn 112", code: "GEn 112", title: "General Surveying", units: 3 },
                { id: "BES 101", code: "BES 101", title: "Engineering Drawing and Plans", units: 3 },
                { id: "Math 121", code: "Math 121", title: "Engineering Calculus 2", units: 3 },
                { id: "Nat Sci 5", code: "Nat Sci 5", title: "Physics", units: 3 },
                { id: "Geol 12", code: "Geol 12", title: "Mineralogy", units: 3 },
                { id: "Geol 121", code: "Geol 121", title: "Mineralogy Lab", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE216,
                { id: "Math 213", code: "Math 213", title: "Elementary Statistics", units: 3 },
                { id: "Geol 211", code: "Geol 211", title: "Structural Geology and Tectonics", units: 3 },
                { id: "Geol 211L", code: "Geol 211L", title: "Structural Geology and Tectonics and Fieldwork", units: 3 },
                { id: "Geol 212", code: "Geol 212", title: "Petrology", units: 3 },
                { id: "Geol 212L", code: "Geol 212L", title: "Petrology Lab", units: 3 },
                { id: "Geol 213", code: "Geol 213", title: "Optical Mineralogy", units: 3 },
                { id: "Geol 213L", code: "Geol 213L", title: "Optical Mineralogy Lab", units: 3 },
                GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE114, GE_COMMONS.GE217,
                { id: "Nat Sci", code: "Nat Sci", title: "Analytical Chemistry", units: 3 },
                { id: "Geol 221", code: "Geol 221", title: "Geomorphology", units: 3 },
                { id: "Geol 221L", code: "Geol 221L", title: "Geomorphology Lab", units: 3 },
                { id: "Geol 222", code: "Geol 222", title: "Stratigraphy and Historical Geology", units: 3 },
                { id: "Geol 222L", code: "Geol 222L", title: "Stratigraphy and Historical Geology Lab", units: 3 },
                { id: "Geol 223", code: "Geol 223", title: "Paleontology", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE311, GE_COMMONS.GE319,
                { id: "Geol 311", code: "Geol 311", title: "Geophysics", units: 3 },
                { id: "Geol 311L", code: "Geol 311L", title: "Geophysics Lab", units: 3 },
                { id: "Geol 312", code: "Geol 312", title: "Computer Application in Geology", units: 3 },
                { id: "Geol 313", code: "Geol 313", title: "Geochemistry", units: 3 },
                { id: "Nat Sci 8", code: "Nat Sci 8", title: "Principles of Biology", units: 3 },
                { id: "Econ 122", code: "Econ 122", title: "Introductory Economics", units: 3 }
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE218,
                { id: "Geol EL 1", code: "Geol EL 1", title: "Geology Elective 1", units: 3 },
                GE_COMMONS.EGE312,
                { id: "Geol 321", code: "Geol 321", title: "Geostatistics", units: 3 },
                { id: "Geol 322", code: "Geol 322", title: "Geology of the Philippines and SE Asia", units: 3 },
                { id: "Geol 323", code: "Geol 323", title: "Resource Geology", units: 3 },
                { id: "Geol 324", code: "Geol 324", title: "Research Methodologies in Geology", units: 3 },
                { id: "Geol EL 2", code: "Geol EL 2", title: "Free Elective 1", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                { id: "Geol 411", code: "Geol 411", title: "Seminar in Geology", units: 3 },
                { id: "Geol 412", code: "Geol 412", title: "Geohazard", units: 3 },
                { id: "Geol 413", code: "Geol 413", title: "Geology Mining and Environmental Laws Energy Policies and Ethics", units: 3 },
                { id: "Geol EL 3", code: "Geol EL 3", title: "Geology Elective 2", units: 3 },
                { id: "Geol EL 4", code: "Geol EL 4", title: "Geology Elective 3", units: 3 },
                GE_COMMONS.EGE313,
                { id: "Geol 400", code: "Geol 400", title: "Thesis", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                { id: "Geol 421", code: "Geol 421", title: "Correlation Course", units: 3 },
                { id: "BES 108", code: "BES 108", title: "Fluid Mechanics", units: 3 },
                { id: "Geol EL 5", code: "Geol EL 5", title: "Free Elective 2", units: 3 },
                { id: "Geol EL 6", code: "Geol EL 6", title: "Geology Elective 4", units: 3 },
                { id: "Geol 400_2", code: "Geol 400", title: "Thesis", units: 3 }
            ]
        }
    ],
    "BS in Agricultural and Biosystems Engineering (BSABE)": [
        {
            name: "First Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE111, GE_COMMONS.GE112,
                { id: "ABE 111", code: "ABE 111", title: "Introduction to AB Engineering", units: 3 },
                { id: "AC 111", code: "AC 111", title: "Principles of Crop Science", units: 3 },
                { id: "BES 101", code: "BES 101", title: "Engineering Drawing and Plans", units: 3 },
                { id: "Nat Sci 1", code: "Nat Sci 1", title: "Chemistry for Engineers", units: 3 },
                { id: "Math 111", code: "Math 111", title: "Engineering Calculus 1", units: 3 },
                GE_COMMONS.PE111, GE_COMMONS.NSTP111
            ]
        },
        {
            name: "First Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE113, GE_COMMONS.GE114,
                { id: "Math 121", code: "Math 121", title: "Engineering Calculus 2", units: 3 },
                { id: "AC 122", code: "AC 122", title: "Principles of Soil Science", units: 3 },
                { id: "AC 123", code: "AC 123", title: "Principles of Animal Science", units: 3 },
                { id: "BES 102", code: "BES 102", title: "Computer Aided Drafting", units: 3 },
                { id: "Nat Sci 2", code: "Nat Sci 2", title: "Physics for Engineers", units: 3 },
                GE_COMMONS.PE122, GE_COMMONS.NSTP122
            ]
        },
        {
            name: "Second Year - 1st Semester",
            subjects: [
                GE_COMMONS.GE215, GE_COMMONS.GE216,
                { id: "Math 211", code: "Math 211", title: "Differential Equations", units: 3 },
                { id: "BES 116", code: "BES 116", title: "Fluid Mechanics", units: 3 },
                { id: "ABE 213", code: "ABE 213", title: "Materials and Processes for ABE", units: 3 },
                { id: "BES 104", code: "BES 104", title: "Engineering Mechanics", units: 3 },
                { id: "Math 212", code: "Math 212", title: "Engineering Data Analysis", units: 3 },
                { id: "BES 106", code: "BES 106", title: "Engineering Economics", units: 3 },
                GE_COMMONS.PE213
            ]
        },
        {
            name: "Second Year - 2nd Semester",
            subjects: [
                GE_COMMONS.GE217,
                { id: "ABE 224", code: "ABE 224", title: "Thermodynamics & Heat Transfer", units: 3 },
                { id: "ABM 221", code: "ABM 221", title: "AB Power Engineering", units: 3 },
                { id: "BES 117", code: "BES 117", title: "Engineering Mechanics 2", units: 3 },
                { id: "ABE 222", code: "ABE 222", title: "Surveying", units: 3 },
                { id: "ABE 225", code: "ABE 225", title: "Computer Applications in AB Engineering", units: 3 },
                { id: "ABP 221", code: "ABP 221", title: "Properties of AB Materials", units: 3 },
                { id: "Nat Sci 9", code: "Nat Sci 9", title: "Biochemistry", units: 3 },
                GE_COMMONS.PE224
            ]
        },
        {
            name: "Third Year - 1st Semester",
            subjects: [
                GE_COMMONS.EGE311, GE_COMMONS.EGE312, GE_COMMONS.GE218,
                { id: "BES 107", code: "BES 107", title: "Methods of Research", units: 3 },
                { id: "ABM 312", code: "ABM 312", title: "AB Machinery and Mechanization", units: 3 },
                { id: "LWE 311", code: "LWE 311", title: "Hydrometeorology", units: 3 },
                { id: "ABS 311", code: "ABS 311", title: "AB Electrification and Control Systems", units: 3 },
                { id: "BES 118", code: "BES 118", title: "Strength of Materials", units: 3 },
                { id: "ABE 316", code: "ABE 316", title: "ABE and Related Laws, Specifications Contracts, and Professional Ethics", units: 3 }
            ]
        },
        {
            name: "Third Year - 2nd Semester",
            subjects: [
                GE_COMMONS.EGE313, GE_COMMONS.GE319,
                { id: "BES 110", code: "BES 110", title: "Technopreneurship", units: 3 },
                { id: "ABM 323", code: "ABM 323", title: "Machine Design for AB Production", units: 3 },
                { id: "ABP 322", code: "ABP 322", title: "AB Products Processing and Storage", units: 3 },
                { id: "ABS 322", code: "ABS 322", title: "AB Structures Engineering", units: 3 },
                { id: "LWE 322", code: "LWE 322", title: "Irrigation and Drainage Engineering", units: 3 },
                { id: "ABE 327", code: "ABE 327", title: "Structural Design (Timber, Steel & Reinforced Concrete Designs)", units: 3 },
                { id: "ABE 400", code: "ABE 400", title: "Thesis (Thesis Outlining and Outline Defense/Preliminary Conduct)", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 1st Semester",
            subjects: [
                { id: "ABM 414", code: "ABM 414", title: "Renewable Energy for AB Applications", units: 3 },
                { id: "ABP 413", code: "ABP 413", title: "Food Process Engineering", units: 3 },
                { id: "ABS 413", code: "ABS 413", title: "Plant and Livestock Systems and Environmental Control Engineering", units: 3 },
                { id: "LWE 413", code: "LWE 413", title: "Land & Water Conservation Engineering", units: 3 },
                { id: "ABP 414", code: "ABP 414", title: "Design and Management of AB Processing Systems", units: 3 },
                { id: "SPC 1", code: "SPC 1", title: "Specialized Professional Courses 1", units: 3 },
                { id: "SPC 2", code: "SPC 2", title: "Specialized Professional Courses 2", units: 3 },
                { id: "ABE 401", code: "ABE 401", title: "Undergraduate Seminar", units: 3 },
                { id: "ABE 400_2", code: "ABE 400", title: "Thesis (Conduct of Thesis)", units: 3 }
            ]
        },
        {
            name: "Fourth Year - 2nd Semester",
            subjects: [
                { id: "ABS 424", code: "ABS 424", title: "AB Waste Management Engineering", units: 3 },
                { id: "LWE 424", code: "LWE 424", title: "Aquaculture Engineering", units: 3 },
                { id: "SPC 3", code: "SPC 3", title: "Specialized Professional Course 3", units: 3 },
                { id: "ABE 402", code: "ABE 402", title: "Correlation Course", units: 3 },
                { id: "ABE 400_3", code: "ABE 400", title: "Thesis (Thesis Writing & Final Defense)", units: 3 }
            ]
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
