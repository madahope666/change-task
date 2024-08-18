'use client'

import { Link } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from "next/navigation";

const FixedBackButton = ({text}: {text: string}) => { 
    const router = useRouter();
    return(
        <Link onClick={() => router.back()}
            position={'fixed'}
            bottom={'0.5rem'}
            left={'0.5rem'}
            display={'inline-block'}
            p={2}
            borderRadius={5}
            bg={'#000'}
            color={'#fff'}><ArrowBackIcon />{text}</Link>
    )
}

export default FixedBackButton;