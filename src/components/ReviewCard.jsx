import toast from "react-hot-toast";
import api from "../services/api";
import { useContext } from "react";
import { ProductContext } from "../context/product.context";

function ReviewCard({ review, user }) {
  const { getAllProducts } = useContext(ProductContext);
  const handleDelete = async (reviewId) => {
    try {
      const check = confirm("Do you really want to delete this review?");
      if (check) {
        const response = await api.delete("/review/" + reviewId);

        if (response.status === 200) {
          toast.success("Review was succesfully deleted");
          getAllProducts();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article class="font-sophisto p-6 text-base bg-white rounded-lg pt-5 p-5 dark:bg-stone-700 w-[50vw]">
      <footer class="flex justify-between items-center mb-2">
        <div class="flex items-center">
          <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              class="mr-2 w-6 h-6 rounded-full"
              src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1719412371/profile-default-icon-2048x2045-u3j7s5nj_vswa1l.png"
              alt="user"
            />
            {review.creator.username} {"⭐".repeat(review.rating)}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {new Date(review.createdAt).toLocaleString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>
      </footer>
      <p class="text-gray-500 dark:text-gray-300">{review.review}</p>
      {user && user._id === review.creator._id && (
        <button onClick={() => handleDelete(review._id)}>🗑️</button>
      )}
    </article>
  );
}

export default ReviewCard;
