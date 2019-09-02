import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MultipleSelect from './core/MultiSelect';
import AddNew from './core/AddNew';
import Modal from './core/Modal';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  form:{
      display: 'flex',
      flexDirection:'column',
      maxWidth: '1200px',
      width: '100%',
  },
  input: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

export default function Inputs() {
  const classes = useStyles();
  const [modal, setOpenModal]= useState('');
  const openModal = () => {
        setOpenModal('Homoepathy');
  }
  return (
    <div className={classes.container}>
    <div className={classes.form}>
      <Input
        placeholder="Enter Disease name"
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <MultipleSelect/>
      <AddNew label='Homoepathy' onClick={openModal}/>
      <AddNew label='Ayurvedic'/>
      <AddNew label='Biochemic'/>
      <Modal isOpen={(modal === 'Homoepathy')} />
      </div>
    </div>
  );
}
