import React from 'react';
import { useStyles } from '../../pages/HomeAdmin/style';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LayersIcon from '@material-ui/icons/Layers';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import createAction from '../../redux/actions';
import Constants from '../../redux/constants';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleNavbarClose = () => {
    dispatch(createAction(Constants.OPEN_NAVBAR, false));
  };

  const open = useSelector((state) => state.admin.openNavbar);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Typography>123</Typography>
        <IconButton onClick={handleNavbarClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Category', 'Course', 'Video', 'Target', 'User', 'Role'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index <= 3 ? <LayersIcon /> : <PersonIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
