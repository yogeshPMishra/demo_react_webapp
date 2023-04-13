import axios from 'axios';
import {React,createContext,useState,useCallback} from 'react'

const appContext = createContext();

  function Provider ({children}){
   const [aboutus,setAboutus] = useState({});
    const BASE_URL =  "https://soulacaclone.cyclic.app/api/v1";
    

    const fetchAbouts = async ()=>{
      const getAbout = await axios.get(`${BASE_URL}/aboutus/`);
      setAboutus(getAbout);
    }

    const addAbout = async(formdata,leftImage,rightImage,CkeditorLeft,CkeditorRight)=>{
        const formData = new FormData();
        formData.append('about_type',formdata.sidetype);
        formData.append('left_title', formdata.lefttitle);
        formData.append('left_content_type', formdata.contenttypeleft);
        formData.append('left_content_text',CkeditorLeft);
        formData.append('left_content_image',leftImage);
        formData.append('right_title', formdata.righttitle);
        formData.append('right_content_type', formdata.contenttyperight);
        formData.append('right_content_text',CkeditorRight);
        formData.append('right_content_image',rightImage);
        const addAbout = await axios.post(`${BASE_URL}/aboutus/`, formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        fetchAbouts();
        return addAbout;
    }

    const deleteAbout = async(id)=>{
        const deleteAbout = await axios.delete(`${BASE_URL}/aboutus/delete/${id}`);
        fetchAbouts();
        return deleteAbout;
    }

    const staticFetchAbout = useCallback(
      fetchAbouts,
      []
    )

    const shareData = {
      aboutus,
      addAbout,
      fetchAbouts,
      deleteAbout,
      staticFetchAbout
    };

   return  <appContext.Provider value={shareData}>
      {children}
      </appContext.Provider>
 }
  export {Provider};
  export default appContext;
