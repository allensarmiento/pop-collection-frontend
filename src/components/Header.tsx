import { memo } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    margin: '2rem 0',
  },
  title: {
    fontSize: '4rem',
  },
});

const Header = () => {
    const classes = useStyles();

    return (
      <div className={classes.container}>
        <h2 className={classes.title}>Pop Collection</h2>
      </div>
    );
}

export default memo(Header);
