import { useTranslation } from 'react-i18next'

export const ChatOffline = () => {
    const { t } = useTranslation()
    return (
        <>
            <h1>{t('chatFeatureTitle')}</h1>
            <p>{t('chatFeatureIntro')}</p>
            <p>{t('chatFeatureOfflineNotice')}</p>
            <p>{t('chatFeatureContact')}</p>
        </>
    )
}
