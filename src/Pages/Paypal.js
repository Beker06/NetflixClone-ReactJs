import React from 'react'
import { makeStyles } from '@mui/styles';

const Paypal = () => {
  const classes = useStyles();
  return (
    <div>
        Paypal
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

export default Paypal