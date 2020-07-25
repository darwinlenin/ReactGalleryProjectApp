import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: 'inline-block',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          <img src="static/darwin-palma.jpg" alt="Darwin Palma" height="42" width="36"></img>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Systems Engineer Software Developer"
        subheader="Full-Stack Java | JavaScript | Python. Scrum Master"
      />
      <CardMedia
        className={classes.media}
        image="static/darwin-palma.jpg"
        title="Darwin Palma"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Founder of ZoeGeop Technologies. Passionate about technology, entrepreneur, researcher and innate player. Believer of the possibility that we all have to achieve what we propose with a pinch of focus and discipline.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={event =>  window.open("https://www.linkedin.com/in/darwinlenin/","_blank")} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton  onClick={event =>  window.open("https://github.com/darwinlenin","_blank")}  aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5" gutterBottom>Abstract:</Typography>
          <Typography variant="body1" align="justify" gutterBottom>
            Systems Engineer. Professional with solid skills and information technology (IT) skills grow hacking, software architecture, leadership skills, and team management.
            With more than ten years of experience in software development, I am a professional with knowledge and experience in technical and practical foundations, focused on perseverance and dedication. I have knowledge and certifications on the following technologies: Java, JavaScript, Python, AWS, Docker, Kubernetes, DevOps, TDD.
          </Typography>
          <Typography variant="subtitle2" align="justify" gutterBottom>
          Among other professional aspects, I have certifications in Agile methodologies, as well as Scrum, SAFe and Lean StartUp development frameworks issued internationally by Certiprof and the University of Maryland.
          </Typography>
          <Typography variant="body1" align="justify" gutterBottom>
          Accredited with certifications IBM, Lightbend (Deep Learning, Reactive Architecture), Udacity (Full-Stack Developer Nanodregree), with Certificate in studies certified by UNITEC (BigData), Certified Unity Videogame Developer (Pluralsight), IAB Spain Google (Digital Marketing, eCommerce, Google ADS).
          </Typography>
          <Typography variant="subtitle1" align="justify" gutterBottom>
          Training that complements and contributes to the effective handling of data for the processing of the relevant information of the main activity of the organization. Currently, my work focuses on the analysis and development of the business core of companies in the insurance and banking sector. 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
