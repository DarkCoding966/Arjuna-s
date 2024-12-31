import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Box } from '@mui/material';
import { Iconify } from '../../components/iconify';
import MenuIcon from '@mui/icons-material/Menu';  // Icon to toggle drawer state

interface DrawerComponentProps {
  open: boolean;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ open }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle between collapsed and expanded states
  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Drawer
      sx={{
        width: isCollapsed ? 80 : 300, // Conditionally adjust width
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isCollapsed ? 80 : 300,
          zIndex:5,
          marginTop:15,
          boxSizing: 'border-box',
          backgroundColor: '#f4f4f4',
          padding: '16px',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box sx={{marginTop:5}} />

      {/* Collapse/Expand Button */}
      <IconButton
        onClick={handleCollapseToggle}
        sx={{
          position: 'absolute',
          top: '16px',
          right: isCollapsed ? '8px' : '16px', // Move button if collapsed
          zIndex: 1,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Divider sx={{marginTop:2,marginBottom:2}}/>
      <List>
        <ListItem>
          <ListItemText
            primary={isCollapsed ? <Iconify icon="line-md:home" /> : 'Link 1'}
            primaryTypographyProps={{
              style: {
                fontWeight: 500,
                fontSize: '1rem',
                color: '#555',
              },
            }}
          />
        </ListItem>
{/* 
        <ListItem>
          <ListItemText
            primary={
              isCollapsed ? (
                <Iconify icon="line-md:heart" style={{ marginLeft: '8px', color: '#f44336' }} />
              ) : (
                <>
                  Trending <Iconify icon="line-md:heart" style={{ marginLeft: '8px', color: '#f44336' }} />
                </>
              )
            }
            primaryTypographyProps={{
              style: {
                fontWeight: 500,
                fontSize: '1rem',
                color: '#555',
              },
            }}
          />
        </ListItem> */}

        <ListItem>
          <ListItemText
            primary={isCollapsed ? <Iconify icon="line-md:link" /> : 'Link 2'}
            primaryTypographyProps={{
              style: {
                fontWeight: 500,
                fontSize: '1rem',
                color: '#555',
              },
            }}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={isCollapsed ? <Iconify icon="line-md:star" /> : 'Link 3'}
            primaryTypographyProps={{
              style: {
                fontWeight: 500,
                fontSize: '1rem',
                color: '#555',
              },
            }}
          />
        </ListItem>

        {/* <ListItem>
          <ListItemText
            primary={
              isCollapsed ? (
                <Iconify icon="line-md:heart" style={{ marginLeft: '8px', color: '#f44336' }} />
              ) : (
                <>
                  Trending <Iconify icon="line-md:heart" style={{ marginLeft: '8px', color: '#f44336' }} />
                </>
              )
            }
            primaryTypographyProps={{
              style: {
                fontWeight: 500,
                fontSize: '1rem',
                color: '#555',
              },
            }}
          />
        </ListItem> */}

        <ListItem>
          <ListItemText
            primary={isCollapsed ? <Iconify icon="line-md:link" /> : 'Link 4'}
            primaryTypographyProps={{
              style: {
                fontWeight: 500,
                fontSize: '1rem',
                color: '#555',
              },
            }}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={isCollapsed ? <Iconify icon="line-md:link" /> : 'Link 5'}
            primaryTypographyProps={{
              style: {
                fontWeight: 500,
                fontSize: '1rem',
                color: '#555',
              },
            }}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={isCollapsed ? <Iconify icon="line-md:link" /> : 'Link 6'}
            primaryTypographyProps={{
              style: {
                fontWeight: 500,
                fontSize: '1rem',
                color: '#555',
              },
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
