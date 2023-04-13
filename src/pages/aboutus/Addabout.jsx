import React, { useState,useEffect,useContext, useCallback } from 'react'
import appContext from '../../context/appcontext';
import { NavLink, useNavigate } from 'react-router-dom'
import Avatar from '../../img/avatar.png'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {TailSpin} from 'react-loader-spinner';
function Addabout() {
    const {addAbout}  =  useContext(appContext);
    const naviage = useNavigate();
    const [formdata,setFormdata] = useState({
        sidetype:"",
        lefttitle:"",
        contenttypeleft :"",
        righttitle: "",
        contenttyperight : "",
    });
    const [response,setResponse] =useState({});
    const [leftImage,setLeftImage] = useState('');
    const [rightImage,setRightImage] = useState('');
    const [CkeditorLeft,setCkeditorLeft] = useState('');
    const [CkeditorRight,setCkeditorRight] = useState('');
    const [leftImagePreview,setLeftimagePreview] = useState('');
    const [rightImagePreview,setRightimagePreview] = useState('');
    const [alert,setAlert] = useState('d-none');
    const [spinner,setSpinner] = useState(false);

    const handleLeftImage = (event)=>{
        const file = event.target.files[0];
        setLeftImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setLeftimagePreview(reader.result);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
    }

    const handleRightImage = (event)=>{
        const file = event.target.files[0];
        setRightImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setRightimagePreview(reader.result);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
    }
    
    const handleCkeditorLeft = ( event, editor ) => {
        let data = editor.getData();
        setCkeditorLeft(data);
    }

    const handleCkeditorRight = ( event, editor ) => {
        let data = editor.getData();
        setCkeditorRight(data);
    }

    const handleAboutForm = (event)=>{
        const { name, value } = event.target;
        setFormdata((prevState)=>({
            ...prevState,
            [name]: value
        })
        )
    }

    const handleSubmit = async (e)=>{
       e.preventDefault();
       setSpinner(true)
      try {
        const data = await addAbout(formdata,leftImage,rightImage,CkeditorLeft,CkeditorRight);
        if(data){
           setSpinner(false);
           setResponse(data);
           naviage('/get-aboutus');
        }
      } catch (error) {
        setSpinner(false);
        setAlert('d-block')
        setResponse(error);
      }
    }

    const handleAlert = ()=>{
    setAlert('d-none');
    }
    useEffect(()=>{
        setTimeout(()=>{
            if(alert == 'd-block'){
                setAlert('d-none');
            }
        },3000)
    },[alert]);
  return (
    <>
       <div style={{position:'absolute',top:"25%",left:"50%"}}>
        <TailSpin
                height="80"
                width="80"
                color="#4d84a9"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={spinner}
                />
       </div>
        {
            spinner == false ? 
            <div>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Add About</h1>
                    <NavLink to="/demo_react_webapp" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i className="fas fa-arrow-left fa-sm text-white-50"></i> Go Back</NavLink>
                </div> 

                <div style={{margin:"50px", padding:"20px",backgroundColor:"rgba(230, 229, 227,0.5)" , boxShadow:"2px 2px 5px 1px rgba(139, 139, 139, 0.5)"}}>
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-12 mb-2">
                        <label htmlFor="selectSideType" className="form-label">Select Type Of Content</label>
                            <select id="selectSideType" className="custom-select" name='sidetype' value={formdata.sidetype} onChange={handleAboutForm}>
                                <option value='' disabled>select</option>
                                <option value="One Side">One Side</option>
                                <option value="Two Side">Two Side</option>
                            </select>
                        </div>
                        {
                        formdata.sidetype == "Two Side"  ? 
                        <>
                            <div className="col-md-6 mb-2">
                                <label htmlFor="leftTitle" className="form-label">Title(For Left Column)</label>
                                <input type="text" className="form-control" id="leftTitle" name="lefttitle" value={formdata.lefttitle} onChange={handleAboutForm}/>
                            </div>
                            <div className="col-md-6 mb-2">
                                <label htmlFor="rightTitle" className="form-label">Title(For Right Column)</label>
                                <input type="text" className="form-control" id="rightTitle" name="righttitle" onChange={handleAboutForm} value={formdata.righttitle}/>
                            </div>
                            <div className="col-md-6 mb-2">
                                <label htmlFor="contentTypeLeft" className="form-label">Content Type</label>
                                <select id="contentTypeLeft" className="custom-select" name="contenttypeleft" onChange={handleAboutForm} value={formdata.contenttypeleft}>
                                <option >select</option>
                                <option value="text">text</option>
                                <option value="file">image</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-2">
                                <label htmlFor="contentTypeRight" className="form-label">Content Type</label>
                                <select id="contentTypeRight" className="custom-select" name="contenttyperight" onChange={handleAboutForm} value={formdata.contenttyperight}>
                                <option >select</option>
                                <option value="text">text</option>
                                <option value="file">image</option>
                                </select>
                            </div>
                            {
                                formdata.contenttypeleft == "file" ?
                                <>
                                    <div class="col-md-4 mb-4">
                                        <label htmlFor="formFileLeft" className="form-label">image</label>
                                        <input className="form-control" type="file" id="formFileLeft" style={{padding:"3px 3px 3px 3px"}} name="leftimage" onChange={handleLeftImage}/>
                                    </div>
                                    <div className="col-md-2 mb-4">
                                        <img src={leftImagePreview==""? Avatar: leftImagePreview} alt="" className='img-fluid' style={{display:"block",margin:"auto",width:"100px"}} />
                                    </div>
                                </>:
                                <>
                                    <div className="col-md-6 mb-4">
                                    <label className="form-label">Text </label>
                                    <CKEditor
                                            id="formtextLeft"
                                            editor={ ClassicEditor }
                                            data=""
                                            name="lefttext"
                                            onChange={ handleCkeditorLeft }
                                        />
                                    </div>
                                </> 
                            }

                            {
                                formdata.contenttyperight == "file" ?
                                <>
                                    <div class="col-md-4 mb-4">
                                        <label htmlFor="formFileRight" className="form-label">image</label>
                                        <input className="form-control" type="file" id="formFileRight" style={{padding:"3px 3px 3px 3px"}} name="rightimage" onChange={handleRightImage}/>
                                    </div>
                                    <div className="col-md-2 mb-4">
                                        <img src={rightImagePreview == ""?Avatar:rightImagePreview} alt="" className='img-fluid' style={{display:"block",margin:"auto",width:"100px"}} />
                                    </div>
                                </>:
                                <>
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label">Text </label>
                                        <CKEditor
                                                id="formtextRight"
                                                editor={ ClassicEditor }
                                                data=""
                                                name="righttext"
                                                onChange={handleCkeditorRight}
                                            />
                                    </div>
                                </>

                            }
                        </>
                        :
                        <>
                            <div className="col-md-12 mb-2">
                                <label htmlFor="leftTitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="leftTitle" name="lefttitle" onChange={handleAboutForm} value={formdata.lefttitle}/>
                            </div>
                            <div className="col-md-12 mb-2">
                                <label htmlFor="contentTypeLeft" className="form-label">Content Type</label>
                                <select id="contentTypeLeft" className="custom-select" name="contenttypeleft" onChange={handleAboutForm} value={formdata.contenttypeleft}>
                                    <option value=''>select</option>
                                    <option value='text'>text</option>
                                    <option value= 'file'>file</option>
                                </select>
                            </div>
                            {
                                formdata.contenttypeleft == "file" ?
                                <>
                                    <div class="col-md-10 mb-4">
                                        <label htmlFor="formFileLeft" className="form-label">image</label>
                                        <input className="form-control" type="file" id="formFileLeft" name="leftimage" style={{padding:"3px 3px 3px 3px"}} onChange={handleLeftImage}/>
                                    </div>
                                    <div className="col-md-2 mb-4">
                                        <img src={leftImagePreview == ""?Avatar:leftImagePreview} alt="" className='img-fluid' style={{display:"block",margin:"auto",width:"100px"}} />
                                    </div>
                                </>:
                                <>
                                    <div className="col-md-12 mb-4">
                                        <label className="form-label">Text </label>
                                        <CKEditor
                                                id="formtextLeft"
                                                editor={ ClassicEditor }
                                                data=""
                                                name="lefttext"
                                                onChange={handleCkeditorLeft}
                                            />
                                    </div>
                                </>
                            }
                        </>
                        }
                        <div className="col-12 mb-2">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
                {
                    Object.keys(response) != 0 ? 
                    <div className={`alert alert-danger ${alert}`} role="alert" style={{position:'absolute', left:"50%", top:"100px", transform:'translate(-50px,-0px)',padding:"10px"}}>
                    {response.response.data.message} <span style={{padding:"5px","cursor":"pointer"}} ><i class="fa fa-times" aria-hidden="true" onClick={handleAlert}></i></span>
                    </div>:
                    ""
                }
            </div>  
            :
            ""
        }
    </>
   
  )
}

export default Addabout
