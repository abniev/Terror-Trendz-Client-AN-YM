import { Link } from "react-router-dom";

function ProductCard({
  name,
  description,
  price,
  quantity,
  reviews,
  image,
  _id,
}) {
  return (
    <div className="font-sophisto max-w-sm bg-gray-900 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={image} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-50 dark:text-white">
          {name}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
          ${price}
        </h5>

        <Link
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border border-white rounded-lg hover:bg-yellow-400 hover:text-black focus:ring-4 focus:outline-gray-500 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          to={`/product/${_id}`}
        >
          See Details
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
