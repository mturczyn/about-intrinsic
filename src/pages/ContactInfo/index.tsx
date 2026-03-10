import { BsTelephone } from 'react-icons/bs'
import styles from './ContactInfo.module.css'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaStackOverflow } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { AnchorWithNewPage } from 'components/AnchorWithNewPage'
import websiteLogo from 'images/website-logo.svg'
import { CiLocationOn } from 'react-icons/ci'
import { Trans, useTranslation } from 'react-i18next'
import { usePageTitle } from 'hooks/usePageTitle'

export const PAGE_TITLE =
    'Intrinsic | Web Development and Programming | Contact info'

const ContactInfo = () => {
    const { t } = useTranslation()

    usePageTitle(t(PAGE_TITLE))

    return (
        <header className={styles['contact-card']}>
            <img src={websiteLogo} alt="Intrinsic Michał Turczyn logo"></img>
            <h1>INTRINSIC</h1>
            <div className={styles['contact-info-card']}>
                <ContactInfoEntry icon={<BsTelephone />}>
                    <div title={t('protectedContactInfoNote')}>
                        <Trans i18nKey="seeAt">
                            <a href="https://intrinsic-michal-turczyn.turek1992.workers.dev"></a>
                        </Trans>
                    </div>
                </ContactInfoEntry>
                <ContactInfoEntry icon={<MdOutlineEmail />}>
                    <div title={t('protectedContactInfoNote')}>
                        <Trans i18nKey="seeAt">
                            <a href="https://intrinsic-michal-turczyn.turek1992.workers.dev"></a>
                        </Trans>
                    </div>
                </ContactInfoEntry>
                <ContactInfoEntry icon={<CiLocationOn />}>
                    Zabrze, {t('Poland')}
                </ContactInfoEntry>
                <ContactInfoEntry icon={<CiLinkedin />}>
                    <AnchorWithNewPage
                        description="linkedin.com"
                        url="https://www.linkedin.com/in/michał-turczyn-6851a2117/"
                    />
                </ContactInfoEntry>
                <ContactInfoEntry icon={<FaStackOverflow />}>
                    <AnchorWithNewPage
                        description="stackoverflow.com"
                        url="https://stackoverflow.com/users/7132550/michał-turczyn"
                    />
                </ContactInfoEntry>
                <ContactInfoEntry icon={<FaGithub />}>
                    <AnchorWithNewPage
                        description="github.com"
                        url="https://github.com/mturczyn"
                    />
                </ContactInfoEntry>
            </div>
        </header>
    )
}

const ContactInfoEntry = ({
    children,
    icon,
}: {
    children: any
    icon: JSX.Element
}) => {
    return (
        <div>
            {icon}
            <div>{children}</div>
        </div>
    )
}

export default ContactInfo
