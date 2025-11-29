import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CustomCardProps {
    title: string,
    description: string,
    className?: string,
    children?: React.ReactNode,
    footer?: React.ReactNode, 
    action?: React.ReactNode  
}

const CustomCard = ({title, description, className, children, footer, action} : CustomCardProps) => {
    return (
        <Card className={`bg-[var(--color-card-background)] border-[var(--color-border)] ${className}`}>
            <CardHeader>
                <CardTitle className="text-[var(--color-text-primary)]">{title}</CardTitle>
                <CardDescription className="text-[var(--color-text-secondary)]">{description}</CardDescription>
                {action && <CardAction>{action}</CardAction>}
            </CardHeader>
            <CardContent className="text-[var(--color-text-primary)]">
                {children}
            </CardContent>
            {footer && (
                <CardFooter className="flex-col gap-2 text-[var(--color-text-secondary)]">
                    {footer}
                </CardFooter>
            )}
        </Card>
    )
}

export default CustomCard