import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';
import sam from './out.PNG';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const styles = {
    paperContainer: {
        backgroundColor: '#A9A9A9',
        width: '90vw',
        height: '50.625vw', /* height:width ratio = 9/16 = .5625  */
        margin: 'auto',
        position: 'absolute',
        top:'0',
        bottom:'0', /* vertical center */
        left:'0',
        right:'0' /* horizontal center */
    },
    sam: {
      margin: 'auto',
      width: '50%',
      backgroundImage: `url(${sam})`,
      height: '40vh',
      width: '31.1vh'
    },
    methods: {
      margin: 'auto',
      width: '60%',
    }
};
//<Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '87vw'}}>
//<img src={sam} style={{height: 400, width: 'auto', margin: 'auto', display: 'block'}}alt=""></img>
//</Box>
export default function Home() {
  const [value, setValue] = React.useState('recents');
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
      <Paper className='background' style={styles.paperContainer}>
        <div className='header' href="/">
        <b className='name'>Contact Me</b>
        </div>

        <div>
        <Paper className='background' variant="outlined" style={styles.sam}>
        </Paper>
        <p className='explainc'>I needed to put something here to fill the page, so here's an ai-made impressionist painting of me.
        Renoir was incredibly prolific, once painting a portrait in only thirty-five minutes. My Renoir, though, took like three minutes to make.
        Maybe this is why modern artists have to create weird stuff that's hard to copy. </p>

        <Grid container spacing={2} style={styles.methods}>
    <Grid item xs={3}>
      <a href='https://twitter.com/samtaplinfacade'>
      <Item><TwitterIcon /></Item>
      </a>
    </Grid>
    <Grid item xs={3}>
      <a href='https://github.com/samtaplin'>
      <Item><GitHubIcon /></Item>
      </a>
    </Grid>
    <Grid item xs={3}>
      <a href='https://www.linkedin.com/in/samtaplin/'>
      <Item><LinkedInIcon /></Item>
      </a>
    </Grid>
    <Grid item xs={3}>
      <a href = "mailto: samtaplin@berkeley.edu">
      <Item><EmailIcon /></Item>
      </a>
    </Grid>
      </Grid>
      <Box sx={
        {
            backgroundColor: '#A9A9A9',
            height: '10vh',
            width: '87vw'
      }}>
      </Box>
        </div>
        </Paper>
        <BottomNavigation
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        >
        <BottomNavigationAction label="Home" href="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Blog" href="/#/blog" icon={<LibraryBooksIcon />} />
        <BottomNavigationAction label="Projects" href="/#/projects" icon={<CodeIcon />} />
        <BottomNavigationAction label="Contact" href="/#/contact" icon={<EmailIcon />} />
        </BottomNavigation>
      </Container>
    </React.Fragment>
  );
}
