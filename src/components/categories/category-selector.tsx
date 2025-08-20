import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface CategoryProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: CategoryProps) => {
  return (
    <div className="flex items-center justify-center rounded-2xl border bg-stone-800 p-5">
      <div className="grid w-full grid-cols-2 gap-3">
        {categories.map((category) => (
          <Button className="cursor-pointer rounded-full" key={category.id}>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
