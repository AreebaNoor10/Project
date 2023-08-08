import Navbar from './Components/Navbar/Navbar';
import Card1 from './Components/Card1'
import Hero from './Components/Hero'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import Muigridfooter from './Components/Muigridfooter';
import HubspotCMO from './Components/HubspotCMO';
import { Container } from '@mui/material';
import GridLayout from './Components/GridLayou.js';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import './App.css'
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    }
  },
});
function App() {
  return(
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Hero/>
    <Card1/>
    <Container>
    <HubspotCMO/>
    </Container>
    <GridLayout/>
    <Section4/>
    <Section5/>
    <Muigridfooter/>
    </ThemeProvider> 
  )
 
}

export default App;
