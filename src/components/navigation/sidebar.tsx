"use client";

import { cn } from "@/lib/utils";
import { Home, Plus, Settings2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const routes = [
    { icon: Home, href: "/", label: "Home" },
    { icon: Plus, href: "/companion/new", label: "Create" },
    { icon: Settings2, href: "/settings", label: "Settings" },
  ];
  const router = useRouter();
  const onNavigate = (url: string) => {
    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href)}
              key={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathName === route.href && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
