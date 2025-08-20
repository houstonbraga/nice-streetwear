import { desc } from "drizzle-orm";
import Image from "next/image";

import BrandsList from "@/components/brands/brands-list";
import CategorySelector from "@/components/categories/category-selector";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ProductsList from "@/components/common/products-list";
import { db } from "@/db";
import { categoryTable } from "@/db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newsProducts = await db.query.productTable.findMany({
    orderBy: [desc(categoryTable.createdAt)],
    limit: 10,
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center space-y-6">
        <div className="px-5">
          <Image
            src="/banner1.png"
            alt="banner1"
            width={0}
            height={0}
            sizes="100vh"
            className="h-full w-full"
          />
        </div>

        <BrandsList />

        <ProductsList products={products} title="Mais vendidos" />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image
            src="/banner2.png"
            alt="banner1"
            width={0}
            height={0}
            sizes="100vh"
            className="h-full w-full"
          />
        </div>

        <ProductsList products={newsProducts} title="Novos Produtos" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
