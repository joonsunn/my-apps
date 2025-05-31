import { Button } from "@/components/ui/button";
import { useGetAllProducts } from "@packages/dummyjson-wrapper";
import { useState } from "react";

function Products() {
  const [page, setPage] = useState(0);
  const { data, isLoading, isFetching } = useGetAllProducts({ limit: 5, skip: 5 * page });

  return (
    <div>
      <div>
        <div>
          <Button
            onClick={() => {
              if (page > 0) {
                setPage(page - 1);
              }
            }}
          >
            prev
          </Button>
          <span>page: {page}</span>
          <Button onClick={() => setPage(page + 1)}>next</Button>
        </div>
        {(isLoading || isFetching) && <span>Loading...</span>}
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Products;
