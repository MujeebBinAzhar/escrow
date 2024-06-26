"use client"

 
 
import Countdown from 'react-countdown';

const CountdownTimer = () => {
  const fixedEndingDate = new Date('2024-05-24T00:00:00').getTime();

//   const [targetDate, setTargetDate] = useState(() => {
//     const storedTargetDate = localStorage.getItem('targetDate');
//     return storedTargetDate ? parseInt(storedTargetDate, 10) : fixedEndingDate; // Default to fixed ending date if no stored date
//   });

//   useEffect(() => {
//     localStorage.setItem('targetDate', targetDate.toString());
//   }, [targetDate]);

  return (

    <>
    <div className='timerr'>
      <h6>Payment deadline expires on Wednesday 22th May 2024</h6>
      <Countdown date={fixedEndingDate} />
    </div>


<div className="timerr">
  <h6>Deposits deadline  Wednesday 22th May 2024</h6>
</div>



</>
  );
};

export default CountdownTimer;
