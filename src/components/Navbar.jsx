import {
  Box,
  Center,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Navlink from './Navlink'

export function Navbar() {
  const { toggleColorMode } = useColorMode()
  // const { logout, currentUser } = useAuth()
  const { logout, currentUser } = useAuth()

  return (
    
    <Box
      borderBottom='2px'
      borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
      mb={4}
      py={4}
      
    >
      <HStack
        justifyContent='flex-end'
        display={''}
        flexDirection={['column', 'row']}
        maxW='container.lg'
        mx='auto'
        spacing={'auto'}
        
      >
        <Center>
       
        <Navlink to='https://mastermindsltd.com/'  name='masterMinds' size='lg'/>
 
       
        </Center>
        <Spacer />
        <Center>
        {!currentUser && <Navlink to='/login' name='Login'/>}
        {!currentUser && <Navlink to='/register' name='Register' />}
        {currentUser && <Navlink to='/profile' name='dashboard' />}
        
        {currentUser && (
          <Navlink
            to='/logout'
            name='Logout'
            onClick={async e => {
              e.preventDefault()
              await logout()
            }}
          />
        )}
        <IconButton
          variant='ghost'
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label='toggle-dark-mode'
        /></Center>
      </HStack>
    </Box>
  )
}
