import { AddCircleOutline, NoteAddOutlined, SubjectOutlined } from '@mui/icons-material'
import { AppBar, Avatar, Container, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'

export default function Layout({children}: any) {
    const menuItems = [
        {
            text: 'All Notes',
            icon: <SubjectOutlined color='primary' />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <NoteAddOutlined color='primary' />,
            path: '/create'
        }
    ]
    const location = useLocation()
  return (
    <Container disableGutters sx={{display: 'flex'}}>
        <AppBar 
            elevation={0}
            sx={{
                width: `calc(100% - 240px)`,
            }}>
            <Toolbar>
                <Typography variant='h5'
                sx={{
                    flexGrow: 1,
                }}>
                    Today is {format(new Date(), 'eeee, do MMMM Y')}
                </Typography>
                <Typography variant='h6'>
                    Admin
                </Typography>
                <Avatar sx={{
                    marginLeft: '10px',
                }}/>
            </Toolbar>
        </AppBar>

        <Drawer
        variant='permanent'
        anchor='left'
        sx={{ 
            '& .MuiDrawer-paper': {
                width: '240px',
            }
        }}>
            <Container disableGutters 
            sx={{
                padding: '20px',
            }}>
                <Typography variant='h5'>
                    Notes App
                </Typography>
            </Container>
            <List>
                {menuItems.map((item) => (
                    <ListItemButton key={item.text} 
                    sx={{
                        backgroundColor: location.pathname === item.path ? '#f4f4f4' : null,
                    }}
                    onClick={() => window.location.pathname = item.path}>
                        <ListItemIcon>{item.icon}</ListItemIcon> 
                        <ListItemText primary={item.text} sx={{marginLeft: '10px'}} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>

        <Container
        sx={{
            marginTop: '64px',
        }}>
            {children}
        </Container>
        
    </Container>
  )
}
