import './App.css';
import { React, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setData } from "./store/action";
import Home from './pages/Home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      const getApiData = async () => {
          const apiDataRes = await fetch('https://api-moscow-mba.herokuapp.com/products', {
              credentials: 'include',
              method: 'GET',
              headers: { 'Content-type': 'application/json' },
          })
          const apiDataReq = await apiDataRes.json();
          dispatch(setData(apiDataReq))
      }
      getApiData();
  }, [])
  return (
      <Home />
  );
}

export default App;
