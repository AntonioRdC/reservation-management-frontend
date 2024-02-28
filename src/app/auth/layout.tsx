export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex h-full flex-col items-center justify-center
  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-400 to-rose-800"
    >
      {children}
    </div>
  );
}
