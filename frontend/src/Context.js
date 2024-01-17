import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authToken, setAuthToken] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(()=>{
    console.log(user);
  },[user])
  const setUserInfo = (userInfo) => {
    setUser(userInfo);
  };

  const setAuthInfo = (token) => {
    setAuthToken(token);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        authToken,
        location,
        startDate,
        endDate,
        setUserInfo,
        setAuthInfo,
        setLocation,
        setStartDate,
        setEndDate,      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
