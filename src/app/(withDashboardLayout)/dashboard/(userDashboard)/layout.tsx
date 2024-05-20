import UserLayout from "./layout/userLayout";

//* user main layout
export default function userLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UserLayout>{children}</UserLayout>;
}
