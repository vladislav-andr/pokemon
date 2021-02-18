import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      '& > *': {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
      },
    },
  }),
);

export default function PaginationButtons({ filter, length, page, setPage }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination 
      count={Math.ceil(length / filter)} 
      onChange={(event, page) => setPage(page)} 
      page={page} 
      shape="rounded" 
      showFirstButton 
      showLastButton>
      </Pagination>
    </div>
  );
}