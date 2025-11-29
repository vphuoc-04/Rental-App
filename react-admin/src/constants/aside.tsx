import { 
    FaChartPie, 
    FaUsers, 
    FaUser, 
    FaHouseUser, 
    FaLaptop,
    FaRegEdit,
    FaCog,
    FaDollarSign,
    FaNetworkWired,
    FaUserPlus 
} from "react-icons/fa";

export const asideItem = [
    {
        label: 'CHÍNH',
        items: [
            {
                icon: <FaChartPie />,
                label: 'Tổng báo cáo',
                active: ['bao-cao'],
                to: '/admin/bao-cao',
                links: [

                ] 
            }
        ]
    },
    {
        label: 'CHỨC NĂNG',
        items: [
            {
                icon: <FaHouseUser />,
                label: 'Quản lý chung',
                active: '[quan-ly-chung]',
                to: '/admin/quan-ly-chung',
                links: [
                    
                ]   
            },
            {
                icon: <FaDollarSign />,
                label: 'Khách chuyển khoản',
                active: '',
                to: '',
                links: [
                    
                ]   
            },
            {
                icon: <FaUserPlus />,
                label: 'Môi giới',
                active: '',
                to: '',
                links: [
                    
                ]   
            },
            {
                icon: <FaNetworkWired />,
                label: 'Công ty / nhóm',
                active: '',
                to: '',
                links: [
                    
                ]   
            },
            {
                icon: <FaUsers />,
                label: 'Quản lý người dùng',
                active: '',  
                to: '',
                links: [
                    {
                        label: 'Quản lý người dùng',
                        to: ''
                    },
                    {
                        label: 'Quản lý nhóm người dùng',
                        to: ''
                    }
                ]   
            },
            {
                icon: <FaRegEdit />,
                label: 'Quản lý đăng tin',
                active: '',  
                to: '',
                links: [
                    {
                        label: 'Tin đăng cho thuê',
                        to: ''
                    },
                    {
                        label: 'Khách thuê tìm năng',
                        to: ''
                    }
                ]   
            },
            {
                icon: <FaCog />,
                label: 'Cài đặt chung',
                active: '',  
                to: '',
                links: [
                    {
                        label: 'Đại diện hợp đồng',
                        to: ''
                    },
                    {
                        label: 'Mẫu văn bản hợp đồng',
                        to: ''
                    },
                    {
                        label: 'Mẫu tờ khai tạm trú',
                        to: ''
                    }
                ]   
            },
        ]
    },
    {
        label: 'TÀI KHOẢN',
        items: [
            {
                icon: <FaUser />,
                label: 'Thông tin tài khoản',
                active: '',  
                to: '',
                links: [

                ]      
            },
            {
                icon: <FaLaptop />,
                label: 'Thông thiết bị đăng nhập',
                active: '',  
                to: '',
                links: [

                ]      
            },
        ]
    }
]