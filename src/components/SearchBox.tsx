import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  form: {
    margin: '2rem 0',
    padding: '0 2rem',
  },
  textField: {
    width: '100%',
  },
});

type SearchBoxProps = {
  // TODO: Any way to handle without using any?
  searchChange: React.ChangeEvent<HTMLInputElement> | any;
};

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <TextField
        className={classes.textField}
        label="Search..."
        variant="outlined"
        onChange={searchChange}
      />
    </form>
  );
}

export default SearchBox;
