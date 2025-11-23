import { useState } from "react"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

// Components
import { Label } from "@/components/ui/label"

import CustomInput from "@/components/CustomInput"
import CustomButton from "@/components/CustomButton"
import CustomCard from "@/components/CustomCard"

type Inputs = {
    email: string
    password: string
}

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const email = "";
    const password = "";

    const onSubmit: SubmitHandler<Inputs> = async (payload) => {
        try {
            setLoading(true)

            await new Promise(resolve => setTimeout(resolve, 2000))
            if (payload.email === email && payload.password === password) {
                console.log("Đăng nhập thành công")
                
                navigate('/admin/dashboard')
            } else {

            }

        } catch (error) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    console.log("Email:", watch("email"));
    console.log("Password:", watch("password"));

    return (
        <div className="min-h-screen flex justify-center px-4 py-25 bg-gray-100">
            <div className="w-full max-w-screen-lg mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-5 md:p-10 text-center md:text-left">
                        <p className="font-bold text-2xl mb-4 text-neutral-500">
                            Welcome to VPHC1 MANAGEMENT
                        </p>
                        <p className="mb-2">Chào mừng đến với trang admin.</p>
                        <p className="mb-2">Nơi đây cung cấp các chức năng quan trọng nhất của hệ thống mà bạn cần.</p>
                        <p className="mb-2">Chúc bạn có một ngày thật vui vẻ khi sử dụng dịch vụ của chúng tôi.</p>
                    </div>

                    <CustomCard 
                        title="Đăng nhập"
                        description="Đây là trang admin của hệ thống"
                        className="w-full max-w-md mx-auto border-none shadow-[0px_1px_5px_rgba(0,0,0,0.3)]"
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <CustomInput
                                        name="email"
                                        type="text"
                                        placeholder="Nhập email của bạn"
                                        register={register}
                                        errors={errors}
                                        rules={{ 
                                            required: "Email là bắt buộc",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Email không hợp lệ"
                                            }
                                        }}
                                        defaultValue=""
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Mật khẩu</Label>
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Quên mật khẩu?
                                        </a>
                                    </div>
                                    <CustomInput
                                        name="password"
                                        type="password"
                                        placeholder="Nhập mật khẩu của bạn"
                                        register={register}
                                        errors={errors}
                                        rules={{ 
                                            required: "Mật khẩu là bắt buộc",
                                            minLength: {
                                                value: 5,
                                                message: "Mật khẩu phải có ít nhất 5 ký tự"
                                            }
                                        }}
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <CustomButton 
                                    type="submit"
                                    text="Đăng nhập"
                                    loading={loading}
                                    disabled={loading}
                                />
                            </div>
                        </form>
                    </CustomCard>
                </div>
            </div>
        </div>
    )
}

export default Login