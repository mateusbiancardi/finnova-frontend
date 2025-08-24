"use client";

import { CookiesProvider } from "react-cookie";

export default function CookiesWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
