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

    const displayCollapsed = isMobile ? false : isCollapsed;

    return (
        <TooltipProvider delayDuration={0}>
            <div 
                className={`
                    h-screen max-h-screen 
                    p-5 flex flex-col
                    border-r border-gray-200 dark:border-gray-700
                    bg-[var(--color-aside-background)]
                    ${isMobile ? 'w-full' : 'transition-[width] duration-500 ease-in-out'}
                    ${displayCollapsed ? 'w-20' : 'w-65'}
                `}
            >
                {isMobile && (
                    <div 
                        className="flex items-center justify-between mb-5 pb-2 border-b border-[var(--color-aside-text)] opacity-30"
                    >
                        <div 
                            className="text-lg font-bold text-[var(--color-aside-text)]"
                        >
                            Logo
                        </div>
                    </div>
                )}
                {!isMobile && (
                    <div 
                        className={`
                            text-lg font-bold mb-5 ease-in-out pb-4 border-b-2 
                            text-[var(--color-aside-text)]
                            border-[var(--color-aside-active-background)]
                            ${displayCollapsed ? "text-center" : ""}`
                        }
                    >
                        {displayCollapsed ? "L" : "Logo"}
                    </div>
                )}

                <div className={`
                    main-sidebar flex-1 
                    [scrollbar-gutter:stable]
                    [&::-webkit-scrollbar]:w-1
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-[var(--color-aside-scrollbar-thumb)] 
                    [&::-webkit-scrollbar-thumb]:hover:bg-[var(--color-aside-scrollbar-thumb-hover)]
                    ${displayCollapsed ? 'overflow-visible': 'overflow-y-auto overflow-x-hidden'}
                    pr-2 -mr-5  
                `}>
                    {asideItem.map((group, index) => (
                        <div className="pb-3" key={index}>
                            {!displayCollapsed && (
                                <span 
                                    className="text-[13px] text-[var(--color-aside-text)] opacity-70"
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
                                                        className={`flex items-center px-3 py-2 w-full rounded-md cursor-pointer 
                                                            hover:bg-[var(--color-aside-active-background)]
                                                            ${displayCollapsed ? 'justify-center' : 'justify-start gap-2'}
                                                            ${item.active.includes(segment) 
                                                                ? 'text-[var(--color-aside-active-text)] bg-[var(--color-aside-active-background)]' 
                                                                : 'text-[var(--color-aside-text)]'
                                                            }
                                                        `}
                                                        onClick={handleNormalItemClick}
                                                    >
                                                        <div 
                                                            className={`flex-shrink-0 ${
                                                                item.active.includes(segment)
                                                                    ? 'text-[var(--color-aside-active-text)]'
                                                                    : 'text-[var(--color-aside-text)]'
                                                            }`}
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
                                                                hover:bg-[var(--color-aside-active-background)]
                                                                ${displayCollapsed ? 'justify-center [&>svg]:hidden' : 'justify-start gap-2'}
                                                                ${item.active.includes(segment)
                                                                    ? 'text-[var(--color-aside-active-text)] bg-[var(--color-aside-active-background)]'
                                                                    : 'text-[var(--color-aside-text)]'
                                                                }
                                                            `}
                                                            onClick={handleTriggerClick}
                                                        >
                                                            <div className={`menu-label flex items-center rounded-md py-3 no-underline
                                                                ${displayCollapsed ? 'w-auto justify-center' : 'w-50 gap-2'}
                                                            `}>
                                                                <div 
                                                                    className={`flex-shrink-0 ${
                                                                        item.active.includes(segment)
                                                                            ? 'text-[var(--color-aside-active-text)]'
                                                                            : 'text-[var(--color-aside-text)]'
                                                                    }`}
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
                                                                                className={`
                                                                                    py-2 pl-3 w-full rounded-[5px] 
                                                                                    hover:bg-[var(--color-aside-active-background)]
                                                                                    ${isActiveLink
                                                                                        ? 'text-[var(--color-aside-active-text)] bg-[var(--color-aside-active-background)]'
                                                                                        : 'text-[var(--color-aside-text)]'
                                                                                    }
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
        </TooltipProvider>
    )
}

export default Aside