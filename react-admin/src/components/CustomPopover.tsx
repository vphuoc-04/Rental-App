import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface CustomPopoverProps {
    title: string,
    description: string,
    className?: string,
    icons: React.ReactNode,
    children?: React.ReactNode,
    actions?: React.ReactNode,
}

const CustomPopover = ({ title, description, className, icons, children, actions }: CustomPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger className={`flex items-center justify-center ${className}`}>
                {icons}
            </PopoverTrigger>
            <PopoverContent className="w-96" align="start">
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <span className="text-gray-900 dark:text-white font-medium">{title}</span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm block mt-1">{description}</span>
                        </div>
                        {actions && ( 
                            <div className="flex items-center gap-1">
                                {actions}
                            </div>
                        )}
                    </div>
                    {children}
                </div>
            </PopoverContent>
        </Popover> 
    )
}

export default CustomPopover;