import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined);

// Hook to provide access to context object
export const UseAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const globalValue = "Global Value"

  // Assign React state and constants to context object
  const AppContextObject = {
    apiValue:{
      user, setUser, cartItems, setCartItems
    },
    global:{
          globalValue
    }
  };
  return (
    <AppContext.Provider value={AppContextObject}>
      {props.children}
    </AppContext.Provider>
  );
};
