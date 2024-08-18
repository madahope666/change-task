import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import Head from "next/head";
import { SkipNavContent, SkipNavLink } from '@chakra-ui/react';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Head>
                <title>Change Task</title>
                <meta name="description" content="Mock NextJS application using JSONPlaceholder API" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SkipNavLink _focus={{clip: 'auto', width: 'auto', height: 'auto', left: '50%', top: '25%', translate: '-50%'}}>Skip to content</SkipNavLink>
            <GlobalHeader />
            <main>
                <SkipNavContent />
                {children}</main>
            <GlobalFooter />
        </>
    );
}