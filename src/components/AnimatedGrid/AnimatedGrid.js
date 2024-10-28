import React from 'react';
import styles from './AnimatedGrid.module.css';
import App from '../GridContent/GridContent';

const AnimatedGrid = () => {
  return (
    <header className={styles.heroSection}>
      <div className={styles.content}>
        <App />
      </div>
      <div className={styles.svgContainer}>
        <svg className={styles.absolute} width="100%" height="100%">
          <defs>
            <pattern id="grid" x="0" y="0" width="70" height="70" patternUnits="userSpaceOnUse" fill="var(--background)" opacity="0.1">
              <path d="M 70 0 L 0 0 0 70" stroke="var(--grid-line-color)" strokeWidth="3"></path>
            </pattern>
            <radialGradient id="lightGradient">
              <stop offset="0%" stopColor="#fff"></stop>
              <stop offset="100%" stopColor="transparent"></stop>
            </radialGradient>
          </defs>
          <rect fill="url(#grid)" width="100%" height="100%" opacity="0.15"></rect>
          <rect fill="url(#lightGradient)" x="70" y="0" width="2" height="140">
          <animateTransform attributeName="transform" type="translate" from="0 0" to="0 420" dur="3000ms" begin="0.8s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
          <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        <rect fill="url(#lightGradient)" x="0" y="1400" width="140" height="2">
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-420 0" dur="3000ms" begin="0s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
            <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        <rect fill="url(#lightGradient)" x="140" y="0" width="2" height="140">
            <animateTransform attributeName="transform" type="translate" from="0 0" to="0 420" dur="3000ms" begin="0s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
            <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        <rect fill="url(#lightGradient)" x="210" y="0" width="2" height="140">
          <animateTransform attributeName="transform" type="translate" from="0 0" to="0 420" dur="3000ms" begin="0.5s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
          <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        <rect fill="url(#lightGradient)" x="1400" y="210" width="150" height="2">
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-420 0" dur="3000ms" begin="0.7s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
            <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        <rect fill="url(#lightGradient)" x="1400" y="140" width="140" height="2">
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-420 0" dur="3000ms" begin="0s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
            <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        <rect fill="url(#lightGradient)" x="1400" y="70" width="140" height="2">
            <animateTransform attributeName="transform" type="translate" from="0 0" to="-420 0" dur="3000ms" begin="1.5s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
            <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        <rect fill="url(#lightGradient)" x="420" y="0" width="2" height="140">
          <animateTransform attributeName="transform" type="translate" from="0 0" to="0 420" dur="3000ms" begin="0.5s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
          <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        <rect fill="url(#lightGradient)" x="630" y="0" width="140" height="2">
          <animateTransform attributeName="transform" type="translate" from="0 0" to="-420 0" dur="3000ms" begin="0s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
          <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        <rect fill="url(#lightGradient)" x="700" y="0" width="2" height="140">
          <animateTransform attributeName="transform" type="translate" from="0 0" to="0 420" dur="3000ms" begin="0s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
          <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        <rect fill="url(#lightGradient)" x="770" y="0" width="2" height="140">
          <animateTransform attributeName="transform" type="translate" from="0 0" to="0 420" dur="3000ms" begin="0.5s" fill="freeze" additive="sum" repeatCount="indefinite"></animateTransform>          
          <animate attributeName="opacity" values="0;1;1;0" dur="3000ms" begin="266s" fill="freeze" repeatCount="indefinite"></animate>
        </rect>
        </svg>
      </div>
    </header>
  );
};

export default AnimatedGrid;
