import SendIcon from '@mui/icons-material/Send';
import { Button, Container, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('reminder')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)
        if(title === '') {
            setTitleError(true)
        }
        if(details === '') {
            setDetailsError(true)
        }
        if(title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, details, category})
            }).then(() => {
                navigate('/')
            })
        }
    }
    return (
        <Container>
            <Typography 
                variant='h6'
                component='h2'
                gutterBottom
                color='textSecondary'>
                Create a New Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>

                <TextField 
                    sx={{
                        marginTop: "20px",
                        marginBottom: "20px",
                    }}
                    error={titleError}
                    label='Note Title'
                    variant='outlined'
                    color='secondary'
                    required
                    fullWidth
                    onChange={(e) => setTitle(e.target.value)}/>
                
                <TextField
                    sx={{
                        marginBottom: "20px",
                    }}
                    error={detailsError}
                    label='Details'
                    variant='outlined'
                    color='secondary'
                    required
                    fullWidth
                    multiline
                    rows={4}
                    onChange={(e) => setDetails(e.target.value)}/>

                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel control={<Radio />} label='Reminder' value='reminder' />
                        <FormControlLabel control={<Radio />} label='Todos' value='todos' />
                        <FormControlLabel control={<Radio />} label='Work' value='work' />
                    </RadioGroup>

                <Button
                    type='submit'
                    color='primary'
                    variant='contained'
                    endIcon={<SendIcon />}>
                    Submit
                </Button>
            </form>
        </Container>
  )
}