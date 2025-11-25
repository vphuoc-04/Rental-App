import { Link, useLocation } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { asideItem } from "@/constants/aside"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

interface AsideProps {
    isCollapsed?: boolean;
    onExpand?: () => void;
    onClose?: () => void;
    isMobile?: boolean;
}

const Aside = ({ isCollapsed = false, onExpand, onClose, isMobile = false }: AsideProps) => {
    const location = useLocation();
    const segment = location.pathname.split('/')[2]
    const [forceCloseTooltips, setForceCloseTooltips] = useState(false);

    const handleNormalItemClick = () => {
        setForceCloseTooltips(true);
        setTimeout(() => setForceCloseTooltips(false), 100);
        
        if (isCollapsed && onExpand) onExpand();
        if (isMobile && onClose) onClose();
    };

    const handleTriggerClick = () => {
        setForceCloseTooltips(true);
        setTimeout(() => setForceCloseTooltips(false), 100);
        
        if (isCollapsed && onExpand) onExpand();
    };

    const handleSubItemClick = () => {
        if (isMobile && onClose) onClose();
    };

    const handleCloseClick = () => {
        if (onClose) onClose();
    }

    const displayCollapsed = isMobile ? false : isCollapsed;

    return (
        <TooltipProvider delayDuration={0}>
            <div 
                className={`
                    h-screen max-h-screen 
                    p-5 flex flex-col
                    border-r border-gray-200 dark:border-gray-700
                    ${isMobile ? 'w-full' : 'transition-[width] duration-500 ease-in-out'}
                    ${displayCollapsed ? 'w-20' : 'w-70'}
                `}
                style={{
                    backgroundColor: 'var(--color-aside-background)'
                }}
            >
                {isMobile && (
                    <div 
                        className="flex items-center justify-between mb-5 pb-2 border-b"
                        style={{
                            borderColor: 'var(--color-aside-text)',
                            opacity: 0.3
                        }}
                    >
                        <div 
                            className="text-lg font-bold"
                            style={{
                                color: 'var(--color-aside-text)'
                            }}
                        >
                            Logo
                        </div>
                        <button 
                            onClick={handleCloseClick} 
                            className="p-2 rounded-lg"
                            style={{
                                backgroundColor: 'var(--color-aside-active-background)',
                                opacity: 0.1
                            }}
                        >
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                style={{
                                    color: 'var(--color-aside-text)'
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}
                {!isMobile && (
                    <div 
                        className={`text-lg font-bold mb-5 ease-in-out pb-4 border-b-2 ${displayCollapsed ? "text-center" : ""}`}
                        style={{
                            color: 'var(--color-aside-text)',
                            borderColor: 'var(--color-aside-active-background)'
                        }}
                    >
                        {displayCollapsed ? "L" : "Logo"}
                    </div>
                )}

                <div className={`
                    main-sidebar flex-1 
                    [scrollbar-gutter:stable]
                    [&::-webkit-scrollbar]:w-1
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:hover:bg-gray-400
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#27272A] dark:[&::-webkit-scrollbar-thumb]:hover:bg-[#3c3c3c]
                    ${displayCollapsed ? 'overflow-visible': 'overflow-y-auto overflow-x-hidden'}
                    pr-2 -mr-5  
                `}>
                    {asideItem.map((group, index) => (
                        <div className="pb-5" key={index}>
                            {!displayCollapsed && (
                                <span 
                                    className="text-[13px]"
                                    style={{
                                        color: 'var(--color-aside-text)',
                                        opacity: 0.7
                                    }}
                                >
                                    {group.label}
                                </span>
                            )}
                            <div className="menu-category my-3">
                                <Accordion type="single" collapsible className="sidebar-accordion flex flex-col gap-y-1">
                                    {group.items.map((item, itemIndex) => (
                                        item.links.length === 0 ? (
                                            <Tooltip 
                                                key={itemIndex} 
                                                delayDuration={0}
                                                open={displayCollapsed && !forceCloseTooltips ? undefined : false}
                                            >
                                                <TooltipTrigger asChild>
                                                    <Link
                                                        to={item.to ?? '#'}
                                                        className={`flex items-center px-3 py-3 w-full rounded-md cursor-pointer transition-colors
                                                            ${displayCollapsed ? 'justify-center' : 'justify-start gap-2'}
                                                        `}
                                                        style={{
                                                            color: item.active.includes(segment)
                                                                ? 'var(--color-aside-active-text)'
                                                                : 'var(--color-aside-text)',
                                                            backgroundColor: item.active.includes(segment)
                                                                ? 'var(--color-aside-active-background)'
                                                                : 'transparent'
                                                        }}
                                                        onClick={handleNormalItemClick}
                                                    >
                                                        <div 
                                                            className="flex-shrink-0"
                                                            style={{
                                                                color: item.active.includes(segment)
                                                                    ? 'var(--color-aside-active-text)'
                                                                    : 'var(--color-aside-text)'
                                                            }}
                                                        >
                                                            {item.icon}
                                                        </div>
                                                        {!displayCollapsed && (
                                                            <span className="whitespace-nowrap">{item.label}</span>
                                                        )}
                                                    </Link>
                                                </TooltipTrigger>
                                                {displayCollapsed && (
                                                    <TooltipContent 
                                                        side="right" 
                                                        align="center"
                                                        className="bg-black text-white dark:bg-white dark:text-black text-xs rounded-md py-2 px-3 shadow-lg z-50"
                                                    >
                                                        {item.label}
                                                    </TooltipContent>
                                                )}
                                            </Tooltip>
                                        ) : (
                                            <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`} className="border-b-0">
                                                <Tooltip 
                                                    delayDuration={0}
                                                    open={displayCollapsed && !forceCloseTooltips ? undefined : false}
                                                >
                                                    <TooltipTrigger asChild>
                                                        <AccordionTrigger
                                                            className={`
                                                                flex items-center px-3 py-0 w-full cursor-pointer
                                                                hover:no-underline
                                                                ${displayCollapsed ? 'justify-center [&>svg]:hidden' : 'justify-start gap-2'}
                                                            `}
                                                            style={{
                                                                color: item.active.includes(segment)
                                                                    ? 'var(--color-aside-active-text)'
                                                                    : 'var(--color-aside-text)',
                                                                backgroundColor: item.active.includes(segment)
                                                                    ? 'var(--color-aside-active-background)'
                                                                    : 'transparent'
                                                            }}
                                                            onClick={handleTriggerClick}
                                                        >
                                                            <div className={`menu-label flex items-center rounded-md py-3 no-underline
                                                                ${displayCollapsed ? 'w-auto justify-center' : 'w-50 gap-2'}
                                                            `}>
                                                                <div 
                                                                    className="flex-shrink-0"
                                                                    style={{
                                                                        color: item.active.includes(segment)
                                                                            ? 'var(--color-aside-active-text)'
                                                                            : 'var(--color-aside-text)'
                                                                    }}
                                                                >
                                                                    {item.icon}
                                                                </div>
                                                                {!displayCollapsed && (
                                                                    <span className="no-underline whitespace-nowrap">{item.label}</span>
                                                                )}
                                                            </div>
                                                        </AccordionTrigger>
                                                    </TooltipTrigger>
                                                    {displayCollapsed && (
                                                        <TooltipContent 
                                                            side="right" 
                                                            align="center"
                                                            className="bg-black text-white dark:bg-white dark:text-black text-xs rounded-md py-2 px-3 shadow-lg z-50"
                                                        >
                                                            {item.label}
                                                        </TooltipContent>
                                                    )}
                                                </Tooltip>

                                                {!displayCollapsed && (
                                                    <AccordionContent className="mt-2">
                                                        <ul className="flex flex-col gap-2 ml-7 text-[15px]">
                                                            {item.links.map((link, linkIndex) => {
                                                                const isActiveLink = location.pathname === link.to;
                                                                return (
                                                                    <li key={linkIndex}>
                                                                        <Link to={link.to}>
                                                                            <p
                                                                                className={`py-3 pl-3 w-full rounded-[5px] transition-colors
                                                                                `}
                                                                                style={{
                                                                                    color: isActiveLink
                                                                                        ? 'var(--color-aside-active-text)'
                                                                                        : 'var(--color-aside-text)',
                                                                                    backgroundColor: isActiveLink
                                                                                        ? 'var(--color-aside-active-background)'
                                                                                        : 'transparent'
                                                                                }}
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
        </TooltipProvider>
    )
}

export default Aside