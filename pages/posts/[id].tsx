'use client'

import type { GetStaticPaths, GetStaticProps } from 'next';
import { Post, Comment, DetailedPostWithUser, User } from "@/lib/types";
import PageMainHeading from '@/components/PageMainHeading';
import CommentsList from '@/components/CommentsList';
import { Heading, Text } from '@chakra-ui/react';
import FixedBackButton from '@/components/FixedBackButton';
import { firstLetterUppercase } from '@/lib/utils';

export const getStaticPaths = (async () => {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post: Post) => ({
        params: { id: post.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params }) => {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
    const post: Post = await postRes.json();

    const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params?.id}`);
    const comments: Comment[] = await commentsRes.json();

    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`);
    const user: User = await userRes.json();

    const fullPost: DetailedPostWithUser = {
        post: post,
        comments: comments,
        user: user
    }

    // Pass post data to the page via props
    return { props: { fullPost } }
}) satisfies GetStaticProps<{
    fullPost: DetailedPostWithUser
}>

export default function PostPage({ fullPost }: { fullPost: DetailedPostWithUser }) { 
    return (
        <>
            <FixedBackButton text={"Back to posts"} />
            <PageMainHeading pageTitle={fullPost.post.title} />
            <Text fontSize={'0,75em'} textAlign={'center'}>
                by {fullPost.user.username}, {fullPost.user.address.city}
            </Text>
            <Text my={10}>
                {firstLetterUppercase(fullPost.post.body)}
            </Text>

            <Heading as="h3" mt={5}>Comments</Heading>
            {fullPost.comments ?
                <CommentsList comments={fullPost.comments} />
                :
                <Text>There are no comments to this post</Text>
            }
            
        </>
    )
}