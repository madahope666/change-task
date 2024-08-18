import { createContext, useState, useEffect, useContext, ReactNode, useRef } from 'react';

interface AppContext {
    viewedPosts: number[];
    addViewedPost: (postId: number) => void;
    lastViewedPost: number;
}

const AppContext = createContext<AppContext>({} as AppContext);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [viewedPosts, setViewedPosts] = useState<number[]>([]);
    const [lastViewedPost, setLastViewedPost] = useState<number>(-1);

    // Flag for only triggering useEffect dependent on viewedPosts to run after initiating
    // This all feels like a very humpty dumpty solution
    const firstRun = useRef<boolean>(true);

    useEffect(() => {
        try {
            const storedViewedPosts = localStorage.getItem("viewedPosts");
            const lastViewedPost = localStorage.getItem("lastViewedPost");
            if (storedViewedPosts) {
                setViewedPosts(JSON.parse(storedViewedPosts));
            }
            if (lastViewedPost) {                
                setLastViewedPost(JSON.parse(lastViewedPost));
            }
        } catch (error) {
            console.error('Error fetching viewedPosts from localStorage:', error);
        }
    }, []);

    useEffect(() => {
        try {
            if(!firstRun.current) {
                localStorage.setItem("viewedPosts", JSON.stringify(viewedPosts));
                localStorage.setItem("lastViewedPost", JSON.stringify(lastViewedPost));
            }
        } catch (error) {
            console.error('Error storing viewedPosts to localStorage:', error);
        }
        firstRun.current = false;
    }, [viewedPosts]);

    const addViewedPost = (postId: number) => {
        // update viewedPosts if not already viewed
        if(!viewedPosts.includes(postId)) {
            setViewedPosts((prevState) => [...prevState, postId]);
        }
        // Set last viewed post
        setLastViewedPost(postId);
    };

    return (
        <AppContext.Provider value={{ viewedPosts, addViewedPost, lastViewedPost }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);