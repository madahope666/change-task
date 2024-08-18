'use client'

import { Heading } from '@chakra-ui/react';

const PageMainHeading = ({ pageTitle }: { pageTitle: string }) => {
    return(
        <Heading as="h2"
        fontSize={{ base: '2rem', md: '3rem' }}
        textAlign={'center'}
        mb={4}>{pageTitle}</Heading>
    )
}

export default PageMainHeading;