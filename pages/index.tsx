'use client'
import PageMainHeading from "@/components/PageMainHeading";
import { Link, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <PageMainHeading pageTitle="Home Page" />
      <Text textAlign={'center'}>Hello there. I am very simple home page in a small application displaying posts from the JSONPlaceholder API. There is not much else to do here, but to <Link href="/posts" textDecoration={'underline'} _hover={{fontWeight: '700'}}>go look at some posts</Link></Text>
    </>
  );
}

export default Home;