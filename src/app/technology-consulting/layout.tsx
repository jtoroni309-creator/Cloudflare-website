import type { Metadata } from "next";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  title: pageMetadata.tech.title,
  description: pageMetadata.tech.description,
  openGraph: { title: pageMetadata.tech.title, description: pageMetadata.tech.description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
