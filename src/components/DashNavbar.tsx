import { ChevronDown, Menu } from "lucide-react";
import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";

const DashNavbar = () => {
  const { toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center gap-2 p-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="hover:bg-gray-100 rounded-md cursor-pointer"
      >
        <Menu className="size-5" />
      </Button>

      <div className="flex items-center gap-3">
        <p className="text-muted-foreground text-sm hidden md:block">
          Monitor your business analytics and statistics
        </p>

        <DropdownMenu onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <div className="font-medium flex items-center justify-center gap-2.5 cursor-pointer">
              <span className="w-8 h-8 bg-amber-300 p-2 rounded-full flex justify-center items-center text-white font-semibold">
                A
              </span>
              <div className="flex items-center items-center ">
                <div>
                  <p>Super Admin</p>
                  <p className="text-muted-foreground text-xs">
                    Restaurant Administrator
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="flex flex-col  items-center "
                >
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Button>
              </div>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <p className="text-xs text-muted-foreground pl-2">ali@gmail.com</p>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Setting</DropdownMenuItem>
            <DropdownMenuItem>Change Password</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DashNavbar;
