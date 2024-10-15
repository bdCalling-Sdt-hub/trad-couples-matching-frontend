"use client"

import React, { useState } from 'react';
import { Button, Progress } from 'antd';
import styles from './CustomStep.module.css';

const totalContent = 30; 
const totalBalls = 3; 

const CustomStep = () => {
  const [current, setCurrent] = useState(0);

  const calculateProgress = () => {
    return (current / totalContent) * 100; 
  };

  const handleNext = () => {
    setCurrent((prev) => Math.min(prev + 1, totalContent));
  };

  const handlePrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const progress = calculateProgress();
  const filledBalls = Math.floor(current / (totalContent / totalBalls)); 
  console.log(filledBalls);

  return (
    <div className={styles.container}>
      <div className={styles.progressAndBalls}>
        <Progress
          percent={progress}
          strokeColor={progress >= 66.67 ? 'blue' : 'gray'}
          style={{ marginTop: '20px', flex: 1 }} // Added flex: 1 to take up space
          showInfo={false} 
        />
        <div className={styles.ballContainer}>
          {[...Array(totalBalls)].map((_, index) => (
            <div
              key={index}
              className={`${styles.stepBall} ${index < filledBalls ? styles.filled : ''}`}
              style={{ left: `${(index / (totalBalls - 1)) * 100}%` }} 
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={handlePrev} disabled={current === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={current === totalContent}>
          Next
        </Button>
      </div>
      <div className={styles.currentStep}>
        <h3>Current Step: {current + 1}</h3>
      </div>
    </div>
  );
};

export default CustomStep;
