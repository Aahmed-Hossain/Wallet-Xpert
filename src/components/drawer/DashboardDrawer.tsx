"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import DrawerSidebar from './DrawerSidebar';

const drawerWidth = 230;

export default function DashboardDrawer({children}:{children:React.ReactNode}) { 
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Box className="font-extrabold text-4xl h-12 text-center mt-4">Wallet<span className='text-yellow-500'>Xpert</span> </Box>
      <Divider />
      <DrawerSidebar handleDrawerClose={handleDrawerClose} />
    </div>
  );

  return (
    <Box  sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar className=""
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'gray',


        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="font-extrabold text-4xl h-12 text-center mt-4">Wallet<span className='text-yellow-500'>Xpert</span> </Box>
        </Toolbar>
      </AppBar>

     
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth },  }}
        // aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar/>
        <Box className="">
        {children}
        </Box>
      </Box>
    </Box>
  );
}