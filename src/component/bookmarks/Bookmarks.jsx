import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-slate-200">
            <div className="p-5 bg-purple-300 mb-5 rounded-xl">
                <p className="text-purple-700 font-bold text-2xl">Reading time: {readingTime}</p>
            </div>
            <h1 className="text-3xl font-medium mb-3">Bookmarks: {bookmarks.length}</h1>
            <div>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.PropTypes = {
    bookmarks: PropTypes.array
}


export default Bookmarks;