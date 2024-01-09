import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Nike Air Force 1 '07",
    price: 1729000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/c20afd60-b230-4815-bfd2-6768c875f6cd/air-force-1-07-shoes-0XGfD7.png",
  },
  {
    id: 2,
    title: "Nike Mercurial Superfly 9 Club",
    price: 808000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/84e398b2-a0c4-442d-a147-791c8f6f9728/mercurial-vapor-15-club-indoor-court-low-top-football-shoes-LRK5sN.png",
  },
  {
    id: 3,
    title: "Nike Zoom Vomero 5",
    price: 2489000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/h57nnxvlalzisonsvkbc/zoom-vomero-5-shoes-qZG4RJ.png",
  },
  {
    id: 4,
    title: "Nike Mercurial Superfly 9 Club",
    price: 808000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/84e398b2-a0c4-442d-a147-791c8f6f9728/mercurial-vapor-15-club-indoor-court-low-top-football-shoes-LRK5sN.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: "200",
        message: "success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: "404",
      message: "Not Found",
      data: {},
    });
  }
  return NextResponse.json({
    status: "200",
    message: "success",
    data,
  });
}
