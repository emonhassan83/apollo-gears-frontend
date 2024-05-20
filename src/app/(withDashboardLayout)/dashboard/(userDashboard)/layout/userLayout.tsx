import { SidebarWrapper } from "@/app/(withDashboardLayout)/sidebar/sidebar.styles";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* <NavbarWrapper>{children}</NavbarWrapper> */}
      <SidebarWrapper/>
    </div>
  );
}