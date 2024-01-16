import { getData } from "@/services/products";
import Image from "next/image";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const products = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`
  );
  return (
    <div className="w-1/2 container mx-auto my-10">
      <div className="w-fit mx-auto border border-gray-700">
        <Image
          src={products.data.image}
          alt="gambar"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6 text-black font-bold">
          <h3>{products.data.name}</h3>
          <p>Price : ${products.data.price}</p>
        </div>
      </div>
    </div>
  );
}
