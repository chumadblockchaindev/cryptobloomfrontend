import { useState, useEffect, Dispatch, SetStateAction } from 'react'; import { FaSmile, FaMoneyBillWave, FaHeadset, FaUsers, } from 'react-icons/fa';

const Stats = () => { 
  const [clientCount, setClientCount] = useState(0); 
  const [payoutCount, setPayoutCount] = useState(0); 
  const [supportCount, setSupportCount] = useState(0); 
  const [teamCount, setTeamCount] = useState(0);

useEffect(() => { const observer = new IntersectionObserver( (entries) => { if (entries[0].isIntersecting) { countUp(); } }, { threshold: 0.5 } );

const statsSection = document.querySelector('#stats');
if (statsSection) observer.observe(statsSection);

return () => observer.disconnect();
}, []);

const countUp = () => { 
  const animateCount = ( 
    targetValue: number, setState: Dispatch<SetStateAction<number>> ) => { 
      let currentValue = 0; 
      const increment = Math.ceil(targetValue / 50); 
      const interval = setInterval(() => { 
        if (currentValue >= targetValue) { 
          setState(targetValue); 
          clearInterval(interval); 
        } else { 
          currentValue += increment; setState(currentValue); 
        } }, 30); };


animateCount(2345, setClientCount);
animateCount(10000000, setPayoutCount);
animateCount(24, setSupportCount);
animateCount(150, setTeamCount);
};

return ( 
<section id="stats" className="py-20 bg-gray-900 text-white"> 
  <div className="container mx-auto px-4"> 
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center"> 
      <div className="flex flex-col items-center"> 
        <FaSmile className="text-4xl text-yellow-400 mb-2" /> 
        <h3 className="text-4xl font-bold">{clientCount}+</h3> 
        <p className="text-sm uppercase tracking-widest mt-2">Happy Clients</p> </div>

      <div className="flex flex-col items-center">
        <FaMoneyBillWave className="text-4xl text-green-400 mb-2" />
        <h3 className="text-4xl font-bold">${payoutCount.toLocaleString()}</h3>
        <p className="text-sm uppercase tracking-widest mt-2">Total Payouts</p>
      </div>

      <div className="flex flex-col items-center">
        <FaHeadset className="text-4xl text-blue-400 mb-2" />
        <h3 className="text-4xl font-bold">{supportCount}/7</h3>
        <p className="text-sm uppercase tracking-widest mt-2">Customer Support</p>
      </div>

      <div className="flex flex-col items-center">
        <FaUsers className="text-4xl text-purple-400 mb-2" />
        <h3 className="text-4xl font-bold">{teamCount}+</h3>
        <p className="text-sm uppercase tracking-widest mt-2">Team Members</p>
      </div>
    </div>
  </div>
</section>
); };

export default Stats;