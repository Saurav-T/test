import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <>
        <Box textAlign={'center'} 
             fontSize={'32px'} 
             width={'80%'} 
             mx={'auto'}
             mt={'20px'}
             mb={'20px'}
             display={'flex'}
             boxShadow={'0 0 10px grey'}>
                <Box width={'50%'} p={'20px'}> 
                    <Typography variant='h4' color='secondary' sx={{textDecoration: 'underline'}}>
                        Anush Address
                    </Typography>
                    <Typography variant='h5'>
                        Anush College
                    </Typography>
                    <Typography variant='h6'>
                        Anush, Lalitpur
                    </Typography>
                </Box>
                <Box width={'50%'} 
                     p={'10px'}>
                <Typography variant='h4' 
                            color='secondary' 
                            sx={{textDecoration: 'underline'}}>
                        Swachha Form
                </Typography>
                    <TextField fullWidth 
                               label={'Email'} 
                               placeholder='Enter Your Email Here' 
                               required 
                               variant='standard'/>
                    <TextField fullWidth 
                               label={'Subject'} 
                               placeholder='Enter Your Email Here' 
                               required 
                               variant='outlined'/>
                    <TextField fullWidth 
                               label={'Message'} 
                               placeholder='Enter Your Email Here' 
                               required 
                               variant='filled' 
                               multiline 
                               rows={5}/>
                <Button variant='standard'>Swachha Submit</Button>
                <Button variant='contained'>Swachha Not Submit</Button>
                <Button variant='outlined'>Swachha Maybe Submit</Button>
                </Box>
        </Box>
    </>
  )
}

export default Contact