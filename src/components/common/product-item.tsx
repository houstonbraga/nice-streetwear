"use client";

import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

interface ProductItemProps {
  product: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  });
}

const ProductItem = ({ product }: ProductItemProps) => {
  const firstVariant = product.variants[0];
  return (
    <Link href="/" className="flex max-w-[150px] flex-col gap-6">
      <Image
        src={firstVariant.imageUrl}
        alt={firstVariant.name}
        width={150}
        height={150}
        className="rounded-3xl"
      />
      <div className="flex flex-col">
        <p className="truncate text-sm font-semibold">{product.name}</p>
        <p className="truncate text-xs font-medium text-gray-500">
          {product.description}
        </p>
        <p className="text-sm font-semibold mt-2 mb-4">
          {formatCentsToBRL(firstVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
