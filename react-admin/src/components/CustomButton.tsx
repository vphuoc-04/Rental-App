import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

interface CustomButtonProps {
    type?: "button" | "submit" | "reset",
    loading: boolean,
    text: string,
    disabled?: boolean,
}

const CustomButton = ({type, loading, text, disabled = false }: CustomButtonProps) => {
    const isDisabled = loading || disabled
    
    return (
        <Button 
            className={`
                w-full py-2 rounded transition-colors
                ${isDisabled 
                  ? "bg-[var(--color-text-tertiary)] text-[var(--color-text-secondary)] opacity-60 !cursor-not-allowed" 
                  : "bg-[var(--color-primary)] text-white cursor-pointer hover:bg-[var(--color-hover)]"}
            `}
            type={type}
            disabled={isDisabled}
            style={isDisabled ? { cursor: 'not-allowed' } : undefined}
        >
            {loading ? <Spinner /> : text}
        </Button>
    )
}

export default CustomButton