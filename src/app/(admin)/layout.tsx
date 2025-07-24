'use client'
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isRegisterPage = pathname === "/register" || pathname.includes("/(auth)/register");
  const isLoginPage = pathname === "/login" || pathname.includes("/(auth)/login");

  return (
    <SidebarProvider>
      {!isRegisterPage && !isLoginPage && <AppSidebar />}
      <main
        className={`h-screen mt-5 w-full ${
          isRegisterPage || isLoginPage ? "" : "grid grid-cols-[auto_1fr]"
        }`}
      >
        {!isRegisterPage && !isLoginPage && <SidebarTrigger />}
        {children}
      </main>
    </SidebarProvider>
  );
}
