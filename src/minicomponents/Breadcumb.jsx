import React from 'react'
import { Breadcrumbs } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

const StyledBreadCrumbs = styled(Breadcrumbs)(() =>({
    backgroundColor:'#4e73df',
    padding:'20px',
    marginBottom:"25px",
    borderRadius:"5px",
    boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.5)',
    [`li`]:{
        color: 'white',
    },
    [`li a,p`]: {
        color: 'white',
      },
}))

function Breadcumb() {
  return (

      <StyledBreadCrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/demo_react_webapp">
            Home
        </Link>
        <Link
            underline="hover"
            color="inherit"
            to="/demo_react_webapp/get-aboutus"
        >
            About Us
        </Link>
        {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
     </StyledBreadCrumbs>
  )
}

export default Breadcumb
