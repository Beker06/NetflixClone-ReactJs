import { AppBar, Avatar, IconButton, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router';
import logo from "../Images/Logo.png";


const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const hideHeader = () => {
    if(window.scrollY >80){
      setShow(true)
    }
    else{
      setShow(false)
    }
  }

  useEffect(() => { 
    window.addEventListener("scroll", hideHeader)
    return () => window.removeEventListener("scroll", hideHeader)
  }, [])
  
  return (
    <AppBar elevation={0} class={`${"barra"} ${show && "transparent"}`}>
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={()=>navigate('/')}>
          <img src={logo} alt="logo" className={classes.logo}/>
        </IconButton>
        <Avatar variant="square" style={{cursor: "pointer"}}
          onClick={()=>navigate('/profile')}
        />
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  header:{

  },
  logo: {
    width: "100px",
    cursor: "pointer",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
}));

export default Header