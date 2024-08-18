'use client'
import { Post } from '@/lib/types';
import {
    ListItem,
    ListIcon,
    useColorModeValue,
    Heading,
    Flex,
    LinkBox,
    LinkOverlay,
    Box,
    Text
} from '@chakra-ui/react';
import { CheckCircleIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useAppContext } from '@/contexts/AppContext';
import { firstLetterUppercase } from '@/lib/utils';

const PostListItem = ({ post }: { post: Post }) => {
    const { viewedPosts, addViewedPost } = useAppContext();
    const updateViewedPosts = () => {
        addViewedPost(post.id);
    }

    return (
        <ListItem
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            onClick={updateViewedPosts}
        >
            <LinkBox
                display={'flex'}
                justifyContent={'space-between'}
                p={3}
                _hover={{ textDecoration: 'none', backgroundColor: useColorModeValue('gray.200', 'gray.900') }}>
                <Flex direction={'column'} pr={'1em'}>
                    <Heading as="h3" fontSize={'1.25em'}>
                        {post.title}
                    </Heading>
                    <Text>{firstLetterUppercase(post.body)}</Text>
                    <LinkOverlay href={`/posts/${post.id}`} mt={2} _hover={{ textDecoration: 'underline' }}>Read Post <ArrowForwardIcon /></LinkOverlay>
                </Flex>
                <Box width={'2em'} flexGrow={'1'} textAlign={'center'}>
                    {viewedPosts.indexOf(post.id) > -1 &&
                        <ListIcon as={CheckCircleIcon} color='#000' fontSize={'1.25em'} m={0} />
                    }
                </Box>
            </LinkBox>
        </ListItem>
    )
}

export default PostListItem;