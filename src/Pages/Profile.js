import { Typography } from '@mui/material'
import React from 'react'
import Header from '../Components/Header'
import { makeStyles } from '@mui/styles';
import avatar from '../Images/NetflixProfile.jpg'
import Plans from '../Components/Plans'
import { NetflixButton } from '../Styled/styledcomponents';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';

const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const signout = ()=> {
    auth.signOut();
    navigate('/login');
  }

  return (
    <>
      <Header/>
      <div className={classes.contenedor}>
        <Typography style={{marginBottom: "10px"}}variant='h3'>
          Edit Profile
        </Typography>
        <div className={classes.info}>
          <img src={avatar} alt="avatar"/>
          <div className={classes.details}>
            <div className={classes.plans}>
              <Typography variant="h6">email usuario</Typography>
              <Typography className={classes.plansText} variant="h5" gutterBottom> Plans</Typography>
              <Plans cost={7.99}>
                Netflix Standard
              </Plans>
              <Plans cost={11.99}>
                Netflix Basic
              </Plans>
              <Plans wide="medium" color="gray" cost={15.99}>
                Netflix Premium
              </Plans>
              <NetflixButton wide="fullWidth"
                onClick={signout}
              >Sign Out</NetflixButton>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  contenedor: {
    color: "#fff",
    minHeight:'100vh',
    maxWidth: '800px',
    display: "flex",
    flexDirection: 'column',
    margin: "auto",
    alignItems:'center',
  },
  info: {
  width: "80%",
  display: "flex",
  "& img": {
    height: '100px',
    [theme.breakpoints.down("sm")] : {
        display: "none"
      }
    }
  },
  details: {
    width:"100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: '#aaa',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px",
    }
  },
  plans:{
    width: '100%',
  },
  plansText: {
    borderBottom: "1px solid lightgray",
  }
}));

export default Profile