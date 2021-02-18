import React, {useState, useEffect} from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Typography, Select, MenuItem, InputBase } from '@material-ui/core';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({

    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '5px 26px 5px 12px',
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(0, 2),
    },
  }),
);

export default function FilterOutPut({updateFiltershow}) {
  const classes = useStyles();

  const [num, setNum] = useState(20);

  const filter = [20,50,100]

  useEffect(() => {
    updateFiltershow(num)
      }, [num])

  return (
          <Typography component='span'>
            <Select
          value={num}
          onChange={e=>setNum(e.target.value)}
          input={<BootstrapInput />}
        >
          {filter?.map((res, index) => <MenuItem key={index} value={res}>{res}</MenuItem>)}
        </Select>
          </Typography>
  );
}