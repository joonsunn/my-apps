import { useGetProductById } from "@packages/dummyjson-wrapper";
import { Suspense, useEffect, useReducer } from "react";
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
    <>
      <button onClick={handlePrev}>Prev.</button>
      <button onClick={handleNext}>Next</button>
      <Suspense fallback={<div>Loading...</div>}>
        <RenderProduct currentProductId={currentProductId} />
      </Suspense>
    </>
  );
}

function RenderProduct({ currentProductId }: { currentProductId: number }) {
  const { data: productData } = useGetProductById(Number(currentProductId));

  return <pre>{JSON.stringify(productData, null, 2)}</pre>;
}

export default Product;

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
