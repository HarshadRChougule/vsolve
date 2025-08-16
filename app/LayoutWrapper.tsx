"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Don't show navigation on the landing page and invite-us page
  const showNavigation = pathname !== "/" && pathname !== "/invite-us";

  return (
    <>
      {/* Conditional navigation - hidden on landing page */}
      {showNavigation && <Navigation />}
      <main className="flex-1">{children}</main>
    </>
  );
}
