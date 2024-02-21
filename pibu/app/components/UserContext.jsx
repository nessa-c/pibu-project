// context/UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext({
  userLoggedIn: false,
  setUserLoggedIn: () => {},
});

export const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
