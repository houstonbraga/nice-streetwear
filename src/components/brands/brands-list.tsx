import BRANDS from "@/constants/brands";

import Brand from "./brand";

const BrandsList = () => {
  return (
    <>
      <div className="flex flex-col justify-center space-y-6">
        <h3 className="px-5 text-lg font-semibold">Marcas parceiras</h3>
        <div className="relative w-full">
          <div className="px-5 flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {BRANDS.map((brand) => (
              <Brand key={brand.id} img={brand.img} name={brand.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsList;
