import React, {useState} from 'react';

const BlogContext = React.createContext(undefined);

export const BlogProvider = ({children}) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    console.log('addBlogPost');
    setBlogPosts([
      ...blogPosts,
      {title: `Blog Post #${blogPosts.length + 1}`},
    ]);
  };

  return (
      <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
      </BlogContext.Provider>
  );
};

export default BlogContext;
