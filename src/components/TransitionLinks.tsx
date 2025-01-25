"use client";
import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinksProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLinks({
  children,
  href,
  className,
  ...props
}: TransitionLinksProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(500);
    console.log("Hello");
    router.push(href);
    await sleep(500);
    body?.classList.remove("page-transition");
  };
  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
}
