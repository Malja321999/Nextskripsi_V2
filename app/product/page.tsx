import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;

  const products = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product`
  );

  return (
    <div className="grid grid-cols-4 gap-4 h-screen p-20 rounded-md mx-auto w-screen bg-teal-500 overflow-y-auto place-items-center">
      {/*   <h1 className="bg-white p-2 rounded-md w-[60vh] text-center text-teal-500 font-bold text-4xl">
        {params.slug ? "Detail Product Page" : " Product Page"}
      </h1> */}
      {products.data.length > 0 &&
        products.data.map((products: any) => (
          <Link
            href={`/product/detail/${products.id}`}
            key={products.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-auto h-fit"
          >
            <Image
              width={500}
              height={500}
              className="p-8 rounded-t-lg object-cover h-96 w-full"
              src={products.image}
              alt="product image"
              priority
            />

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                {products.name}
              </h5>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  Rp. {products.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
