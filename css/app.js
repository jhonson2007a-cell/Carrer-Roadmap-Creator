// ============================================
// CAREER DATA
// ============================================

const careerData = {

    web: {

        name: "Web Developer",

        description:
            "A Web Developer builds websites and web applications using frontend, backend and database technologies.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Git & GitHub",
            "React",
            "Node.js",
            "Express.js",
            "Database",
            "APIs"
        ],

        roadmap: [
            ["HTML", "Learn the structure of web pages."],
            ["CSS", "Learn styling, layouts and responsive design."],
            ["JavaScript", "Learn programming and web interactivity."],
            ["Git & GitHub", "Learn version control and collaboration."],
            ["React", "Build modern frontend applications."],
            ["Node.js", "Learn backend development."],
            ["Database", "Learn MongoDB or MySQL."],
            ["APIs", "Connect frontend and backend."],
            ["Full Stack Projects", "Build real-world applications."],
            ["Portfolio & Job Preparation", "Create portfolio and prepare for interviews."]
        ]
    },


    data: {

        name: "Data Analyst",

        description:
            "A Data Analyst collects, cleans, analyzes and visualizes data to support decision making.",

        skills: [
            "Excel",
            "Statistics",
            "SQL",
            "Python",
            "Pandas",
            "NumPy",
            "Data Visualization",
            "Power BI",
            "Tableau"
        ],

        roadmap: [
            ["Excel", "Learn spreadsheets, formulas and data cleaning."],
            ["Statistics", "Understand basic statistical concepts."],
            ["SQL", "Learn how to query databases."],
            ["Python", "Learn Python programming for data analysis."],
            ["Pandas & NumPy", "Work with and analyze datasets."],
            ["Data Visualization", "Create meaningful charts and dashboards."],
            ["Power BI / Tableau", "Build professional dashboards."],
            ["Data Analysis Projects", "Solve real-world data problems."],
            ["Portfolio", "Showcase your projects and dashboards."],
            ["Resume & Interview", "Prepare for Data Analyst roles."]
        ]
    },


    ai: {

        name: "AI / Machine Learning Engineer",

        description:
            "An AI/ML Engineer develops intelligent systems using data, machine learning and artificial intelligence.",

        skills: [
            "Python",
            "Mathematics",
            "Statistics",
            "NumPy",
            "Pandas",
            "Machine Learning",
            "Scikit-learn",
            "Deep Learning",
            "Model Deployment"
        ],

        roadmap: [
            ["Python", "Build strong programming fundamentals."],
            ["Mathematics", "Learn linear algebra and basic mathematics."],
            ["Statistics", "Understand probability and statistics."],
            ["NumPy & Pandas", "Learn data processing."],
            ["Machine Learning", "Learn supervised and unsupervised learning."],
            ["Scikit-learn", "Build machine learning models."],
            ["Deep Learning", "Learn neural networks."],
            ["AI Projects", "Build practical AI applications."],
            ["Model Deployment", "Deploy models into applications."],
            ["Portfolio & Interview", "Prepare for AI/ML careers."]
        ]
    },


    cyber: {

        name: "Cyber Security Analyst",

        description:
            "A Cyber Security Analyst helps protect systems, networks and applications from security threats.",

        skills: [
            "Networking",
            "Linux",
            "Cyber Security Fundamentals",
            "Web Security",
            "Security Concepts",
            "Python",
            "Security Tools",
            "Risk Awareness"
        ],

        roadmap: [
            ["Computer Networking", "Learn how networks communicate."],
            ["Linux", "Learn Linux commands and administration basics."],
            ["Security Fundamentals", "Understand common security concepts."],
            ["Web Security", "Understand common web security principles."],
            ["Python", "Learn scripting for automation."],
            ["Security Tools", "Learn defensive security tools."],
            ["Security Projects", "Build safe security-focused projects."],
            ["Certifications", "Explore relevant certifications."],
            ["Portfolio", "Document your projects and learning."],
            ["Interview Preparation", "Prepare for entry-level roles."]
        ]
    },


    software: {

        name: "Software Developer",

        description:
            "A Software Developer designs, develops, tests and maintains software applications.",

        skills: [
            "Programming",
            "Data Structures",
            "Algorithms",
            "Java / Python / C++",
            "Git & GitHub",
            "Databases",
            "APIs",
            "Software Engineering"
        ],

        roadmap: [
            ["Programming Fundamentals", "Learn one programming language."],
            ["Object-Oriented Programming", "Understand OOP concepts."],
            ["Data Structures", "Learn arrays, stacks, queues and trees."],
            ["Algorithms", "Practice problem solving."],
            ["Git & GitHub", "Learn version control."],
            ["Database", "Learn SQL and database fundamentals."],
            ["APIs", "Learn application communication."],
            ["Software Projects", "Build practical applications."],
            ["Portfolio", "Showcase your projects."],
            ["Interview Preparation", "Prepare for coding interviews."]
        ]
    }

};


// ============================================
// GENERATE CAREER
// ============================================

function generateCareer() {

    const interest =
        document.getElementById("interest").value;

    const education =
        document.getElementById("education").value;

    const experience =
        document.getElementById("experience").value;

    const skills =
        document.getElementById("skills").value;

    const goal =
        document.getElementById("goal").value;


    if (!interest || !education || !experience) {

        alert(
            "Please complete Education, Interest and Experience Level."
        );

        return;
    }


    const career =
        careerData[interest];


    // Save data

    localStorage.setItem(
        "selectedCareer",
        interest
    );

    localStorage.setItem(
        "userSkills",
        skills
    );

    localStorage.setItem(
        "careerGoal",
        goal
    );


    // Career name

    document.getElementById(
        "careerName"
    ).innerText = career.name;


    // Description

    document.getElementById(
        "careerDescription"
    ).innerText = career.description;


    // Skills

    const skillList =
        document.getElementById("skillList");


    skillList.innerHTML = "";


    career.skills.forEach(skill => {

        const span =
            document.createElement("span");

        span.className = "skill";

        span.innerText = skill;

        skillList.appendChild(span);

    });


    // Show result

    document.getElementById(
        "result"
    ).style.display = "block";


    // Generate roadmap

    createRoadmap(career);


    // Scroll to result

    document.getElementById(
        "result"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// ============================================
// CREATE ROADMAP
// ============================================

function createRoadmap(career) {

    const roadmap =
        document.getElementById("roadmapList");


    roadmap.innerHTML = "";


    career.roadmap.forEach(
        (item, index) => {

            const step =
                document.createElement("div");

            step.className = "step";


            step.innerHTML = `

                <div class="step-number">
                    ${index + 1}
                </div>

                <div>

                    <h3>
                        ${item[0]}
                    </h3>

                    <p>
                        ${item[1]}
                    </p>

                </div>

            `;


            roadmap.appendChild(step);

        }
    );

}


// ============================================
// SHOW ROADMAP
// ============================================

function showRoadmap() {

    document.getElementById(
        "roadmap"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// ============================================
// LOAD SAVED CAREER
// ============================================

window.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedCareer =
            localStorage.getItem(
                "selectedCareer"
            );


        if (savedCareer &&
            careerData[savedCareer]) {

            const career =
                careerData[savedCareer];


            document.getElementById(
                "careerName"
            ).innerText =
                career.name;


            document.getElementById(
                "careerDescription"
            ).innerText =
                career.description;


            const skillList =
                document.getElementById(
                    "skillList"
                );


            skillList.innerHTML = "";


            career.skills.forEach(
                skill => {

                    const span =
                        document.createElement(
                            "span"
                        );

                    span.className =
                        "skill";

                    span.innerText =
                        skill;

                    skillList.appendChild(
                        span
                    );

                }
            );


            createRoadmap(career);

        }

    }
);
