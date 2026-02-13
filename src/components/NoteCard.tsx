import { DeleteOutline } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'

export default function NoteCard({note, handleDelete}: any) {
  return (
    <div>
        <Card elevation={3}
        sx={{
            width: '100%',
        }}>
            <CardHeader 
                avatar={
                    <Avatar sx={{
                        bgcolor: note.category === 'work' ? '#f44336' : note.category === 'reminder' ? '#2196f3' : '#4caf50',
                    }}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutline />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary'>
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}
