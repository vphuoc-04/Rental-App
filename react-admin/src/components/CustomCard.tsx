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
        <Card className={`bg-white dark:bg-[#27272A] border-gray-200 dark:border-gray-700 ${className}`}>
            <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">{title}</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400">{description}</CardDescription>
                {action && <CardAction>{action}</CardAction>}
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
                {children}
            </CardContent>
            {footer && (
                <CardFooter className="flex-col gap-2 text-gray-600 dark:text-gray-400">
                    {footer}
                </CardFooter>
            )}
        </Card>
    )
}

export default CustomCard