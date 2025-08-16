import Image from "next/image";

interface BrandProps {
  name: string;
  img: string;
}

const Brand = ({ img, name }: BrandProps) => {
  return (
    <div className="flex h-20 w-20 items-center justify-center">
      <Image
        src={img}
        alt={name}
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  );
};

export default Brand;
