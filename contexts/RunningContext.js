import React, { createContext, useState, useContext } from 'react';

const RunningContext = createContext();

export const useRunningContext = () => useContext(RunningContext);

export const RunningProvider = ({ children }) => {
  const [runningData, setRunningData] = useState({
    distance: '0',
    calories: '0',
    time: '00:00:00',
  });

  return (
    <RunningContext.Provider value={{ runningData, setRunningData }}>
      {children}
    </RunningContext.Provider>
  );
};
