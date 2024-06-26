import api from "../services/api";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/product.context";
import toast from "react-hot-toast";
import StarRatings from "react-star-ratings";
import { useParams } from "react-router-dom";

function ReviewForm() {
  const [review, setReview] = useState({ title: "", rating: 0, review: "" });
  const { productId } = useParams();
  const { getAllProducts } = useContext(ProductContext);
  const handleChange = (e) => {
    setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/review/" + productId, review);

      if (response.status === 200 || response.status === 201) {
        toast.success("Your review submitted sucessfully");
        getAllProducts();
        setReview({ title: "", rating: 0, review: "" });
      }
    } catch (error) {
      console.log(error);
      toast.error("error creating review");
    }
  };

  useEffect(() => {
    console.log(review);
  }, [review]);

  return (
    <form className="font-sophisto max-w-md px-5" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        {" "}
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={review.title}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
        />
      </div>
      <div>
        {" "}
        <label htmlFor="review">Review:</label>
        <input
          type="text"
          name="review"
          onChange={handleChange}
          value={review.review}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <StarRatings
          numberOfStars={5}
          changeRating={(rating) =>
            setReview((prev) => ({ ...prev, rating: rating }))
          }
          name="rating"
          rating={review.rating}
          isAggregateRating={true}
          starRatedColor="#888888"
          starHoverColor="#eab308"
          className="mt-10 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
        />
      </div>
      <button
        type="submit"
        className="mt-10 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-yellow-400 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-yellow-400"
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;
