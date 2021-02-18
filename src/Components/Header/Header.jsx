import React from 'react';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import { Toolbar, AppBar, IconButton, Typography } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import Filter from './Filter'
import Search from './Search'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      display: 'block',
    },

  }),
);

export default ({ getFiltershow, getupdateSearch, getMenuStatus }) => {
  const classes = useStyles();

  const MenuStatus = () => getMenuStatus(true)

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={MenuStatus}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='span'
            className={classes.title}
            variant="h6"
            noWrap
          >
            PokemonAPI
          </Typography>
          <Search updateSearch={getupdateSearch} />
          <Filter updateFiltershow={getFiltershow} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
