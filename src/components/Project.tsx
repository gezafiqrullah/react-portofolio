import React, { useState } from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

// Tipe kategori untuk klasifikasi project:
export type ProjectCategory = 'web-framework' | 'web-cms' | 'mobile';

export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    category: ProjectCategory;
}

// Data daftar project. Anda dapat mengklasifikasikan tiap project dengan mengubah nilai property 'category':
// Pilihan category: 'web-framework' | 'web-cms' | 'mobile'
const projectsData: ProjectItem[] = [
    {
        id: "1",
        title: "Filmate AI",
        description: "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.",
        image: mock10,
        link: "https://www.filmate.club/",
        category: "web-framework"
    },
    {
        id: "2",
        title: "High Speed Chase",
        description: "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.",
        image: mock09,
        link: "https://yujisatojr.itch.io/highspeedchase",
        category: "web-framework"
    },
    {
        id: "3",
        title: "Astro Raiders",
        description: "Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.",
        image: mock08,
        link: "https://yujisatojr.itch.io/spacecraft",
        category: "web-framework"
    },
    {
        id: "4",
        title: "Datum: Integrated Learning Platform",
        description: "This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.",
        image: mock07,
        link: "https://www.datumlearn.com/",
        category: "web-framework"
    },
    {
        id: "5",
        title: "WeManage: Real Estate Asset Management",
        description: "This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.",
        image: mock06,
        link: "http://www.wemanage.jp/",
        category: "mobile"
    },
    {
        id: "6",
        title: "COVID-19 Case Management",
        description: "Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.",
        image: mock05,
        link: "https://www.byuh.edu/covid-19-case-management",
        category: "web-framework"
    },
    {
        id: "7",
        title: "Multiple Regression Property Analysis",
        description: "Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.",
        image: mock04,
        link: "https://github.com/yujisatojr/multi-reg-analysis",
        category: "web-framework"
    },
    {
        id: "8",
        title: "Programs of Study",
        description: "Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.",
        image: mock03,
        link: "https://holokai.byuh.edu/programs-of-study",
        category: "web-cms"
    },
    {
        id: "9",
        title: "Transfer Evaluation Matrix",
        description: "Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.",
        image: mock02,
        link: "https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix",
        category: "web-cms"
    },
    {
        id: "10",
        title: "Submeowrine",
        description: "Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.",
        image: mock01,
        link: "https://github.com/yujisatojr/submeowrine",
        category: "mobile"
    }
];

type TabType = 'all' | ProjectCategory;

const tabOptions: { id: TabType; label: string }[] = [
    { id: 'all', label: 'Tab Semua' },
    { id: 'web-framework', label: 'Tab Web Framework' },
    { id: 'web-cms', label: 'Tab Web CMS' },
    { id: 'mobile', label: 'Tab Mobile' },
];

function Project() {
    const [activeTab, setActiveTab] = useState<TabType>('all');

    const filteredProjects = activeTab === 'all'
        ? projectsData
        : projectsData.filter(item => item.category === activeTab);

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>

            {/* 4 Tabs Navigation */}
            <div className="project-tabs">
                {tabOptions.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        className={`project-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Grid of Projects */}
            <div className="projects-grid">
                {filteredProjects.length === 0 ? (
                    <p className="no-projects-msg">Tidak ada project untuk kategori ini.</p>
                ) : (
                    filteredProjects.map((project) => (
                        <div className="project" key={project.id}>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img src={project.image} className="zoom" alt={project.title} width="100%" />
                            </a>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <h2>{project.title}</h2>
                            </a>
                            <p>{project.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Project;