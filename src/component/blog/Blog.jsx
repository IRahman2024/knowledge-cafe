import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';

// react buttons installing as component
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const { Title, Cover, Author_img, Reading_time, Author, Posted_date, Hashtags } = blog;

    return (
        <div className='mb-20 space-y-4'>
            <img className='max-w-80' src={Cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <img className='max-w-14 rounded-full my-2' src={Author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p className=''>{Posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <span>{Reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='txt-4xl'>Title: {Title}</h2>
            <p>
                {
                    Hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a> </span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(Reading_time)}
            className='text-purple-700 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;