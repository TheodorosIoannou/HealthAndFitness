import React, { createContext, useContext, useState } from 'react';

export const WaterIntakeContext = createContext();

export const useWaterIntakeContext = () => useContext(WaterIntakeContext);

export const WaterIntakeProvider = ({ children }) => {
  const [waterIntake, setWaterIntake] = useState('');
  const [waterLog, setWaterLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const totalWaterGoal = 2000;

  const handleLogWater = () => {
    if (waterIntake.trim() === '') {
      setError('Please enter water intake');
      return;
    }

    const enteredIntake = parseInt(waterIntake);

    if (enteredIntake > totalWaterGoal) {
      setError('Entered intake exceeds the goal');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setWaterLog([...waterLog, { amount: enteredIntake, date: new Date() }]);
      setWaterIntake('');
      setLoading(false);
    }, 1000);
  };

  const handleDeleteLog = (index) => {
    const updatedLogs = waterLog.filter((_, i) => i !== index);
    setWaterLog(updatedLogs);
  };

  const calculateTotalWaterConsumed = () => {
    return waterLog.reduce((total, log) => total + log.amount, 0);
  };

  const calculateProgress = () => {
    const consumed = calculateTotalWaterConsumed();
    return Math.min((consumed / totalWaterGoal) * 100, 100);
  };

  return (
    <WaterIntakeContext.Provider
      value={{
        waterIntake,
        setWaterIntake,
        waterLog,
        loading,
        error,
        setError,
        handleLogWater,
        handleDeleteLog,
        totalWaterGoal,
        calculateTotalWaterConsumed,
        calculateProgress,
      }}
    >
      {children}
    </WaterIntakeContext.Provider>
  );
};

export default WaterIntakeProvider;
