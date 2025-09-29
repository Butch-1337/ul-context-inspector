import { Select as SelectPrimitive } from "@base-ui-components/react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      render={
        <div
          className={cn(
            // Button base styles
            "focus-visible:uci-ring-ring aria-invalid:uci-ring-destructive/20 dark:aria-invalid:uci-ring-destructive/40 aria-invalid:uci-border-destructive theme-default:active:uci-scale-[0.99] uci-relative uci-box-border uci-inline-flex uci-shrink-0 uci-items-center uci-justify-center uci-gap-2 uci-overflow-hidden uci-text-sm uci-font-medium uci-whitespace-nowrap uci-transition-all uci-duration-150 uci-ease-in-out uci-outline-none focus-visible:uci-ring-4 disabled:uci-pointer-events-none disabled:uci-opacity-50 [&_svg]:uci-pointer-events-none [&_svg]:uci-shrink-0 [&_svg:not([class*='size-'])]:uci-size-4",
            // Button outline variant
            "dark:uci-bg-muted/50 hover:uci-text-accent-foreground uci-shadow-button-outlined-resting hover:uci-shadow-button-outlined-hover hover:uci-border-accent uci-bg-background hover:uci-bg-muted uci-text-primary uci-border-primary/35 theme-default:before:uci-from-primary/5 theme-default:before:uci-to-primary/0 theme-default:before:uci-absolute theme-default:before:uci-top-0 theme-default:before:uci-left-0 theme-default:before:uci-block theme-default:before:uci-h-full theme-default:before:uci-w-full theme-default:before:uci-bg-gradient-to-t theme-default:before:uci-content-[''] uci-border",
            // Button default size
            "uci-h-10 uci-rounded-2xl uci-px-4 uci-py-2.5 has-[>svg]:uci-px-3",
            // Select-specific styles
            "uci-border-border/25 data-[placeholder]:uci-text-primary uci-text-input-foreground uci-shadow-input-resting hover:uci-shadow-input-hover hover:uci-border-border/0 focus-within:uci-outline-primary focus-within:uci-shadow-input-hover uci-bg-input disabled:uci-bg-muted data-[state=open]:focus-within:uci-outline-primary data-[state=open]:focus-within:uci-shadow-input-hover [&_svg:not([class*='text-'])]:uci-text-primary focus-visible:uci-border-ring focus-visible:uci-ring-ring/50 uci-flex uci-w-full uci-justify-between uci-px-3 uci-ring-4 uci-ring-transparent uci-outline-4 disabled:uci-cursor-not-allowed *:data-[slot=select-value]:uci-line-clamp-1 *:data-[slot=select-value]:uci-flex *:data-[slot=select-value]:uci-items-center *:data-[slot=select-value]:uci-gap-2",
            className
          )}
        >
          {children}
          <SelectPrimitive.Icon
            render={<ChevronDownIcon className={cn("uci-text-primary uci-size-4 uci-transition-transform uci-duration-200")} />}
          />
        </div>
      }
      {...props}
    />
  );
}
function SelectContent({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Positioner>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner alignItemWithTrigger={false} side="bottom" sideOffset={8} align="start" {...props}>
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "uci-bg-popover uci-text-popover-foreground uci-shadow-bevel-xl data-[state=open]:uci-animate-in data-[state=closed]:uci-animate-out data-[state=closed]:uci-fade-out-0 data-[state=open]:uci-fade-in-0 data-[state=closed]:uci-zoom-out-95 data-[state=open]:uci-zoom-in-95 uci-min-w-[var(--anchor-width)] uci-overflow-hidden uci-rounded-3xl uci-p-1 uci-ring-0 uci-duration-300 uci-ease-in-out uci-outline-none focus:uci-outline-none",
            className
          )}
        >
          <SelectScrollUpButton />
          {children}
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.GroupLabel>) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("uci-text-muted-foreground uci-px-2 uci-py-1.5 uci-text-xs", className)}
      {...props}
    />
  );
}

function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "hover:uci-bg-muted/50 focus:uci-bg-muted data-[highlighted]:uci-bg-muted/75 data-[state=checked]:uci-bg-muted uci-relative uci-flex uci-w-full uci-items-center uci-justify-between uci-rounded-2xl uci-px-2 uci-py-1.5 uci-text-sm uci-outline-hidden uci-select-none",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="uci-text-primary uci-size-4" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("uci-bg-border uci-pointer-events-none uci-mx-1 uci-my-1 uci-h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn("uci-flex uci-cursor-default uci-items-center uci-justify-center uci-py-1", className)}
      {...props}
    >
      <ChevronUpIcon className="uci-size-4" />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn("uci-flex uci-cursor-default uci-items-center uci-justify-center uci-py-1", className)}
      {...props}
    >
      <ChevronDownIcon className="uci-size-4" />
    </SelectPrimitive.ScrollDownArrow>
  );
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
