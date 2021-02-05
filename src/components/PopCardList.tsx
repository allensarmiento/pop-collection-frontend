import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Pop } from '../state/types';
import PopCard from './PopCard';

const useGridStyles = makeStyles(({ breakpoints }) => {
  return {
    root: {
      [breakpoints.up('xs')]: {
        justifyContent: 'center',
      },
    },
  };
});

type CardListProps = {
  pops: Array<Pop>;
};

const CardList = ({ pops }: CardListProps) => {
  const gridStyles = useGridStyles();

  return (
    <Grid classes={gridStyles} container spacing={4} wrap={'wrap'}>
      {!pops.length ? <h3>There are no pops!</h3> : (
        pops.map((pop, index) => (
          <Grid key={index} item>
            <PopCard
              title={pop.name}
              subtitle={pop.category}
              image={pop.image}
              color={pop.color}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CardList;
