import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "CodeIgniter",
    "React",
    "PHP",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "MySQL",
    "REST API",
    "Postman"
];

const labelsSecond = [
    "WordPress",
    "PHP",
    "Elementor",
    "WooCommerce",
    "Custom Themes",
    "Plugins",
    "MySQL",
    "cPanel",
    "SEO"
];

const labelsThird = [
    "React Native",
    "Android",
    "iOS",
    "JavaScript",
    "TypeScript",
    "Expo",
    "Redux",
    "REST API",
    "Mobile UI/UX"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development (CodeIgniter & React)</h3>
                    <p>I build dynamic, responsive, and secure web applications using CodeIgniter (PHP) and modern React.js frontend architecture. Proficient in full-stack integration, RESTful APIs, and database design.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faWordpress} size="3x"/>
                    <h3>WordPress & CMS Development</h3>
                    <p>I develop customized, high-performance websites using the WordPress CMS. Experienced in custom themes and plugin development, page builders like Elementor, WooCommerce stores, and SEO optimization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMobileScreenButton} size="3x"/>
                    <h3>Mobile App Development (React Native)</h3>
                    <p>I design and engineer cross-platform mobile applications for Android and iOS using React Native. Focused on delivering fluid UI/UX, robust state management, and seamless native device integrations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;