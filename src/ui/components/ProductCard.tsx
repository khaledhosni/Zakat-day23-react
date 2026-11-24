import { useNavigate } from "react-router";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  availabilityStatus: string;
  reviews: { rating: number; comment: string }[];
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }) {
   
    const goto= useNavigate();
 
    return (
    <div className="w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl">

      {/* Product Image */}
      <div className="relative bg-gray-50 p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 w-full object-contain"
        />

        <span className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
          {product.discountPercentage}% OFF
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">

        <p className="text-sm text-gray-500">
          {product.brand} · {product.category}
        </p>

        <h2 className="mt-2 text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        {/* Rating */}
        <p className="mt-3 text-sm text-yellow-600">
          ★ {product.rating}
          <span className="ml-2 text-gray-400">
            ({product.reviews.length} reviews)
          </span>
        </p>

        {/* Price and Stock */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>

          <span className="text-sm text-green-600">
            {product.availabilityStatus}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          disabled={product.stock === 0}
          className="mt-5 w-full cursor-pointer rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          onClick={() => {

                goto(`/productdetails`, { state: { product: product } });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
