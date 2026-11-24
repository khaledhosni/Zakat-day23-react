import React from 'react'
import { useLocation } from 'react-router';

export default function ProductDetails() {

    const location = useLocation();
    const product = location.state?.product;
  return (
    <div>ProductDetails

        Product: {product?.title}
        Description: {product?.description}
        Price: {product?.price}
        Rating: {product?.rating}
        Stock: {product?.stock}
        Availability: {product?.availabilityStatus}
        Reviews: {product?.reviews.map((review, index) => (
            <div key={index}>
                Rating: {review.rating}, Comment: {review.comment}
            </div>
        ))}
        <img src={product?.thumbnail} alt={product?.title} />
    </div>
  )
}
