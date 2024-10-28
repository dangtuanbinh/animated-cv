import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import styles from './GridContent.module.css';
import { FiLinkedin } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { MdOutlineCloudDownload } from "react-icons/md";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import Image from 'next/image';

const ResponsiveGridLayout = WidthProvider(Responsive);

const App = () => {
  // Define multiple layouts
  const layouts = {
    layout1: [
      { i: 'profile', x: 0, y: 0, w: 3, h: 4 },
      { i: 'resume', x: 5, y: 0, w: 1, h: 2 },
      { i: 'map', x: 3, y: 0, w: 2, h: 4 },
      { i: 'themeToggle', x: 5, y: 1, w: 1, h: 2 },
      { i: 'linkedIn', x: 0, y: 2, w: 1, h: 2 },
      { i: 'git', x: 0, y: 1, w: 1, h: 2 },
      { i: 'tech', x: 1, y: 4, w: 2, h: 6 },
      { i: 'mail', x: 0, y: 4, w: 1, h: 2 },
      { i: 'experience', x: 4, y: 3, w: 3, h: 7 },
      { i: 'project1', x: 0, y: 6, w: 3, h: 9 },
      { i: 'project2', x: 4, y: 6, w: 3, h: 9 },
      { i: 'project3', x: 0, y: 6, w: 3, h: 9 },
      { i: 'project4', x: 4, y: 6, w: 3, h: 9 },
    ],
    layout2: [
      { i: 'profile', x: 0, y: 0, w: 3, h: 4 },
      { i: 'tech', x: 5, y: 0, w: 3, h: 6 },
      { i: 'resume', x: 0, y: 3, w: 3, h: 2 },
      { i: 'map', x: 0, y: 4, w: 3, h: 3 },
      { i: 'themeToggle', x: 3, y: 2, w: 1, h: 1 },
      { i: 'linkedIn', x: 6, y: 0, w: 1, h: 2 },
      { i: 'git', x: 4, y: 0, w: 1, h: 2 },
      { i: 'mail', x: 3, y: 3, w: 1, h: 1 },
      { i: 'experience', x: 4, y: 3, w: 3, h: 7 },
      { i: 'project1', x: 0, y: 11, w: 3, h: 9 },
      { i: 'project2', x: 4, y: 11, w: 3, h: 9 },
      { i: 'project3', x: 0, y: 15, w: 3, h: 9 },
      { i: 'project4', x: 4, y: 15, w: 3, h: 9 },
    ],
    layout3: [
        { i: 'profile', x: 0, y: 10, w: 3, h: 4 },
        { i: 'resume', x: 5, y: 0, w: 3, h: 2 },
        { i: 'map', x: 6, y: 4, w: 3, h: 5 },
        { i: 'themeToggle', x: 5, y: 0, w: 3, h: 2 },
        { i: 'linkedIn', x: 2, y: 5, w: 1, h: 2 },
        { i: 'git', x: 0, y: 5, w: 1, h: 2 },
        { i: 'tech', x: 4, y: 3, w: 3, h: 6 },
        { i: 'mail', x: 1, y:5, w: 1, h: 2 },
        { i: 'experience', x: 0, y: 3, w: 3, h: 7 },
        { i: 'project1', x: 0, y: 0, w: 3, h: 9 },
        { i: 'project2', x: 0, y: 1, w: 3, h: 9 },
        { i: 'project3', x: 5, y: 1, w: 3, h: 9 },
        { i: 'project4', x: 5, y: 2, w: 3, h: 9 },
      ],
  };

  // Set initial layout state
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentLayout, setCurrentLayout] = useState(layouts.layout1);
  const [currentLayoutName, setCurrentLayoutName] = useState('layout1');

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Handler for layout change buttons
  const changeLayout = (layout, layoutName) => {
    setCurrentLayout(layout);
    setCurrentLayoutName(layoutName);
  };

  return (
    <div  className={`${styles.App} ${styles[currentTheme]}`}>
      <div className={styles.buttonWrapper}>
        <button className={`${currentLayoutName  === 'layout1' ? styles.active : styles.noBacKground}`} onClick={() => changeLayout(layouts.layout1, 'layout1')}>All</button>
        <button className={`${currentLayoutName  === 'layout2' ? styles.active : styles.noBacKground}`} onClick={() => changeLayout(layouts.layout2, 'layout2')}>Introduction</button>
        <button className={`${currentLayoutName  === 'layout3' ? styles.active : styles.noBacKground}`} onClick={() => changeLayout(layouts.layout3, 'layout3')}>Projects</button>
      </div>

      <ResponsiveGridLayout
        className={styles.layout}
        layout={currentLayout}
        breakpoints={{ lg: 1440, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 10, md: 6, sm: 4, xs: 2, xxs: 1 }}
        rowHeight={60}
        width={1200}
        draggableHandle=".drag-handle"
        isResizable={false}
        isDraggable={true}
        responsive={true}
      >
        {/* Render grid items dynamically */}
        {currentLayout.map(item => (
          <div key={item.i} data-grid={item} className={`${styles.card} drag-handle`}>
            {item.i === 'profile' && (
              <div className={styles.profileContainer}>
                <div className={styles.profileTitle}>
                    <Image
                        src="/images/avatar.png" 
                        alt="Description of the image"
                        width={100} 
                        height={100} 
                    />
                    <h2>Dang Tuan Binh</h2>
                </div>
                
                <p>Passionate about crafting stunning and intuitive web experiences, I transform design concepts into dynamic, responsive interfaces. Let's build something amazing together!</p>
              </div>
            )}
            {item.i === 'resume' && (
              <div className={styles.resume}>
                <div className={styles.title}>
                    <span>2024 CV</span>
                    <h3>Resume</h3>
                </div>

                <div className={styles.cvButton}>
                    <a href="/myCV.pdf" download="myCV.pdf">
                        <MdOutlineCloudDownload />
                    </a>

                    <a href="/myCV.pdf" target="_blank" rel="noopener noreferrer">
                        <HiMiniViewfinderCircle />
                    </a>
                </div>
              </div>
            )}
            {item.i === 'themeToggle' && (
               <button onClick={toggleTheme} className={styles.themeToggleButton}>
               {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
             </button>
            )}
            {item.i === 'map' && (
              <div className={styles.map}>
                <div className={styles.mapLayer}></div>
              </div>
            )}
            {item.i === 'linkedIn' && (
              <a href='https://www.linkedin.com/in/tuan-binh-dang-54298910b/' className={styles.socialButton} target='_blank'><FiLinkedin /></a>
            )}
            {item.i === 'git' && (
              <a href='https://github.com/dangtuanbinh' className={styles.socialButton} target='_blank'><VscGithub /></a>
            )}
            {item.i === 'mail' && (
              <a className={styles.socialButton}><IoMailUnreadOutline /></a>
            )}
            {item.i === 'tech' && (
              <div className={styles.techContainer}>
                <h3>My tech stack</h3>
                <div className={styles.techSlider}></div>
                <div className={styles.techFooter}>
                  <p>Currently using: </p>
                  <span>Tech I ❤️</span>
                </div>
              </div>
            )}
            {item.i === 'experience' && (
              <div className={styles.workContainer}>
                <h3>4 Years of</h3>
                <h4>Experience</h4>
                <div className={styles.workItemContainer}>
                    <h2>Web Developer</h2>
                    <div className={styles.workItem}>
                        <p>Blueberry Labs</p>
                        <span>3/2024 - Present</span>
                    </div>
                </div>

                <div className={styles.workItemContainer}>
                    <h2 style={{ textDecoration: 'line-through', color: "#94959c" }}>Frontend Developer</h2>
                    <div className={styles.workItem}>
                        <p>Uptempo Vietnam</p>
                        <span>7/2022 - 2/2024</span>
                    </div>
                </div>

                <div className={styles.workItemContainer}>
                    <h2 style={{ textDecoration: 'line-through', color: "#94959c" }}>Jr.Frontend Developer</h2>
                    <div className={styles.workItem}>
                        <p>Fluent Progress RT Oy</p>
                        <span>3/2021 - 6/2022</span>
                    </div>
                </div>

                <div className={styles.workItemContainer}>
                    <h2>Web Developer</h2>
                    <div className={styles.workItem}>
                        <p>Freelancer</p>
                        <span>6/2020 - Present</span>
                    </div>
                </div>
                
              </div>
            )}
            {item.i === 'project1' && (
              <div className={styles.projectContainer}>
                <div className={styles.project1Image}></div>
                <span>Template.net</span>
                <a href='https://www.template.net/' className={styles.projectDescription} target='_blank'>
                    <p>Template Generator Platform</p>
                    <BsSend />
                </a>   
                <div className={styles.techList}>
                    <p>Frontend</p>
                    <p>Javascript</p>
                    <p>Typescript</p>
                    <p>ReactJS</p>
                    <p>SCSS</p>
                    <p>Figma</p>
                    <p>SSR</p>
                </div>
              </div>
            )}
            {item.i === 'project2' && (
              <div className={styles.projectContainer}>
                <div className={styles.project2Image}></div>
                <span>Cremind AI</span>
                <a href='https://www.template.net/' className={styles.projectDescription} target='_blank'>
                    <p>AI Chatbot Intergration Platform</p>
                    <BsSend />
                </a>   
                <div className={styles.techList}>
                    <p>Frontend</p>
                    <p>Javascript</p>
                    <p>Typescript</p>
                    <p>SCSS</p>
                    <p>Vuejs</p>
                </div>
            </div>
            )}
            {item.i === 'project3' && (
              <div className={styles.projectContainer}>
                <div className={styles.project3Image}></div>
                <span>Gixpert</span>
                <a href='https://www.template.net/' className={styles.projectDescription} target='_blank'>
                    <p>Human Resource Platform</p>
                    <BsSend />
                </a>   
                <div className={styles.techList}>
                    <p>Solo Developer</p>
                    <p>Frontend</p>
                    <p>Typescript</p>
                    <p>SCSS</p>
                    <p>Figma</p>
                    <p>ReactJs</p>
                </div>
            </div>
            )}
            {item.i === 'project4' && (
              <div className={styles.projectContainer}>
                <div className={styles.project4Image}></div>
                <span>Korcha Mall</span>
                <a href='https://www.template.net/' className={styles.projectDescription} target='_blank'>
                    <p>Ecommerce Platform</p>
                    <BsSend />
                </a>   
                <div className={styles.techList}>
                    <p>Frontend</p>
                    <p>Javascript</p>
                    <p>Typescript</p>
                    <p>SCSS</p>
                    <p>Figma</p>
                    <p>ReactJS</p>
                </div>
            </div>
            )}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default App;
