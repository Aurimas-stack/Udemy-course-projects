import React, { useState, useEffect, useCallback} from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const remainingTime = (expTime) => {
  const currTime = new Date().getTime();
  const adjExpTime = new Date(expTime).getTime();

  const remainingDur = adjExpTime - currTime;

  return remainingDur;
};

const retrieveStoredToken = () => {
  const initialToken = localStorage.getItem("token");
  const storedTime = localStorage.getItem("expTime");

  const remTime = remainingTime(storedTime);

  if(remTime <= 3600) {
    localStorage.removeItem("token")
    localStorage.removeItem("expTime")
    return null;
  };

  return {
    token: initialToken,
    duration: remTime
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken;
  let initialToken;

  if(tokenData) {
    initialToken = tokenData.token;
  }
  
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, expTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expTime", expTime);
    const timeRemaining = remainingTime(expTime);

    logoutTimer = setTimeout(logoutHandler, timeRemaining);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expTime")

    if(logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if(tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
