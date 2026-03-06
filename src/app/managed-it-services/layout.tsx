import type { Metadata } from "next";
import { pageMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  title: pageMetadata.msp.title,
  description: pageMetadata.msp.description,
  openGraph: { title: pageMetadata.msp.title, description: pageMetadata.msp.description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
