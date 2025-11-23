import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { asideItem } from "@/constants/aside"

interface AsideProps {
    isCollapsed?: boolean;
    onExpand?: () => void;
    onClose?: () => void;
    isMobile?: boolean;
}

const Aside = ({ isCollapsed = false, onExpand, onClose, isMobile = false }: AsideProps) => {
    const location = useLocation();
    const segment = location.pathname.split('/')[2]

    useEffect(() => {
        console.log(segment);
    }, [segment]);

    useEffect(() => {
        console.log("Aside props:", { isCollapsed, isMobile, onClose: !!onClose });
    }, [isCollapsed, isMobile, onClose]);

    const handleNormalItemClick = () => {
        if (isCollapsed && onExpand) onExpand();
        if (isMobile && onClose) onClose(); // mobile → close
    };

    const handleTriggerClick = () => {
        if (isCollapsed && onExpand) onExpand();
    };


    const handleSubItemClick = () => {
        if (isMobile && onClose) onClose();
    };

    const handleCloseClick = () => {
        if (onClose) {
            onClose();
        }
    }
    const displayCollapsed = isMobile ? false : isCollapsed;

    return (
        <div className={`
            min-h-screen bg-white dark:bg-[#18181b] text-gray-900 dark:text-white p-5 flex flex-col overflow-y-auto
            border-r border-gray-200 dark:border-gray-700
            transition-all duration-300 ease-in-out
            [scrollbar-gutter:stable]
            [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            [&::-webkit-scrollbar-thumb]:hover:bg-gray-400
            dark:[&::-webkit-scrollbar-thumb]:bg-[#27272A]
            dark:[&::-webkit-scrollbar-thumb]:hover:bg-[#3c3c3c]
            ${isMobile ? 'w-70 fixed left-0 top-0 z-50 lg:relative lg:w-auto' : ''}
            ${displayCollapsed ? 'w-20' : 'w-70'}
        `}>
            {isMobile && (
                <div className="flex items-center justify-between mb-5 pb-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="text-lg font-bold">Logo</div>
                    <button
                        onClick={handleCloseClick}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-[#27272A]"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}

            {!isMobile && (
                <div className={`text-lg font-bold mb-5 ${displayCollapsed ? "text-center" : ""}`}>
                    {displayCollapsed ? "L" : "Logo"}
                </div>
            )}
          
            <div className="main-sidebar">
                {asideItem.map((group, index) => (
                    <div className="pt-5 pb-3" key={index}>
                        {!displayCollapsed && (
                            <span className="text-[13px] text-gray-500 dark:text-gray-400">
                                {group.label}
                            </span>
                        )}
                        <div className="menu-category my-3">
                            <Accordion type="single" collapsible className="sidebar-accordion flex flex-col gap-y-1" defaultValue="">
                                {group.items.map((item, itemIndex) => (
                                    item.links.length === 0 ? (
                                        <Link
                                            key={itemIndex}
                                            to={item.to ?? '#'}
                                            className={`flex items-center px-3 py-3 w-full rounded-md cursor-pointer transition-colors duration-200
                                                ${displayCollapsed ? 'justify-center' : 'justify-start gap-2'}
                                                ${item.active.includes(segment)
                                                    ? 'text-black bg-gray-100 dark:bg-[#27272A] dark:text-white'
                                                    : 'text-gray-950 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#27272A]'}
                                            `}
                                            title={displayCollapsed ? item.label : undefined}
                                            onClick={handleNormalItemClick}
                                        >
                                            <div className="flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            {!displayCollapsed && (
                                                <span className="whitespace-nowrap">{item.label}</span>
                                            )}
                                        </Link>
                                    ) : (
                                        <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`} className="border-b-0">
                                            <AccordionTrigger
                                                className={`
                                                    flex items-center px-3 py-0 w-full cursor-pointer transition-colors duration-200
                                                    [&>svg]:stroke-gray-600 dark:[&>svg]:stroke-gray-300
                                                    [&>svg]:transition-colors [&>svg]:duration-200
                                                    hover:no-underline
                                                    ${displayCollapsed ? 'justify-center [&>svg]:hidden' : 'justify-start gap-2'}
                                                    ${item.active.includes(segment)
                                                        ? 'text-black bg-gray-100 dark:bg-[#27272A] dark:text-white'
                                                        : 'text-gray-950 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#27272A]'}
                                                `}
                                                title={displayCollapsed ? item.label : undefined}
                                                onClick={handleTriggerClick}
                                            >
                                                <div className={`menu-label flex items-center rounded-md py-3 no-underline
                                                    ${displayCollapsed ? 'w-auto justify-center' : 'w-50 gap-2'}
                                                `}>
                                                    <div className="flex-shrink-0">
                                                        {item.icon}
                                                    </div>
                                                    {!displayCollapsed && (
                                                        <span className="no-underline whitespace-nowrap">{item.label}</span>
                                                    )}
                                                </div>
                                            </AccordionTrigger>
                                            {!displayCollapsed && (
                                                <AccordionContent className="mt-2">
                                                    <ul className="flex flex-col gap-2 ml-7 text-[15px]">
                                                        {item.links.map((link, linkIndex) => {
                                                            const isActiveLink = location.pathname === link.to;
                                                            return (
                                                                <li key={linkIndex}>
                                                                    <Link to={link.to}>
                                                                        <p
                                                                            className={`
                                                                                py-3 pl-3 w-full rounded-[5px] transition-colors duration-200
                                                                                ${isActiveLink
                                                                                    ? 'text-black bg-gray-100 dark:bg-[#27272A] dark:text-white'
                                                                                    : 'text-gray-950 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#27272A]'}
                                                                            `}
                                                                            onClick={handleSubItemClick}
                                                                        >
                                                                            {link.label}
                                                                        </p>
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </AccordionContent>
                                            )}
                                        </AccordionItem>
                                    )
                                ))}
                            </Accordion>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Aside