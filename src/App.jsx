import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/Header'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookmarks = blog =>{
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    setReadingTime(readingTime+time);
    console.log('mark as read');
  }


  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
      </div>
      <div className='flex justify-between max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        {/* bookmaek ke patthano hochhe */}
        <Bookmarks bookmarks={bookmarks}
        readingTime = {readingTime}>
        </Bookmarks>
      </div>
    </div>
  )
}

export default App
