import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import Markdown from 'react-markdown'

export const ChatMessage = ({
    text,
    className,
}: {
    text: string
    className?: string
}) => {
    const divMarkdownContainerRef = useRef<HTMLDivElement>(null)
    const preRefs = useRef<HTMLPreElement[]>([])
    const [divRefs, setDivRefs] = useState<HTMLDivElement[]>([])
    const { t } = useTranslation()

    useEffect(() => {
        if (!divMarkdownContainerRef.current) return
        const preElements =
            divMarkdownContainerRef.current.querySelectorAll('pre')

        const newDivRefs: HTMLDivElement[] = []

        preElements.forEach((preElement) => {
            if (!preRefs.current.find((r) => r === preElement)) {
                preRefs.current.push(preElement)
                const adjacentDiv = document.createElement('div')
                newDivRefs.push(adjacentDiv)
                preElement.insertAdjacentElement('afterend', adjacentDiv)
            }
        })

        if (newDivRefs.length) setDivRefs((refs) => [...refs, ...newDivRefs])
    }, [text])

    return (
        <>
            {divRefs.map((x) =>
                createPortal(
                    <button
                        onClick={(e) => {
                            const button = e.target as HTMLButtonElement
                            const preElement = button?.parentElement
                                ?.previousSibling as HTMLPreElement

                            navigator.clipboard.writeText(
                                preElement?.innerText ?? ''
                            )
                        }}
                        className="copyToClipboard"
                    >
                        {t('copyToClipboard')}
                    </button>,
                    x
                )
            )}
            <div className={className} ref={divMarkdownContainerRef}>
                <Markdown>{text}</Markdown>
            </div>
        </>
    )
}
