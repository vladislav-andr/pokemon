import React, {
  useState,
  useEffect
} from 'react';
import {
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles';

import {
  Container,
  Typography,
  Paper
} from '@material-ui/core';
import { Link } from "react-router-dom";
import Card from './Card'
import PageList from './PageList'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: theme.spacing(6),
      '& > *': {
        margin: theme.spacing(1),
        marginTop: theme.spacing(3),
        width: "80%",
        [theme.breakpoints.down('xs')]: {
          padding: 0,
          // margin: theme.spacing(-3), 
          width: "100%",
          marginTop: theme.spacing(2),
        },
        height: "auto",
      },
    },

    list: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      alignSelf: 'center',
      justifyItems: 'center',
      [theme.breakpoints.up('sm')]: { gridTemplateColumns: '1fr', },
      [theme.breakpoints.up('md')]: { gridTemplateColumns: '1fr 1fr ', },
      [theme.breakpoints.up('lg')]: { gridTemplateColumns: '1fr 1fr 1fr ', },
      [theme.breakpoints.up('xl')]: { gridTemplateColumns: '1fr 1fr 1fr 1fr', },
    },
    /*
    xs 0+
    sm 600+
    md 960+
    lg 1280+
    xl 1920+
    */
  }),
);

export default function Content({ listURL, showfilter, loading, setLoading }) {
  const classes = useStyles();
  const [page, setPage] = useState(1)
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    setPage(1)
    setLoading(false)
  }, [listURL, showfilter])

  useEffect(() => {
    const begin = ((page - 1) * showfilter)
    const end = ((page * showfilter) < listURL.length ? (page * showfilter) : listURL.length)
    const temp = listURL.slice(begin, end)
    setPokemons(temp)
    setLoading(false)
  }, [(page && listURL), page, showfilter])

  if (loading) return (
    <div className={classes.root}>
      <Paper 
      elevation={20} 
      style={{ height: '100vh' }}>
        <Typography 
        style={{ display: 'flex', justifyContent: 'center', }}>Loading...</Typography>
      </Paper>
    </div>
  )

  return (
    <div className={classes.root}>
      <Paper elevation={20}>
        <Container className={classes.list}>
          {pokemons?.map(res =>
            <Link
              style={{ textDecoration: 'none', }}
              key={res.name}
              to={`pokemonAPI/${res.name}/`}
            >
              <Card
                key={res.name}
                url={res}
              />
            </Link>
          )}
        </Container>
        <PageList
          filter={showfilter}
          length={listURL.length}
          page={page}
          setPage={setPage}
        />
      </Paper>
    </div>

  );
}
