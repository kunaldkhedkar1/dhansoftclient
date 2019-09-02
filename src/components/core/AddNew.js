import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',

    alignItems: 'center',
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },
}));

export default function AddNew(props) {
  const classes = useStyles();
  const { label, onClickIcon } = props;

  return (
    <div className={classes.root}>
    <button onClick={onClickIcon}>
      <Icon className={classes.icon} color="primary" onClick={onClickIcon}>
        add_circle
      </Icon>
      </button>
      {label}
    </div>
  );
}
