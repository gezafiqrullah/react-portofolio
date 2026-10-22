import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="January 2018 - June 2018"
            iconStyle={{ background: '#ff6b00', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Android Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">PT Humma Teknologi Indonesia, Karangploso, Malang</h4>
            <p>
              Build and maintain Android applications for the best travel recommendation app called PapaAntar
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2020 - January 2021"
            iconStyle={{ background: '#ff6b00', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Android Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">PT Vividi Transindo Utama, Blimbing, Malang</h4>
            <p>
              Build and maintain Android applications for the best travels and hotels booking recommendation app called Vividi
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2021 - Now"
            iconStyle={{ background: '#ff6b00', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Programmer</h3>
            <h4 className="vertical-timeline-element-subtitle">PDAM Tugu Tirta, Sawojajar, Malang</h4>
            <p>
              Developing an ERP application to support the company’s performance in managing water services for the residents of Malang.The application includes a web application and mobile applications (Android and iOS).
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;