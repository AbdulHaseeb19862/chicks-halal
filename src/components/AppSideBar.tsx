import { Link, NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  Contact,
  LayoutDashboard,
  ListOrdered,
  Package,
  Settings,
  ShoppingCart,
  Star,
  Tags,
  User,
  Users,
} from "lucide-react";

const items = [
  {
    title: "Overview",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Customers",
    url: "customers",
    icon: Users,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: Tags,
  },
  {
    title: "Products",
    url: "/products",
    icon: Package,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Reviews",
    url: "#",
    icon: Star,
  },
  {
    title: "Order Catering",
    url: "/order-catering",
    icon: ListOrdered,
  },
  {
    title: "Contacts",
    url: "/list-oredered",
    icon: Contact,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const AppSideBar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="group ">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-3 font-bold text-yellow-400 hover:text-yellow-300 "
              >
                {/* SHORT NAME (only when collapsed) */}
                <span className="hidden group-data-[collapsible=icon]:block text-md  ">
                  CH
                </span>

                {/* FULL NAME (only when open) */}
                <span className="block group-data-[collapsible=icon]:hidden text-xl ">
                  Chicks Halal
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 ">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="group"
                  >
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-blue-600/20 ${
                          isActive
                            ? "bg-blue-600/30 font-semibold text-blue-700"
                            : ""
                        }`
                      }
                    >
                      <item.icon className="size-5 shrink-0" />

                      {/* TEXT */}
                      <span className="truncate group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSideBar;
