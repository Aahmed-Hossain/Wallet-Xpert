import React from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TbTransactionBitcoin } from "react-icons/tb";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const dashboardPaths = [
    {
      title: "Dashboard",
      path: ``,
      icon: DashboardIcon,
    },
    {
      title: "Transactions",
      path: `transactions`,
      icon: TbTransactionBitcoin,
    },
    {
      title: "Calendar",
      path: `calendar`,
      icon: CalendarMonthIcon,
    },
  ];
const DrawerSidebar = () => {
    const pathName=usePathname()
    
  return (
    <Box>
        <List>
            {
              dashboardPaths.map((item, index)=>
            <Link href={`/dashboard/${item.path}`} key={index}>
                <ListItem key={index}
             disablePadding
             sx={{
                  ...(pathName === `/dashboard/${item.path}`
                    ? { borderRight: "3px solid blue", "& svg": { color: "blue" },my:2 }
                    : {}),
                }}
             >
              <ListItemButton>
                <ListItemIcon>
                  {item.icon&&<item.icon/>}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
              
              </Link>) 
            }
        </List>
    </Box>
  )
}

export default DrawerSidebar