import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import logo from "../Images/Logo.png";
import HeroBanner from "../Images/HeroBanner.png";
import { Typography } from '@mui/material';
import { NetflixButton, NetflixInput } from '../Styled/styledcomponents';
import SignUp from './SignUp';

const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);
  return (
      <div className={classes.contenedor}>
        <img src={logo} alt="logo" className={classes.logo}/>
        <NetflixButton className={classes.session} radius="true">
          Iniciar Sesion
        </NetflixButton>
        <div className={classes.info}>
          {
            !signIn ? (<SignUp/>) : (
              <>
                <Typography variant='h4'gutterBottom>
                  Unlimited films,TV programmes and more.
                </Typography>
                <Typography variant='h5'>
                  Watch anywhere.Cancel at any time.      
                </Typography>
                <Typography variant='h6'>
                  Ready to watch ? Enter your email to create or restart your
                  membership.
                </Typography>
                <div className={classes.inputBlock}>
                  <NetflixInput placeholder='Email address'/>
                  <NetflixButton style={{top: 2}}>GET STARTED</NetflixButton>
                </div>
              </>
            )
          }
        </div>
      </div>
  )
}

const useStyles = makeStyles((theme) => ({
  contenedor: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${HeroBanner})`,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width:"150px",
    cursor: "pointer",
  },
  session:{
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info:{
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
  inputBlock:{
    marginTop:"9px",
  }
}));

export default Login