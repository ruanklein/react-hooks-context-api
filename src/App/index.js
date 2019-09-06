import React, { useState } from "react";
import "./style.css";

import Departments from './Components/Departments';
import Users from './Components/Users';
import Loading from './Components/Loading';

const LoadingContext = React.createContext({
  loading: false,
  message: '',
  showLoading: message => {},
  hideLoading: () => {}
});

export default function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  function showLoading(msg) {
    setLoading(true);
    setMessage(msg);
  }

  function hideLoading() {
    setLoading(false);
  }

  const value = {
    ...{loading, message},
    showLoading,
    hideLoading
  };

  return (
    <LoadingContext.Provider value={value}>
      <LoadingContext.Consumer>
        {
          ({showLoading, hideLoading, loading, message}) => (
            <>
              <Users {...{ showLoading, hideLoading}} />
              <Departments {...{ showLoading, hideLoading}} />
              <Loading {...{ loading, message}} />
            </>
          )
        }
      </LoadingContext.Consumer>
    </LoadingContext.Provider>
  );
}