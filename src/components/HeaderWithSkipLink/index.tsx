import { SkipLink } from 'components/SkipLink'
import { ReactNode, RefObject, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

export const HeaderWithSkipLink = ({
    title,
    scrollTo,
    tableOfContents,
    renderSkipLink,
}: {
    title: string
    scrollTo: RefObject<HTMLElement>
    tableOfContents: HTMLElement | null
    renderSkipLink: (children: ReactNode) => ReactNode
}) => {
    const { t } = useTranslation()
    const innerRef = useRef<HTMLHeadingElement>(null)

    return (
        <>
            {tableOfContents &&
                createPortal(
                    renderSkipLink(
                        <SkipLink scrollTo={innerRef}>{title}</SkipLink>
                    ),
                    tableOfContents
                )}
            <h1 ref={innerRef} tabIndex={1}>
                {title}
            </h1>
            <SkipLink scrollTo={scrollTo} className="back-to-top">
                {t('backToTop')}
            </SkipLink>
        </>
    )
}
