import Modal from "@/app/component/core/Modal";
import { getData } from "@/services/products";
import Image from "next/image";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const products = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    <Modal>
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
    </Modal>
  );
}
