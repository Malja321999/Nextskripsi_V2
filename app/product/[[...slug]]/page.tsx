import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  params: {
    slug: string[];
  };
};

async function getData() {
  /* const res = await fetch("https://fakestoreapi.com/products",{
    cache: "force-cache",
  }); */
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "force-cache",
    next: {
      tags: ["products"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async (props: ProductPageProps) => {
  const { params } = props;
  const products = await getData();
  console.log(products);
  return (
    <div className="grid grid-cols-4 gap-4 mt-[6rem] mb-5 p-2 rounded-md mx-auto h-[85%] w-screen bg-teal-500 overflow-y-scroll place-items-center">
      {/*   <h1 className="bg-white p-2 rounded-md w-[60vh] text-center text-teal-500 font-bold text-4xl">
        {params.slug ? "Detail Product Page" : " Product Page"}
      </h1> */}
      {products.data.length > 0 &&
        products.data.map((products: any) => (
          <div
            key={products.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
          >
            <Link href="#">
              <Image
                width={500}
                height={500}
                className="p-8 rounded-t-lg object-cover h-96 w-full"
                src={products.image}
                alt="product image"
              />
            </Link>
            <div className="px-5 pb-5">
              <Link href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {products.title}
                </h5>
              </Link>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  Rp. {products.price}
                </span>
                <Link
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        ))}

      {params.slug && (
        <div className="bg-teal-500 p-2 rounded-md w-[60vh] my-2 font-extrabold text-2xl">
          <p>
            Category :<span className="font-normal"> {params.slug[0]}</span>
          </p>
          <p>
            Product :<span className="font-normal"> {params.slug[1]}</span>
          </p>
          <p>
            ID :<span className="font-normal"> {params.slug[2]}</span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default page;
