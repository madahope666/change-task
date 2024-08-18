import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import PageMainHeading from "@/components/PageMainHeading";
import PostsList from '@/components/PostsList';
import { Post } from '@/lib/types';

export const getServerSideProps = (async (context) => {
    const pageSize: number = 10;
    const currentPage = Number(context.query.page) || 1;

    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_per_page=${pageSize}`);
    const posts: Post[] = await res.json();

    // Get total count of posts
    const headerTotalCount = res.headers.get('x-total-count');
    const totalPages: number = headerTotalCount ? Math.ceil(parseInt(headerTotalCount) / pageSize) : 0;
    
    // Pass data to the page via props
    return { props: { posts, currentPage, totalPages } }
}) satisfies GetServerSideProps<{ posts: Post[], currentPage: number, totalPages: number }>

const PostsPage = ({
    posts,
    currentPage,
    totalPages
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <PageMainHeading pageTitle="Posts Page" />
            <PostsList posts={posts} currentPage={currentPage} totalPages={totalPages} />
        </>
    )
}

export default PostsPage;