'use client'
import { Post } from '@/lib/types';
import {
    UnorderedList,
    useColorModeValue
} from '@chakra-ui/react';
import PostListItem from './PostsListItem';
import Pagination from './Pagination';

const PostsList = ({ posts, currentPage, totalPages }: { posts: Post[], currentPage: number, totalPages: number }) => {
    return (
        <>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
        <UnorderedList
            listStyleType={'none'}
            border={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
            {posts.map((post: Post) => (
                <PostListItem post={post} key={post.id} />
            ))}
        </UnorderedList>
        </>
    )
}

export default PostsList;