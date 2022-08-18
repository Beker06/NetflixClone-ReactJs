import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { NetflixButton } from '../Styled/styledcomponents';
import { useDispatch } from 'react-redux';
import { setPrice } from '../features/PriceSlice'
import { useNavigate } from 'react-router';

const Plans = ({cost, children, color, wide}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate  =  useNavigate();
  
  const handleClick = (cost) =>{
    dispatch(setPrice(cost))
    navigate('/checkout')
  }

  return (
    <div className={classes.contenedor}>
      <Typography className={classes.texto} gutterBottom>
        {children}
      </Typography>
      <NetflixButton 
        color={color} 
        wide={wide}
        onClick={()=> handleClick(cost)}
      >
        Suscribe
      </NetflixButton>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  contenedor: {
    marginTop: theme.spacing(3),
    marginBottom:  theme.spacing(3),
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    "& button": {
      marginBottom: theme.spacing(2),
    }
  },
}));

export default Plans