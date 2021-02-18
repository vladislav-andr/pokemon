import React, { useState, useEffect } from 'react';
import pokemontype from './pokemonTypes'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog, Button,
  Typography,
} from '@material-ui/core';

import getPokemon from './../../Function/getPokemon'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '300px',
        height: '400px',
      },
    },
    type: {
      color: 'white',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'table',
      borderSpacing: '5px',
    },
    type_div: {
      display: 'table-cell',
      padding: '3px 10px',
      borderRadius: '5px',
    },
    pokemon_img: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '200px',
      height: '200px',
      padding: '20px 0',
      [theme.breakpoints.down('sm')]: { 
        width: '125px',
      height: '125px',
       },
    },
  }),
);



export default (res) => {
  const classes = useStyles()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const info = async name => setPokemon(await getPokemon(name))
    info(res.match.params.name)
  }, [])
  if (!pokemon) return null;

  const { id, name, stats, types, img } = pokemon

  return (
    <div className={classes.root}>
      <Dialog open={true}>
        <DialogTitle>
          Pokemon Information
            </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img
              src={img}
              alt="pokemon_img"
              className={classes.pokemon_img} />
            <Typography
              component={'span'}
            >ID: {id}
            </Typography>
            <p >{name}</p>
            <p className={classes.type}>
              {types?.map(({ type }) => (
                <Typography
                  component={'span'}
                  className={classes.type_div}
                  style={{ backgroundColor: pokemontype[type.name] }}
                  key={type.name}
                >
                  {type.name}
                </Typography>
              ))}
            </p>
            <div>
              <Typography component={'span'} >
                CHARACTER:
              </Typography>
              <ul>
                {stats?.map(({ base_stat, stat: { name } }) => (
                  <li key={name}>
                    <Typography component={'span'}>
                      {name}: {base_stat}
                    </Typography>
                  </li>
                ))
                }
              </ul>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Return</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}  