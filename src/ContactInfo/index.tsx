import { BsTelephone } from 'react-icons/bs'
import './ContactInfo.css'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaStackOverflow } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { AnchorWithNewPage } from 'CoreComponents/AnchorWithNewPage'
import websiteLogo from 'website-logo.svg'
import { CiLocationOn } from 'react-icons/ci'

export const ContactInfo = () => {
    return (
        <header className="contact-card">
            <img src={websiteLogo} alt="Intrinsic Michał Turczyn logo"></img>
            <h1>INTRINSIC</h1>
            <div className="contact-info-card">
                <ContactInfoEntry icon={<BsTelephone />}>
                    503 536 506
                </ContactInfoEntry>
                <ContactInfoEntry icon={<MdOutlineEmail />}>
                    turek1992@o2.pl
                </ContactInfoEntry>
                <ContactInfoEntry icon={<CiLocationOn />}>
                    Zabrze, Poland
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
