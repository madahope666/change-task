'use client'

import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useRouter } from "next/navigation";

const FixedBackButton = ({text}: {text: string}) => { 
    const router = useRouter();
    return(
        <Button onClick={() => router.back()}
            position={'fixed'}
            bottom={'0.5rem'}
            left={'0.5rem'}
            display={'inline-block'}
            p={2}
            borderRadius={5}
            bg={'#000'}
            color={'#fff'}
            _hover={{background: 'gray.600'}}><ArrowBackIcon />{text}</Button>
    )
}

export default FixedBackButton;