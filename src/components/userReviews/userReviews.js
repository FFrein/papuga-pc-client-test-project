import './styles.css';

function UserReviews(props){

    const {Review} = props;

    return(
        <div className='User_Review'>
            <h5>{Review._id}</h5>
            <p>Author: {Review.Author}</p>
            <p>PC: {Review.PC}</p>
            <p>Text: {Review.Text.slice(0, 25)}{Review.Text.length > 25 ? "..." : null}</p>
        </div>
    )
}
export default UserReviews;