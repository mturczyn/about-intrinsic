import { SkipLink } from 'components/SkipLink'
import { forwardRef, ForwardedRef } from 'react'
import { useTranslation } from 'react-i18next'

export const HeaderWithSkipLink = forwardRef(
    (
        {
            title,
            getScrollTo,
        }: {
            title: string
            getScrollTo: () => HTMLElement | null
        },
        ref: ForwardedRef<HTMLHeadingElement>
    ) => {
        const { t } = useTranslation()
        return (
            <>
                <h1 ref={ref} tabIndex={1}>
                    {title}
                </h1>
                <SkipLink getScrollTo={getScrollTo} className="back-to-top">
                    {t('backToTop')}
                </SkipLink>
            </>
        )
    }
)
