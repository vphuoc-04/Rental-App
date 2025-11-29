import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

interface CustomSheetProps {
    title?: string,
    description?: string,
    children?: React.ReactNode,
    isSheetOpen: boolean,
    closeSheet: () => void,
    side?: "top" | "right" | "bottom" | "left",
    showHeader?: boolean,
    className?: string,
}

const CustomSheet = ({
    title, 
    description, 
    children, 
    isSheetOpen, 
    closeSheet,
    side,
    showHeader = true,
    className,
} : CustomSheetProps ) => {
    return (
        <Sheet open={isSheetOpen} onOpenChange={closeSheet}>
            <SheetContent 
                className={`bg-[var(--color-background)] border-[var(--color-border)] text-[var(--color-icon)] ${className}`}
                side={side}
            >
                {showHeader && (title || description) && (
                    <SheetHeader>
                        {title && <SheetTitle className="text-[var(--color-text-primary)]">{title}</SheetTitle>}
                        {description && (
                            <SheetDescription className="text-[var(--color-text-secondary)]">
                                {description}
                            </SheetDescription>
                        )}
                    </SheetHeader>
                )}
                {children}
            </SheetContent>
        </Sheet>
    )
}

export default CustomSheet