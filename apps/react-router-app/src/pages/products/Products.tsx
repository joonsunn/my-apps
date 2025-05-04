import { useGetAllProducts } from "@packages/dummyjson-wrapper";
import { useState } from "react";

function Products() {
  const [page, setPage] = useState(0);
  const { data, isLoading, isFetching } = useGetAllProducts({ limit: 5, skip: 5 * page });

  return (
    <div>
      <div>
        <div>
          <button onClick={() => setPage(page - 1)}>prev</button>
          <span>page: {page}</span>
          <button onClick={() => setPage(page + 1)}>next</button>
        </div>
        {(isLoading || isFetching) && <span>Loading...</span>}
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Products;
