import type { Metadata } from "next";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  title: pageMetadata.partnerships.title,
  description: pageMetadata.partnerships.description,
  openGraph: { title: pageMetadata.partnerships.title, description: pageMetadata.partnerships.description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
