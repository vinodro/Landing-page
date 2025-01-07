export default function GridViewer({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
        {children}
    </div>
  );
}
