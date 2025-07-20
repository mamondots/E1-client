import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type PaginationNavProps = React.ComponentProps<"nav">;
export function Pagination({
  className,
  children,
  ...props
}: PaginationNavProps) {
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    >
      {children}
    </nav>
  );
}

type PaginationContentProps = React.ComponentProps<"ul">;
export function PaginationContent({
  className,
  children,
  ...props
}: PaginationContentProps) {
  return (
    <ul
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    >
      {children}
    </ul>
  );
}

type PaginationItemProps = React.ComponentProps<"li">;
export function PaginationItem({ children, ...props }: PaginationItemProps) {
  return <li {...props}>{children}</li>;
}

type PaginationLinkProps = {
  isActive?: boolean;
  size?: "icon" | "default" | "sm" | "lg";
} & React.ComponentProps<"a">;

export function PaginationLink({
  className,
  isActive,
  size = "icon",
  children,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function PaginationPrevious({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">{children || "Previous"}</span>
    </PaginationLink>
  );
}

export function PaginationNext({
  className,
  children,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">{children || "Next"}</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

type PaginationEllipsisProps = React.ComponentProps<"span">;
export function PaginationEllipsis({
  className,
  ...props
}: PaginationEllipsisProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}
