import Layout from "./components/layout/Layout";
import {React,useContext,useEffect} from "react";
import appContext from "./context/appcontext";
import './app.css'

function App() {
  const{staticFetchAbout} = useContext(appContext);
  useEffect(()=>{
    staticFetchAbout();
  },[staticFetchAbout]);
  return (
    <div>
          <Layout/>
    </div>
  )
}
export default App
