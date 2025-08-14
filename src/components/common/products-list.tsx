"use client";

import { productTable, productVariantTable } from "@/db/schema";

import ProductItem from "./product-item";

interface ProductsListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductsList = ({ title, products }: ProductsListProps) => {
  return (
    <div className="flex flex-col justify-start space-y-6">
      <h3 className="px-5 text-lg font-semibold">{title}</h3>
      <div className="flex items-center px-5 overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden w-full">
        {products.map((product) => (
          <ProductItem key={product.id} product={product}  />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
