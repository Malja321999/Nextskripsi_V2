export default function Layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="p-5 overflow-x-scroll h-screen">
      <div>{children}</div>
      <div className="flex justify-center items-center mt-5">
        {products}
        {analytics}
      </div>
      {payments}
    </div>
  );
}
