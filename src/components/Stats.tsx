import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const Stats = () => {
  const [clientCount, setClientCount] = useState(0);
  const [payoutCount, setPayoutCount] = useState(0);
  const [supportCount, setSupportCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
    
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start counting when the section enters the viewport
          countUp();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector('#stats')!);

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  const countUp = () => {
    const animateCount = (targetValue: number, setState: Dispatch<SetStateAction<number>>) => {
      let currentValue = 0;
      const increment = Math.ceil(targetValue / 50); // Increment per interval
      const interval = setInterval(() => {
        if (currentValue >= targetValue) {
          clearInterval(interval);
        } else {
          currentValue += increment;
          setState(currentValue);
        }
      }, 30); // Adjust the timing for smoother or faster increments
    };



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
            <i className="bi bi-emoji-smile text-4xl text-yellow-400 mb-2"></i>
            <h3 className="text-4xl font-bold">
              {clientCount}+ {/* The number will count up */}
            </h3>
            <p className="text-sm uppercase tracking-widest mt-2">Happy Clients</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="bi bi-cash-coin text-4xl text-green-400 mb-2"></i>
            <h3 className="text-4xl font-bold">
              ${payoutCount.toLocaleString()} {/* The number will count up */}
            </h3>
            <p className="text-sm uppercase tracking-widest mt-2">Total Payouts</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="bi bi-headset text-4xl text-blue-400 mb-2"></i>
            <h3 className="text-4xl font-bold">
              {supportCount}/7 {/* The number will count up */}
            </h3>
            <p className="text-sm uppercase tracking-widest mt-2">Customer Support</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="bi bi-people-fill text-4xl text-purple-400 mb-2"></i>
            <h3 className="text-4xl font-bold">
              {teamCount}+ {/* The number will count up */}
            </h3>
            <p className="text-sm uppercase tracking-widest mt-2">Team Members</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
