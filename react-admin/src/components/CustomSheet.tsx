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
                className={className}
                side={side}
                style={{
                    color: 'var(--sheet-close-icon-color)'
                } as React.CSSProperties}
            >
                {showHeader && (title || description) && (
                    <SheetHeader>
                        {title && <SheetTitle>{title}</SheetTitle>}
                        {description && (
                            <SheetDescription>
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