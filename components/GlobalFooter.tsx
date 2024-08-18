'use client'

import { chakra, useColorModeValue } from '@chakra-ui/react';

const GlobalFooter = () => {
    return (
        <chakra.footer 
        display="flex"
        justifyContent="center"
        p="3" 
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        borderTop={1}
        borderStyle="solid"
            borderColor={useColorModeValue('gray.200', 'gray.900')}>
            &copy; madahope
        </chakra.footer>
    )
}

export default GlobalFooter;