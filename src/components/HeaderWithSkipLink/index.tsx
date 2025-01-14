import { SkipLink } from 'components/SkipLink'
import { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

export const HeaderWithSkipLink = ({
    scrollTo,
    tableOfContentsElement,
    title,
    linkToSelf: linkTo,
    skipLinkClassName,
}: {
    scrollTo: HTMLElement | null
    tableOfContentsElement: HTMLElement | null
    title: string
    linkToSelf: (children: ReactNode) => ReactNode
    skipLinkClassName?: string
}) => {
    const { t } = useTranslation()
    const headingRef = useRef<HTMLHeadingElement>(null)

    return (
        <>
            <h1 tabIndex={1} className={skipLinkClassName} ref={headingRef}>
                {title}
            </h1>
            {tableOfContentsElement &&
                createPortal(
                    linkTo(
                        <SkipLink scrollTo={headingRef.current}>
                            {title}
                        </SkipLink>
                    ),
                    tableOfContentsElement
                )}
            <SkipLink className={skipLinkClassName} scrollTo={scrollTo}>
                {t('backToTop')}
            </SkipLink>
        </>
    )
}
