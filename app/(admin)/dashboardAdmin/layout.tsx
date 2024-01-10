export default function Layout({
  children,
  product,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
}) {
  return (
    <div className="p-5 flex flex-col gap-10">
      <div>{children}</div>
      <div>{product}</div>
    </div>
  );
}
