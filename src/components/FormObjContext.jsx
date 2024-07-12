import { createContext, useState, useContext } from 'react';

// Create a context for the data
const DataContext = createContext();

// Data provider component
const DataProvider = ({ children }) => {
  const [dataObj, setDataObj] = useState({ 
    guests: "2 guests",
    dateVal: new Date(),
    timeVal: "14:00"
  });

  return (
    <DataContext.Provider value={{ dataObj, setDataObj }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
const useData = () => useContext(DataContext);

export { DataProvider, useData };