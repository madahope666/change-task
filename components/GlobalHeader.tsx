'use client'

import {
    Heading,
    Flex,
    IconButton,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Drawer,
    DrawerContent
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons'
import { Link } from '@chakra-ui/next-js'

const GlobalHeader = () => {
    const { isOpen, onClose, onToggle } = useDisclosure()

    return (
        <Flex as="header"
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'baseline'}
            zIndex={'9999'}>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <Heading as="h1"
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    color={useColorModeValue('gray.800', 'white')}>
                    <Link href="/" _hover={{ textDecoration: 'none' }} title={"Home"}>Change Task</Link>
                </Heading>
            </Flex>

            <IconButton
                onClick={onToggle}
                icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                variant={'ghost'}
                display={{ base: 'flex', md: 'none' }}
                pos={'absolute'}
                right={'0'}
                aria-label={'Toggle Navigation'}
            />
            <nav>
                <Flex as="ul"
                    display={{ base: 'none', md: 'flex' }}
                    direction={'row'}
                    gap={'4'}
                    listStyleType={'none'}>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="#">Dead link</Link>
                    </li>
                    <li>
                        <Link href="#">Also Dead</Link>
                    </li>
                    <li>
                        <Link href="#">Yup, dead</Link>
                    </li>
                </Flex>
            </nav>

            <Drawer
                isOpen={isOpen}
                placement='right'
                size='full'
                onClose={onClose}
            >
                <DrawerContent pt={'4rem'}>
                    <nav>
                        <Flex as="ul"
                            display={{ base: 'flex', md: 'none' }}
                            direction={'column'}
                            alignContent={'center'}
                            gap={'4'}
                            listStyleType={'none'}
                            textAlign={'center'}>
                            <li>
                                <a href="#">Posts</a>
                            </li>
                            <li>
                                <Link href="#">Dead link</Link>
                            </li>
                            <li>
                                <Link href="#">Also Dead</Link>
                            </li>
                            <li>
                                <Link href="#">Yup, dead</Link>
                            </li>
                        </Flex>
                    </nav>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default GlobalHeader;