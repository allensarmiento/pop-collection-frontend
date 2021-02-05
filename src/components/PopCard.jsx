import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => {
  return {
    actionArea: {
      borderRadius: 16,
      transition: '0.2s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    card: ({ color }) => ({
      minWidth: 256,
      borderRadius: 16,
      boxShadow: 'none',
      '&:hover': {
        boxShadow: `0 6px 12px 0 ${Color(color)
          .rotate(-12)
          .darken(0.2)
          .fade(0.5)}`,
      },
    }),
    content: ({ color }) => {
      return {
        backgroundColor: color,
        padding: '1rem 1.5rem 1.5rem',
      };
    },
    title: {
      fontFamily: 'Keania One',
      fontSize: '2rem',
      color: '#fff',
      textTransform: 'uppercase',
    },
    subtitle: {
      fontFamily: 'Montserrat',
      color: '#fff',
      opacity: 0.87,
      marginTop: '2rem',
      fontWeight: 500,
      fontSize: 14,
    },
  };
});

const PopCard = ({ color, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  const classes = useStyles({ color });

  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        {image ? <CardMedia classes={mediaStyles} image={image} /> : (
          <CardMedia classes={mediaStyles} image={'//:0'} />
        )}
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h3'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default PopCard;
