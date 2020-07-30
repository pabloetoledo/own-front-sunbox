import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../common/Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'        
    },    
})); 

const LayoutD1 = (props) => {

    const classes = useStyles();

    return (  
        <div className={classes.root}>
            <Navbar titulo={props.titulo}/>
            <main className={classes.content}>
                {props.children}
            </main>                           
        </div>
    );
}
 
export default LayoutD1;