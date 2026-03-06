import type { Metadata } from "next";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  openGraph: { title: pageMetadata.contact.title, description: pageMetadata.contact.description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
