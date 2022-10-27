import React, { useEffect, useState } from "react";
import './components.css';
const Clock = (props) => {
    const {startDate,endDate} = props.clock;
    //console.log(endDate);
    let timer= new Date() >= new Date(startDate) ? new Date(endDate) : new Date(startDate)
   
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds,setSeconds] =useState(0);
  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (timer) => {
    const time = Date.parse(timer) - Date.parse(new Date());
    if (time < 0) {
      return
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    const interval=setInterval(() => getTimeUntil(timer), 1000);

    return () =>clearInterval(interval);
  }, [timer]);

  return (<>
    <div>
     <span className="countdown days">{leading0(days)}<span className="span-between">:</span> </span>
     <span className="countdown hours">{leading0(hours)}<span className="span-between1">:</span> </span>
     <span className="countdown minutes"> {leading0(minutes)}</span>
     
    </div>
    <div> 
          <span className='days-hours-minutes day'>Days</span>
          <span className='days-hours-minutes hour'>Hour</span>
          <span className="days-hours-minutes minute">Mins</span>
    </div>
    </>
  );
};

export default Clock;
