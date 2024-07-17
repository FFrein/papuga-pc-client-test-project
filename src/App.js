import './App.css';
import Header from "./components/header/header"
import {BrowserRouter} from 'react-router-dom'
import { useContext, useEffect} from 'react';
import { Context } from '.';
import AppRouter from './components/AppRouter/appRouter'

function App() {
  const {store} = useContext(Context);
  //поиск куков с токеном
  useEffect(()=>{
    if(localStorage.getItem('token'))//013329
    {
      store.checkAuth();
    }
  },[])//отрабатывает 1 раз при запуске приложения

  return(
    <div>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>

    </div>
  )
}

export default App;