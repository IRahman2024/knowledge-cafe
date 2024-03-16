import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {Title} = bookmark;

    return (
        <div className='bg-white p-5 m-5 rounded-xl'>
            <h1 className='text-xl font-medium'>{Title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array
}

export default Bookmark;