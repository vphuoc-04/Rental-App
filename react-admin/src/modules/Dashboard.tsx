import { useEffect } from "react"

// Settings
import { breadcrumb } from "@/settings/DashboardSetting"

// Types
import type { BreadcrumbData } from "@/types/BreadCrumbType"

// Components
import { useLayoutContext } from "@/components/Layout"
import CustomCard from "@/components/CustomCard"

const Dashboard = () => {
    const breadcrumbData: BreadcrumbData = breadcrumb
    const { setBreadcrumb } = useLayoutContext()

    useEffect(() => {
        setBreadcrumb(breadcrumbData.items)
    }, [])

    return (
        <div className="p-3">
            <CustomCard
                title="TRANG TỔNG BÁO CÁO"
                description="Đây là trang quản lý báo cáo, với các chức năng bên dưới."
            >
                
            </CustomCard>
        </div>
    )
}

export default Dashboard