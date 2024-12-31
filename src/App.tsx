// import HomeView from './sections/home/home-view/home-view'
import NotLogin from './sections/NotLogin/NotLogin'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './sections/home/home-view/home-view';

function App() {

  return (
    <Router>
    <Box sx={{BackgroundColor:"#000"}}>
    </Box>
    <Routes>
      <Route path='/' element={<NotLogin />} />
      <Route path='/home' element={<HomeView />} />
    </Routes>
    </Router>
  )
}

export default App
