import React, { useState, Fragment, useContext, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';

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
      justifyContent: 'flex-end',
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
}));


const Navbar = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);          
           
    const handleListItemClick = (event, index) => {
      selectItemNavbar(index);
    };
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
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
              <Typography>
                Usuario
              </Typography>
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
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>

          <Divider />

          <List>             
                <Fragment>
                    <ListItem button key='nueva-ficha'>
                        <ListItemIcon><FolderSharedIcon /></ListItemIcon>
                        <ListItemText primary='Nueva Ficha'/>
                    </ListItem>
                      
                    <ListItem button key='buscar-ficha'>
                          <ListItemIcon><SearchIcon /></ListItemIcon>
                          <ListItemText primary='Buscar Ficha'/>
                        </ListItem>
                      <Fragment key="consultar-padron-fragment-1">
                          <Divider/>  
                          <ListItem button key='consultar-padron'>
                            <ListItemIcon><SupervisedUserCircle /></ListItemIcon>
                            <ListItemText primary='Padrón Afiliados'/>
                          </ListItem>       
                       </Fragment>
                        <ListItem button key='consultar-padron-onco'>
                        <ListItemIcon><SupervisedUserCircle /></ListItemIcon>
                        <ListItemText primary='Padrón de Planes'/>
                    </ListItem>                                            
                </Fragment>                                                           
          </List>                          

          <Divider />

          <List>
              <ListItem button key='acerca-de'
                >
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary='Acerca de'/>
              </ListItem>
              <ListItem button key='cambiar-password' 
              >
              <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                <ListItemText primary='Cambiar Contraseña'/>
              </ListItem>
              <ListItem button key='cerrar-sesion'>
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary='Cerrar Sesión'/>
              </ListItem>
          </List> 
        </Drawer>        
        </Fragment>      
    );
}
 
export default Navbar;