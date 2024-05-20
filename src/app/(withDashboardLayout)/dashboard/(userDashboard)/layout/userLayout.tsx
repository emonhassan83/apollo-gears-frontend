import { NavbarWrapper } from "@/app/(withDashboardLayout)/components/dashboardNavbar/dashboardNavbar";
import { UserSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/userSidebar";

//* user custom layout
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row-reverse gap-2">
      <NavbarWrapper>{children}</NavbarWrapper>
      <UserSidebarWrapper />
    </div>
  );
}
