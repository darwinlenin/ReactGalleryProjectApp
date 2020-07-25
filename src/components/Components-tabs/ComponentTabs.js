import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddAPhoto from '@material-ui/icons/AddAPhoto';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

import './ComponentsTabs.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Unity Photon Networking Series" icon={<AddAPhoto />} {...a11yProps(0)} />
          <Tab label="Photogrametry 3DF Zephir Unity" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Unity ARCore Portal VR" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Unity + Vuforia VR" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Launch Apps in Google Play Store" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Monetizing Apps with Unity Ads" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Unity Certifications by Pluralsight" icon={<ThumbUp />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Button variant="contained" color="primary" href="https://www.youtube.com/watch?v=dpklRdGEUAk&t=39s" target="_blank">
          Unity Photon Networking Series
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Button variant="contained" color="yellow" href="https://www.youtube.com/watch?v=s6UJBLbIzHY&t=119s" target="_blank">
          Photogrametry 3DF Zephir Unity
        </Button>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Button variant="contained" color="secondary" href="https://www.youtube.com/watch?v=19bvy8Df0AY&t=712s" target="_blank">
          Unity ARCore Portal VR
        </Button>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Button variant="contained" href="https://www.youtube.com/watch?v=ei5YgOuy41Y&t=1322s" target="_blank">
          Unity + Vuforia VR
        </Button>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Button variant="contained" href="https://www.youtube.com/watch?v=yHAR8gQz2Lg&t=20s" target="_blank">
          Launch Apps in Google Play Store 
        </Button>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Button variant="contained" href="https://www.youtube.com/watch?v=XSRsc2VK2nE&t=3s" target="_blank">
        Monetizing Apps with Unity Ads 
      </Button>      
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Button variant="contained" href="https://app.pluralsight.com/profile/darwin-palma" target="_blank">
        Unity Certifications by Pluralsight 
      </Button>  
      </TabPanel>
    </div>
  );
}
