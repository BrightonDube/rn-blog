import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    const [blogPosts, setblogPosts] = useState([{title: "How to do it"}, {title: "How not to do it"}]);
    const createBlogPosts = () => {
        setblogPosts([...blogPosts, { title: `This is my ${blogPosts.length + 1}`}])
    }

    return (<BlogContext.Provider value={{data: blogPosts, createBlogPosts}}>
        {children}
    </BlogContext.Provider>);
};
export default BlogContext;