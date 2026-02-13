import { Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import { Masonry } from '@mui/lab'

export default function Notes() {
    const [notes, setNotes] = useState([])
    const handleDelete = async (id: number) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })
        const newNotes = notes.filter((note: any) => note.id !== id)
        setNotes(newNotes)
    }
    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])
    return (
        // <Container >
            <Masonry columns={3} spacing={2}>
                {notes.map((note: any) => (
                    <NoteCard key={note.id} note={note} handleDelete={handleDelete}/>
                ))}
                </Masonry>
        // </Container>
    )
}