import React from "react";
import type { Route } from "./+types/product";
import { Card } from "../components/ui/card";

export async function loader({ params }: Route.LoaderArgs) {
  const { name } = params;
  return { name: name.toUpperCase() };
}

const ProductPage = ({ loaderData }: Route.ComponentProps) => {
  const { name } = loaderData;
  return (
    <Card className="p-6 max-w-lg mx-auto mt-10 shadow-lg">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Product Information
      </h1>
      <p className="text-lg">
        Product Name: <span className="font-medium text-blue-600">{name}</span>
      </p>
    </Card>
  );
};

export default ProductPage;
