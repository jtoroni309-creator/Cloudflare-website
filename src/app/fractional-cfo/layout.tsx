import type { Metadata } from "next";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  title: pageMetadata.cfo.title,
  description: pageMetadata.cfo.description,
  openGraph: { title: pageMetadata.cfo.title, description: pageMetadata.cfo.description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
