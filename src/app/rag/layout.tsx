// app/RAG/layout.tsx
import { ReactNode } from 'react';
import Navigation from "@/components/Navigation";
export default function RagPage({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}