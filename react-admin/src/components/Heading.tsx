import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem as UIBreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Crumb = { title: string; route: string }

interface PageHeadingProps {
  breadcrumb: Crumb | Crumb[]   
}

const PageHeading: React.FC<PageHeadingProps> = ({ breadcrumb }) => {
    const crumbs: Crumb[] = Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb]
    
    const getVisibleCrumbs = () => {
        if (crumbs.length <= 2) {
            return crumbs
        }
        
        return [crumbs[0], { title: "...", route: "#" }, crumbs[crumbs.length - 1]]
    }

    const visibleCrumbs = getVisibleCrumbs()

    return (
        <div className="flex flex-col min-w-0 flex-1">
            <Breadcrumb>
                <BreadcrumbList className="flex-wrap gap-1 md:flex-nowrap">
                    {visibleCrumbs.map((item, index) => (
                        <React.Fragment key={`${item.route}-${index}`}>
                            {index > 0 && (
                                <BreadcrumbSeparator className="text-[13px] xs:text-xs sm:text-sm text-[var(--color-text-tertiary)]" />
                            )}
                            <UIBreadcrumbItem className="max-w-none">
                                <div className="flex items-center">
                                    <span className="
                                        text-[13px] xs:text-xs sm:text-sm 
                                        text-[var(--color-text-secondary)]
                                        truncate max-w-[80px] xs:max-w-[100px] sm:max-w-[120px]
                                        md:max-w-none md:truncate-none md:whitespace-normal
                                        block
                                    ">
                                        {item.title}
                                    </span>
                                </div>
                            </UIBreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default PageHeading