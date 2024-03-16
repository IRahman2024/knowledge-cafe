import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div className="md:w-2/3">
            <h4 className="text-2xl">Blogs: {blogs.length}</h4>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmarks={handleAddToBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                    > 
                    </Blog>)
            }
        </div>
    );
};

export default Blogs;