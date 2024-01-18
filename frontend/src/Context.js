import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [vendor, setVendor] = useState({});
  const [authToken, setAuthToken] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const setUserInfo = (userInfo) => {
    setUser(userInfo);
  };
  const setVendorInfo = (vendorInfo) => {
    setVendor(vendorInfo)
  };

  const setAuthInfo = (token) => {
    setAuthToken(token);
  };
  const setLocationInfo = (token) => {
    setLocation(token);
  };
  const setStartDateInfo = (token) => {
    setStartDate(token);
  };
  const setEndDateInfo = (token) => {
    setEndDate(token);
  };
    
  return (
    <AppContext.Provider
      value={{
        user,
        authToken,
        location,
        startDate,
        endDate,
        vendor,
        setVendorInfo,
        setUserInfo,
        setAuthInfo,
        setLocationInfo,
        setStartDate,
        setStartDateInfo,
        setEndDateInfo,
        setEndDate
      }}
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
