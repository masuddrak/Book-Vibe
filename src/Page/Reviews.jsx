import { useLoaderData } from "react-router-dom";
import ReviewDetails from "../components/ReviewDetails";


const Reviews = () => {
    const reviews=useLoaderData()
    return (
        <div className="md:grid grid-cols-2 gap-10 mt-10 mx-3 md:mx-0">
            
            {
                reviews.map(review=><ReviewDetails key={review.bookId} review={review}></ReviewDetails>)
            }
        </div>
    );
};

export default Reviews;