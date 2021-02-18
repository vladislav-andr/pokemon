import React, {
  useState,
  useEffect
} from 'react';
import pokemontype from './pokemonTypes'
import {
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Paper,
} from '@material-ui/core';
import getPokemon from './../../Function/getPokemon'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.down('xs')]:{
        marginLeft: theme.spacing(-2.9),
      },
      '& > *': {
        margin: theme.spacing(1),
        width: '260px',
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
      width: '150px',
      height: '150px',
      padding: '20px 0',
    },
  }),
);



export default ({ url }) => {
  const classes = useStyles();

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const info = async name => setPokemon(await getPokemon(name))
    info(url.name)
  }, [])
  if (!pokemon) return null;

  const { id, name, types, img } = pokemon

  return (
    <div className={classes.root}>
      <Paper>
        <Container>
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
        </Container>
      </Paper>
    </div>
  );
}
