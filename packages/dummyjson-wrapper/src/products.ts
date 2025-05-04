import {
  UseQueryResult,
  UseSuspenseQueryResult,
  keepPreviousData,
  useQuery,
  useSuspenseQuery,
} from "@packages/tanstack-query";
import api from "@packages/tanstack-query/src/api";
import axios from "axios";

interface Dimensions {
  height: number;
  width: number;
  length: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: string;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  thumbnail: string;
  images: string[];
}

interface ProductResponseError {
  message: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

type Order = "asc" | "desc";

interface ProductQuery {
  limit?: number;
  skip?: number;
  sortBy?: keyof Product;
  order?: Order;
}

const fetchAllProducts = async (query?: ProductQuery): Promise<ProductsResponse> => {
  const response = await api.get<ProductsResponse>("https://dummyjson.com/products", { params: query });
  return response.data;
};

export const useGetAllProducts = (query?: ProductQuery): UseSuspenseQueryResult<ProductsResponse, Error> => {
  return useSuspenseQuery({
    queryKey: ["products", query],
    queryFn: () => fetchAllProducts(query),
  });
};

const fetchProductById = async (id: number): Promise<Product | ProductResponseError> => {
  try {
    const response = await api.get<Product>(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    return { message: "Product not found" };
  }
};

export const useGetProductById = (id: number): UseSuspenseQueryResult<Product, Error> => {
  return useSuspenseQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
};
