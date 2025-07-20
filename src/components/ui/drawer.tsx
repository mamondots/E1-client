"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";

type DrawerRootProps = React.ComponentProps<typeof DrawerPrimitive.Root>;
export function Drawer({ children, ...props }: DrawerRootProps) {
  return <DrawerPrimitive.Root {...props}>{children}</DrawerPrimitive.Root>;
}

type DrawerTriggerProps = React.ComponentProps<typeof DrawerPrimitive.Trigger>;
export function DrawerTrigger({ children, ...props }: DrawerTriggerProps) {
  return (
    <DrawerPrimitive.Trigger {...props}>{children}</DrawerPrimitive.Trigger>
  );
}

type DrawerPortalProps = React.ComponentProps<typeof DrawerPrimitive.Portal>;
export function DrawerPortal({ children, ...props }: DrawerPortalProps) {
  return <DrawerPrimitive.Portal {...props}>{children}</DrawerPrimitive.Portal>;
}

type DrawerCloseProps = React.ComponentProps<typeof DrawerPrimitive.Close>;
export function DrawerClose({ children, ...props }: DrawerCloseProps) {
  return <DrawerPrimitive.Close {...props}>{children}</DrawerPrimitive.Close>;
}

type DrawerOverlayProps = React.ComponentProps<typeof DrawerPrimitive.Overlay>;
export function DrawerOverlay({ className, ...props }: DrawerOverlayProps) {
  return (
    <DrawerPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50 transition-opacity",
        className
      )}
      {...props}
    />
  );
}

type DrawerContentProps = React.ComponentProps<typeof DrawerPrimitive.Content>;
export function DrawerContent({
  className,
  children,
  ...props
}: DrawerContentProps) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={cn(
          "fixed z-50 flex flex-col bg-background",
          "data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:rounded-b-lg",
          "data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:rounded-t-lg",
          "data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:w-3/4 sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:w-3/4 sm:max-w-sm",
          className
        )}
        {...props}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

type DrawerHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-4 gap-2 text-center md:text-left",
        className
      )}
      {...props}
    />
  );
}

type DrawerFooterProps = React.HTMLAttributes<HTMLDivElement>;
export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

type DrawerTitleProps = React.ComponentProps<typeof DrawerPrimitive.Title>;
export function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  return (
    <DrawerPrimitive.Title
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

type DrawerDescriptionProps = React.ComponentProps<
  typeof DrawerPrimitive.Description
>;
export function DrawerDescription({
  className,
  ...props
}: DrawerDescriptionProps) {
  return (
    <DrawerPrimitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}
