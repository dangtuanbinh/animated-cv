import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import styles from './GridContent.module.css';
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { MdOutlineCloudDownload } from "react-icons/md";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import Image from 'next/image';
import Slider from "react-slick";
import { TypeAnimation } from 'react-type-animation';

const ResponsiveGridLayout = WidthProvider(Responsive);

const App = ({currentTheme, toggleTheme}) => {
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
      { i: 'project1', x: 0, y: 6, w: 3, h: 8 },
      { i: 'project2', x: 4, y: 6, w: 3, h: 8 },
      { i: 'project3', x: 0, y: 6, w: 3, h: 8 },
      { i: 'project4', x: 4, y: 6, w: 3, h: 8 },
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
      { i: 'project1', x: 0, y: 11, w: 3, h: 8 },
      { i: 'project2', x: 4, y: 11, w: 3, h: 8 },
      { i: 'project3', x: 0, y: 15, w: 3, h: 8 },
      { i: 'project4', x: 4, y: 15, w: 3, h: 8 },
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
        { i: 'project1', x: 0, y: 0, w: 3, h: 8 },
        { i: 'project2', x: 0, y: 1, w: 3, h: 8 },
        { i: 'project3', x: 5, y: 1, w: 3, h: 8 },
        { i: 'project4', x: 5, y: 2, w: 3, h: 8 },
      ],
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false
  };

  // Set initial layout state
  
  const [currentLayout, setCurrentLayout] = useState(layouts.layout1);
  const [currentLayoutName, setCurrentLayoutName] = useState('layout1');
  const [isDragging, setIsDragging] = useState(false);

  // Handler for layout change buttons
  const changeLayout = (layout, layoutName) => {
    setCurrentLayout(layout);
    setCurrentLayoutName(layoutName);
  };

  const handleMouseDown = (e) => {
    // Prevent default to avoid moving on click
    e.preventDefault();
    setIsDragging(false);
  };

  const onDragStart = (e) => {
    setIsDragging(true); // Set dragging to true on drag start
  };

  const onDragStop = () => {
    setIsDragging(false); // Reset dragging when the drag stops
  };

  return (
    <div  className={`${styles.App} ${styles[currentTheme]}`}>
      <div className={`${styles.buttonWrapper} ${styles[currentTheme]}`}>
        <button className={`${currentLayoutName  === 'layout1' ? styles.active : styles.noBacKground} ${styles[currentTheme]}`} onClick={() => changeLayout(layouts.layout1, 'layout1')}>All</button>
        <button className={`${currentLayoutName  === 'layout2' ? styles.active : styles.noBacKground} ${styles[currentTheme]}`} onClick={() => changeLayout(layouts.layout2, 'layout2')}>Introduction</button>
        <button className={`${currentLayoutName  === 'layout3' ? styles.active : styles.noBacKground} ${styles[currentTheme]}`} onClick={() => changeLayout(layouts.layout3, 'layout3')}>Projects</button>
      </div>

      <ResponsiveGridLayout
        className={styles.layout}
        layout={currentLayout}
        breakpoints={{ lg: 1440, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 10, md: 6, sm: 4, xs: 2, xxs: 1 }}
        rowHeight={60}
        width={1200}
        responsive={true}
        margin={[20,20]}
        containerPadding={[20,0]}
        onDragStop={onDragStop}
        isDraggable= {isDragging ? true :false}
      >
        {currentLayout.map(item => (
          <div key={item.i} data-grid={item} className={`${styles.card} ${styles[currentTheme]} ${isDragging ? styles.dragging : ''}`} onMouseDown={handleMouseDown} onDragStart={onDragStart}>
            {item.i === 'profile' && (
              <div className={`${styles.profileContainer} ${styles[currentTheme]}`}>
                <div className={`${styles.profileTitle} ${styles[currentTheme]}`}>
                    <Image
                        src="/images/avatar.png" 
                        alt="Description of the image"
                        width={100} 
                        height={100} 
                    />
                    <TypeAnimation
                        sequence={[
                            'Dang Tuan Binh', 
                            1000, 
                            'Passion Frontend Developer', 
                            2000, 
                            'Future Fullstack Developer', 
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </div>
                
                <p>Passionate about crafting stunning and intuitive web experiences, I transform design concepts into dynamic, responsive interfaces. Let build something amazing together!</p>
              </div>
            )}
            {item.i === 'resume' && (
              <div className={`${styles.resume} ${styles[currentTheme]}`}>
                <div className={styles.resumeTitle}>
                    <span>2024 CV</span>
                    <h3>Resume</h3>
                </div>

                <div className={`${styles.cvButton} ${styles[currentTheme]}`}>
                    <a href="/Frontend-Developer-Dang-Tuan-Binh.pdf" download="Frontend-Developer-Dang-Tuan-Binh.pdf" >
                        <MdOutlineCloudDownload />
                    </a>

                    <a href="/Frontend-Developer-Dang-Tuan-Binh.pdf" target="_blank" rel="noopener noreferrer">
                        <HiMiniViewfinderCircle />
                    </a>
                </div>
              </div>
            )}
            {item.i === 'themeToggle' && (
                <div className={styles.themeToggle}>
                    <button onClick={() => toggleTheme('dark')} className={`${currentTheme === 'dark' ? styles.themeActive : styles.themeNoBackground} ${styles[currentTheme]}`}>
                        🌙 
                    </button>
                    <button onClick={() => toggleTheme('light')} className={`${currentTheme === 'light' ? styles.themeActive : styles.themeNoBackground} ${styles[currentTheme]}`}>
                        ☀️ 
                    </button>
                </div>
               
            )}
            {item.i === 'map' && (
              <div className={styles.map}>
                <div className={`${styles.mapLayer} ${styles[currentTheme]}`}></div>
              </div>
            )}
            {item.i === 'linkedIn' && (
                <div className={styles.socialItem}>  
                    <a href='https://www.linkedin.com/in/tuan-binh-dang-54298910b/' className={`${styles.socialButton} ${styles[currentTheme]}`}  target='_blank'><FaLinkedin /></a>
                </div>
            )}
            {item.i === 'git' && (
                <div className={styles.socialItem}>
                     <a href='https://github.com/dangtuanbinh' className={`${styles.socialButton} ${styles[currentTheme]}`} target='_blank'><VscGithub /></a>
                </div>
            )}
            {item.i === 'mail' && (
                <div className={styles.socialItem}>
                    <a
                        className={`${styles.socialButton} ${styles[currentTheme]}`} 
                        href="mailto:tuanbinh.35@gmail.com"
                        target='_blank'
                    >
                    <IoMailUnreadOutline />
                    </a>
                </div>
            )}
            {item.i === 'tech' && (
              <div className={styles.techContainer}>
                <h3>My tech stack</h3>
                <div className={styles.techSlider} style={{maxWidth: '400px', margin: '80px auto'}}>
                <Slider {...settings}>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/html.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/css.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/scss.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/bootstrap.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/javascript.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/typescript.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/react.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/vue.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/git.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/bitbucket.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                    <div className={`${styles.techSliderItem} ${styles[currentTheme]}`}>
                        <Image
                            src="/images/docker.png" 
                            alt="Description of the image"
                            width={80} 
                            height={80} 
                        />
                    </div>
                </Slider>
                </div>
                <div className={`${styles.techFooter} ${styles[currentTheme]}`}>
                  <p>Currently using: </p>
                  <span>Tech I ❤️</span>
                </div>
              </div>
            )}
            {item.i === 'experience' && (
              <div className={`${styles.workContainer} ${styles[currentTheme]}`}>
                <h3>4 Years of</h3>
                <h4>Experience</h4>
                <div className={`${styles.workItemContainer} ${styles[currentTheme]}`}>
                    <h2>Web Developer</h2>
                    <div className={`${styles.workItem} ${styles[currentTheme]}`}>
                        <p>Blueberry Labs</p>
                        <span>3/2024 - Present</span>
                    </div>
                </div>

                <div  className={`${styles.workItemContainer} ${styles[currentTheme]}`}>
                    <h2 style={{ textDecoration: 'line-through', color: "#94959c" }}>Frontend Developer</h2>
                    <div className={`${styles.workItem} ${styles[currentTheme]}`}>
                        <p>Uptempo Vietnam</p>
                        <span>7/2022 - 2/2024</span>
                    </div>
                </div>

                <div  className={`${styles.workItemContainer} ${styles[currentTheme]}`}>
                    <h2 style={{ textDecoration: 'line-through', color: "#94959c" }}>Jr.Frontend Developer</h2>
                    <div className={`${styles.workItem} ${styles[currentTheme]}`}>
                        <p>Fluent Progress RT Oy</p>
                        <span>3/2021 - 6/2022</span>
                    </div>
                </div>

                <div  className={`${styles.workItemContainer} ${styles[currentTheme]}`}>
                    <h2>Web Developer</h2>
                    <div className={`${styles.workItem} ${styles[currentTheme]}`}>
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
                <a href='https://www.template.net/' className={`${styles.projectDescription} ${styles[currentTheme]}`} target='_blank'>
                    <p>Template Generator Platform</p>
                    <BsSend />
                </a>   
                <div className={`${styles.techList} ${styles[currentTheme]}`}>
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
                <a href='https://cremind.io/' className={`${styles.projectDescription} ${styles[currentTheme]}`} target='_blank'>
                    <p>AI Chatbot Intergration Platform</p>
                    <BsSend />
                </a>   
                <div className={`${styles.techList} ${styles[currentTheme]}`}>
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
                <a href='https://gixpert.com/' className={`${styles.projectDescription} ${styles[currentTheme]}`} target='_blank'>
                    <p>Human Resource Platform</p>
                    <BsSend />
                </a>   
                <div className={`${styles.techList} ${styles[currentTheme]}`}>
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
                <span>Kocha Mall</span>
                <a href='https://kochamall.co.kr/' className={`${styles.projectDescription} ${styles[currentTheme]}`} target='_blank'>
                    <p>Ecommerce Platform</p>
                    <BsSend />
                </a>   
                <div className={`${styles.techList} ${styles[currentTheme]}`}>
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
