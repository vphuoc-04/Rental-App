import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface CustomInputProps {
    label?: string,
    name: string,
    type: string | undefined,
    placeholder: string,
    register: any,
    errors: any,
    rules?: object,
    defaultValue: string,
    disabled?: boolean
}

const CustomInput = ({ label, name, type, placeholder, errors, register, rules, defaultValue, disabled}: CustomInputProps) => {
    return (
        <>
            <div className="items-center gap-4">
                <Label htmlFor={name} className="text-left text-[var(--color-text-primary)]">
                    {label}
                </Label>
                <Input 
                    name={name}
                    type={type ?? 'text'} 
                    placeholder={placeholder}
                    id={name} 
                    className="col-span-3 border border-[var(--color-border)] rounded py-5 px-3 focus:border-[var(--color-primary)] transition text-[var(--color-text-primary)] bg-[var(--color-background)]" 
                    {...register(name, rules)}
                    defaultValue={defaultValue || ''}
                    disabled={disabled}
                />
            </div>
            <div className="error-line text-left">
                {errors?.[name] && <span className="text-red-500 text-[12px]">{errors[name]?.message}</span>}
            </div>
        </>
    )
}

export default CustomInput