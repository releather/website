"use client";

import { SampleCartProvider } from "@/components/SampleCartProvider";
import SampleCartBar from "@/components/SampleCartBar";
import SampleCartOrderReturnHandler from "@/components/SampleCartOrderReturnHandler";

export default function SampleCartShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SampleCartProvider>
      <SampleCartOrderReturnHandler />
      {children}
      <SampleCartBar />
    </SampleCartProvider>
  );
}
