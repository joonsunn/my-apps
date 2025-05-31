import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Review, useGetProductById } from "@packages/dummyjson-wrapper";
import { Suspense, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router";

function Product() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();

  const [currentProductId, dispatch] = useReducer(productNavigationReducer, Number(productId));

  useEffect(() => {
    navigate(`/products/${currentProductId}`);
  }, [currentProductId, navigate, productId]);

  const handleNext = () => {
    dispatch({ type: ProductNavigation.NEXT });
  };

  const handlePrev = () => {
    if (currentProductId > 1) {
      dispatch({ type: ProductNavigation.PREV });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button onClick={handlePrev}>Prev.</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <RenderProduct currentProductId={currentProductId} />
      </Suspense>
    </div>
  );
}

function RenderProduct({ currentProductId }: { currentProductId: number }) {
  const { data: productData } = useGetProductById(Number(currentProductId));

  return (
    <div className={"flex flex-col gap-2"}>
      <div className={"flex flex-row gap-3 items-center"}>
        <span className={"font-extrabold align-middle"}>{productData.title}</span>
        <Chip variant="outlined" color="info">
          {productData.category}
        </Chip>
      </div>
      <span>Rating: {productData.rating}</span>
      <span>Price: ${productData.price}</span>
      <span>Description: {productData.description}</span>
      <span>Stock remaining: {productData.stock}</span>
      <Images images={productData.images} productTitle={productData.title} />
      <Reviews reviews={productData.reviews} />
      <pre>{JSON.stringify(productData, null, 2)}</pre>
    </div>
  );
}

export default Product;

function Images({ images, productTitle }: { images: string[]; productTitle: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span>Images:</span>
      <div className="flex gap-2 max-w-fit overflow-x-auto border-solid border-2 rounded-md p-2">
        {images.map((image) => (
          <ImageWithSkeleton key={image} src={image} alt={productTitle} />
        ))}
      </div>
    </div>
  );
}

function ImageWithSkeleton({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative max-w-xs min-w-[10rem] h-40 bg-gray-50 rounded-md overflow-hidden">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-500" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <span>Reviews:</span>
      <div className="flex flex-col gap-2">
        {reviews.map((review, index) => (
          <ReviewRenderer key={`${index}-${review.date}`} review={review} />
        ))}
      </div>
    </div>
  );
}

function ReviewRenderer({ review }: { review: Review }) {
  const { reviewerName, reviewerEmail, date } = review;

  const redactedName = reviewerName.slice(0, 3).padEnd(6, "*");
  const redactedEmail = reviewerEmail
    .split("@")
    .map((chunk) => chunk.slice(0, 3).padEnd(6, "*"))
    .join("@");

  const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const adjustedTime = dateTimeFormatter.format(new Date(date));

  return (
    <div className={"flex flex-col gap-1 border-2 border-solid rounded-md p-1"}>
      <span>Rating: {review.rating}</span>
      <span>{review.comment}</span>
      <span>{adjustedTime}</span>
      <span>
        {redactedName} ({redactedEmail})
      </span>
    </div>
  );
}

enum ProductNavigation {
  NEXT = "NEXT",
  PREV = "PREV",
}

const productNavigationReducer = (state: number, action: { type: ProductNavigation }) => {
  switch (action.type) {
    case ProductNavigation.NEXT:
      return state + 1;
    case ProductNavigation.PREV:
      return state - 1;
    default:
      return state;
  }
};
