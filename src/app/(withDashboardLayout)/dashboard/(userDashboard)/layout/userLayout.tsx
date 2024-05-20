import { UserSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/userSidebar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* <NavbarWrapper>{children}</NavbarWrapper> */}
      <UserSidebarWrapper/>
    </div>
  );
}