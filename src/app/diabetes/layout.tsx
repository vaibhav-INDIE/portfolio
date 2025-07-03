// app/diabetes/layout.tsx
import { ReactNode } from 'react';
import Navigation from "@/components/Navigation";
export default function DiabetesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}