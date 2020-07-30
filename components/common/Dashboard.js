import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LayoutD1 from '../layout/LayoutD1';

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
}));    

const Dashboard = (props) => {

    const classes = useStyles();

    return (
        <LayoutD1 titulo="Bienvenido">
            <div className={classes.appBarSpacer} /> 
        </LayoutD1>                 
     );
}
 
export default Dashboard;