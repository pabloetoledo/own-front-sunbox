import React, { useState, Fragment, useContext, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import AccountCircle from '@material-ui/icons/AccountCircle';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import PaletteIcon from '@material-ui/icons/Palette';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BusinessIcon from '@material-ui/icons/Business';
import TrafficIcon from '@material-ui/icons/Traffic';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Notifications from './Notifications';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',      
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor :'#2f5596'      
    },    
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbarCustom: {
      justifyContent: 'space-between'
    },
    toolbarCustomUser: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    items: {
      color: '#002e5b',     
    }
}));


const Navbar = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);    
    const [openSubMenuConfig, setOpenSubMenuConfig] = useState(false);
    const [openNotifications, setOpenNotifications] = useState(null);
           
    const handleListItemClick = (event, index) => {
      selectItemNavbar(index);
    };    
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    const handleItemConfig = () => {
      setOpenSubMenuConfig(!openSubMenuConfig);
    }

    const handleOpenNotifications = (event) => {
      setOpenNotifications(event.currentTarget);
    };
  
    const handleCloseNotifications = () => {
      setOpenNotifications(null);
    };
  
    return (
        <Fragment>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolbarCustom}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {props.titulo}
            </Typography>
            <div className={classes.toolbarCustomUser}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon onClick={handleOpenNotifications}/>
                  <Notifications open={openNotifications} handleCloseNotifications={handleCloseNotifications}/>
                </Badge>
              </IconButton> 
              <IconButton
                edge="end"
                aria-label="account of current user"              
                aria-haspopup="true"              
                color="inherit"
              >
                <AccountCircle />
              </IconButton>            
            </div>     
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <div></div><div></div>
            <img src="/media/img/logo.png" alt="" width="41" height="45"/>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>

          <Divider />

          <List>             
                <Fragment>
                    <ListItem button key='bien-servicio'>
                        <ListItemIcon><PaletteIcon className={classes.items}/></ListItemIcon>
                        <ListItemText primary='Bienes / Servicios' className={classes.items}/>
                    </ListItem>
                      
                    <ListItem button key='clientes'>
                          <ListItemIcon><PeopleIcon className={classes.items}/></ListItemIcon>
                          <ListItemText primary='Clientes' className={classes.items}/>
                    </ListItem>
                    
                    <ListItem button key='sc_cliente'>
                      <ListItemIcon><MailOutlineIcon className={classes.items}/></ListItemIcon>
                      <ListItemText primary='SC Cliente' className={classes.items}/>
                    </ListItem>                           
                    
                    <ListItem button key='cotizaciones'>
                      <ListItemIcon><AttachMoneyIcon className={classes.items}/></ListItemIcon>
                      <ListItemText primary='Cotizaciones' className={classes.items}/>
                    </ListItem>       
                
                    <ListItem button key='sc_a_proveedores'>
                      <ListItemIcon><SendIcon className={classes.items}/></ListItemIcon>
                      <ListItemText primary='SC a Proveedores' className={classes.items}/>
                    </ListItem>       
                
                    <ListItem button key='oc_a_proveedores'>
                      <ListItemIcon><ShoppingCartIcon className={classes.items}/></ListItemIcon>
                      <ListItemText primary='OC a Proveedores' className={classes.items}/>
                    </ListItem>

                    <ListItem button onClick={handleItemConfig}>
                      <ListItemIcon><SettingsIcon /></ListItemIcon>
                      <ListItemText primary="Configuración" />
                      {openSubMenuConfig ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openSubMenuConfig} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon> <BusinessIcon /> </ListItemIcon>
                          <ListItemText primary="Empresa" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon> <PeopleIcon /> </ListItemIcon>
                          <ListItemText primary="Compradores" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon> <PaletteIcon /> </ListItemIcon>
                          <ListItemText primary="Tipos de Servicio" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon> <PaletteIcon /> </ListItemIcon>
                          <ListItemText primary="Rubro Bienes" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon> <TrafficIcon /> </ListItemIcon>
                          <ListItemText primary="Estado Cotización" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon> <TrafficIcon /> </ListItemIcon>
                          <ListItemText primary="Estado Facturas" />
                        </ListItem>
                      </List>
                    </Collapse>       
                                                                                  
                </Fragment>                                                           
          </List>                          
         
        </Drawer>        
        </Fragment>      
    );
}
 
export default Navbar;