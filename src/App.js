import React from 'react'
import Nav from './common/components/Nav';
import Movies from './pages/Movies/Movies';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Users from './pages/users/Users';
import { Stack } from '@mui/system';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
});

class App extends React.Component{


    render(){
        return(
            <div className='page'>
                <ThemeProvider theme={darkTheme}>
                    <Nav/>
                    <Stack spacing={3} className="page-content">
                        <Movies/>
                        <Users/>
                    </Stack>
                </ThemeProvider>
            </div>
        )
    }
}

export default App;