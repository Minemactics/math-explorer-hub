import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  component: ProductsIndexRedirect,
});

function ProductsIndexRedirect() {
  return <Navigate to="/products/lite" />;
}
