"use client"

 

import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState(() => {
    const storedTargetDate = localStorage.getItem('targetDate');
    return storedTargetDate ? parseInt(storedTargetDate, 10) : Date.now() + 432000000; // Default to 5 days from now if no stored date
  });

  useEffect(() => {
    localStorage.setItem('targetDate', targetDate.toString());
  }, [targetDate]);

  return (
    <div className='timerr'>
      <h6>Payment deadline expires on Wednesday 17th April</h6>
      <Countdown date={targetDate} />
    </div>
  );
};

export default CountdownTimer;
