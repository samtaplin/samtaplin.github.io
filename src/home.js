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
import sam from './IMG_0461.jpg';

const styles = {
    paperContainer: {
        backgroundImage: `url(${sam})`,
        width: '90vw',
        height: '50.625vw', /* height:width ratio = 9/16 = .5625  */
        margin: 'auto',
        position: 'absolute',
        top:'0',
        bottom:'0', /* vertical center */
        left:'0',
        right:'0' /* horizontal center */
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
        <b className='name'>Sam Taplin</b>
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
