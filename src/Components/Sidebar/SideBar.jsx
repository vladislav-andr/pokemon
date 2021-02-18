import React, { useState, useEffect } from 'react';
import pokemontype from '../Content/pokemonTypes'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel, Drawer } from '@material-ui/core';
import getUrl from './../../Function/getUrl'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    type: {
      color: 'white',

      display: 'block',
      borderSpacing: '5px',
    },
    type_div: {
      cursor: 'pointer',
      width: '125px',
      margin: '2px',
      padding: '0px 10px',
      borderRadius: '5px',
      fontSize: '8pt',
    },
  }),
);

export default ({ menuStatus, getMenuStatus, typefilter, setTypefilter }) => {
  const classes = useStyles();

  const [type, setType] = useState([])

  const getType = async () => setType(await getUrl('https://pokeapi.co/api/v2/type'))

  useEffect(() => {
    getType()
  }, [])

  const setCheckedFilter = value => {
    if (!typefilter.includes(value))
      setTypefilter((prev) => [...prev, value])
    else
      setTypefilter(typefilter.filter(res => res != value))
  }

  return (
    <Drawer
      open={menuStatus}
      onClose={() => getMenuStatus(false)}
    >
      {type?.map(res =>
        <div key={res.name}>
          <FormControlLabel
            style={{ backgroundColor: pokemontype[res.name] }}
            className={classes.type_div}
            control={
              <Checkbox
                checked={typefilter.includes(res.name)}
                onClick={() => setCheckedFilter(res.name)}
              />
            }
            label={res.name}
          />
        </div>
      )}
    </Drawer>
  );
}




