// RewardsContext.js
import React, { createContext, useContext, useState, useEffect, Image } from "react";
const RewardsContext = createContext();
export const useRewards = () => useContext(RewardsContext);


export const RewardsProvider = ({ children }) => {
  const [awardedBadges, setAwardedBadges] = useState([]);
  const [distance, setdistance] = useState(0); 
  const [waterIntake, setWaterIntake] = useState(0); 

  const updateDistance = (newDistance) => {
    setDistance(newDistance);
  };
  // Function to award badges based on conditions
  useEffect(() => {
    // Running badges
    if (distance >= 5 && !awardedBadges.some(badge => badge.name === '5K Beginner')) {
      awardBadge({ name: '10K Pro', description: 'Completed a 10km run', icon: require('../icons/5kmRun.png') });
    }
    if (distance >= 10 && !awardedBadges.some(badge => badge.name === '10K Pro')) {
      awardBadge({ name: '10K Pro', description: 'Completed a 10km run', icon: require('../icons/10kmRun.png') });
    }
    if (distance >= 15 && !awardedBadges.some(badge => badge.name === '15K Master')) {
      awardBadge({ name: '15K Master', description: 'Completed a 15km run', icon: require('../icons/15kmRun.png') });
    }

    // Water intake badges
    if (waterIntake >= 100 && !awardedBadges.some(badge => badge.name === 'Hydration Beginner')) {
      awardBadge({ name: 'Hydration Beginner', description: 'Reached 100L water intake', icon: require('../icons/100LWaterIntake.png')  });
    }
    if (waterIntake >= 200 && !awardedBadges.some(badge => badge.name === 'Hydration Pro')) {
      awardBadge({ name: 'Hydration Pro', description: 'Reached 200L water intake', icon: require('../icons/200LWaterIntake.png') });
    }
    if (waterIntake >= 300 && !awardedBadges.some(badge => badge.name === 'Hydration Master')) {
      awardBadge({ name: 'Hydration Master', description: 'Reached 300L water intake', icon: require('../icons/300LWaterIntake.jpg') });
    }
  }, [distance, waterIntake, awardedBadges]);

  const awardBadge = (badge) => {
    setAwardedBadges(prevBadges => [...prevBadges, badge]);
  };
  
  return (
    <RewardsContext.Provider value={{ awardedBadges, updateDistance, setWaterIntake }}>
      {children}
    </RewardsContext.Provider>
  );
};

