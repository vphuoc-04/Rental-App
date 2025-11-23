import CustomCard from "@/components/CustomCard"

import PageHeading from "@/components/Heading";
import { breadcrumb } from "@/settings/Dashboard";

// Types
import type  { BreadcrumbData } from "@/types/BreadCrumb";

const Dashboard = () => {
    const breadcrumbData: BreadcrumbData = breadcrumb

    return (
        <>
            <PageHeading breadcrumb = {breadcrumbData.items} />
            <div className="p-5">
                <CustomCard
                    title="TỔNG BÁO CÁO"
                    description="Đây là trang quản lý báo cáo, với các chức năng bên dưới"
                >
                    
                </CustomCard>
            </div>
        </>
    )
}

export default Dashboard