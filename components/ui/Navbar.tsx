"use client";
import React, { useState } from "react";
import { FloatingNav } from "@/components/ui/auth/floating-navbar";
import { IconHome, IconDeviceImac, IconChecklist } from "@tabler/icons-react";
import LogoComponent from "./LogoComponent";
import Link from "next/link";
import { useTheme } from "next-themes";

export function FloatingNavDemo() {

  const{theme,setTheme} = useTheme();
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/aboutus",
      icon: (
        <IconChecklist className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Influencer",
      link: "/manager/dashboard",
      icon: (
        <IconDeviceImac className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Brand",
      link: "/dashboard",
      icon: (
        <IconDeviceImac className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="flex w-full justify-end">
      <Link href="/" passHref>
        <LogoComponent isDarkMode={theme==="dark"} />
      </Link>
      <FloatingNav
        isDarkMode={theme==="dark"}
        setIsDarkMode={()=>setTheme(theme==="dark"?"light":"dark")}
        navItems={navItems}
      />
    </div>
  );
}
