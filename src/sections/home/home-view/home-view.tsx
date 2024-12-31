import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import DrawerComponent from '../home-drawer';  
import DashboardLayout from './dashboard';
import Navbar from '../../../components/Navbar';

const HomeView: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  // Toggle drawer open/close
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {/* Navbar Component */}
        <Navbar toggleDrawer={toggleDrawer} isMobile={isMobile} />

        {/* Drawer component */}
        <DrawerComponent open/>

        {/* Main content area */}
        <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f4f4f4', marginTop:"8rem"}}>
          <DashboardLayout />
        </Box>
      </Box>
    </>
  );
};

export default HomeView;
