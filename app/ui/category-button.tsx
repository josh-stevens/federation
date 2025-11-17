'use client';

import { redirect, usePathname } from "next/navigation";
import { ReactNode } from "react";

export function CategoryButton({
  assignment,
  children,
  slug
}: { assignment: string, children: ReactNode, slug: string }) {
  const beep3 = new Audio("/beep3.mp3");

  function navigate(officer: string) {
    beep3.onended = () => {
      redirect(`/personnel/${assignment}/${officer}`)
    }
    beep3.play();
  }

  return (
    <button
      className="button-butterscotch"
      onClick={() => navigate(slug)}>
      {children}
    </button>
  );
}