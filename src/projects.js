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
import socialchoice from './socialchoice.PNG';
import thesis from './thesisbutton.PNG';

const styles = {
    paperContainer: {
        backgroundColor: '#39CCCC',
        height: '100vh',
        width: '87vw'
    },

    button: {
      margin: 'auto',
      width: '50%',
      backgroundImage: `url(${socialchoice})`,
      height: '20vh',
      width: '40vw'
    },

    button2: {
      margin: 'auto',
      width: '50%',
      backgroundImage: `url(${thesis})`,
      height: '20vh',
      width: '40vw'
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
        <b className='name'>Projects</b>
        </div>
        <div>
        <h1 className='explainh'> <b>Social Choice </b> </h1>
        <p className='explain'>Social Choice is an online tool that aggregates people's preferences to recommend a collective decision.
        Users can run the Borda Count, Hare's Method, Condorecet and Plurality algorithms on their ballot profile to choose a winning candidate. </p>
        <a href='https://socialchoice.herokuapp.com/'>
        <Paper variant="outlined" elevation='6' className='background' style={styles.button}>
        </Paper>
        </a>
        </div>

        <div>
        <h1 className='explainh'> <b>'He's Finished! Why Some Elections Threaten Authoritarian Rulers'</b> </h1>
        <p className='explain'>My Senior Thesis. Advised by Professors Susan Hyde and Terri Bimes.</p>
        <a href='https://github.com/samtaplin/thesis'>
        <Paper variant="outlined" elevation='6' className='background' style={styles.button2}>
        </Paper>
        </a>
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
        <BottomNavigationAction label="Blog" href="/blog" icon={<LibraryBooksIcon />} />
        <BottomNavigationAction label="Projects" href="/projects" icon={<CodeIcon />} />
        <BottomNavigationAction label="Contact" href="/contact" icon={<EmailIcon />} />
        </BottomNavigation>
      </Container>
    </React.Fragment>
  );
}
