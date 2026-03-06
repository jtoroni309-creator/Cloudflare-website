import type { Metadata } from "next";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  openGraph: { title: pageMetadata.about.title, description: pageMetadata.about.description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
