import { checkModelsAvailable, fetchAiResponse, Model } from 'utils/AiApi'
import { UIEvent, useEffect, useRef, useState } from 'react'
import './Chat.css'
import Markdown from 'react-markdown'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { usePageTitle } from 'hooks/usePageTitle'

type ChatMessageType = 'sent' | 'received'

interface ChatMessage {
    type: ChatMessageType
    text: string
}

const Chat = () => {
    const chatConteinerLastScrollPosition = useRef<number>()
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [aiAnswer, setAiAnswer] = useState<string>('')
    const [modelsAvailable, setModelsAvailable] = useState<Model[]>()
    const [aiAnswerDone, setAiAnswerDone] = useState(true)
    const [shouldScrollToLastMessage, setShouldScrollToLastMessage] =
        useState(true)
    const chatContainerRef = useRef<HTMLDivElement>(null)
    const { t } = useTranslation()
    const modelsList = modelsAvailable?.map((m) => m.name).join(', ')
    const modelToUse =
        modelsAvailable && modelsAvailable.length > 0 && modelsAvailable[0]

    usePageTitle(t('chatPageTitle'))

    useEffect(() => {
        if (!chatContainerRef.current) return
        const copyToClipboardButtons =
            chatContainerRef.current.querySelectorAll(
                'pre+button.copyToClipboard'
            )

        copyToClipboardButtons.forEach(
            (b) => (b.textContent = t('copyToClipboard'))
        )
    }, [t])

    useEffect(() => {
        if (!modelToUse) return

        const availabilitiyMessage: ChatMessage = {
            text: t('chatbotIntro', {
                modelsList: modelsList,
                modelToUse: modelToUse.name,
            }),
            type: 'received',
        }

        setMessages((m) => [...m, availabilitiyMessage])
    }, [modelToUse, t])

    useEffect(() => {
        ;(async () => {
            const models = await checkModelsAvailable()
            setModelsAvailable(models)
        })()
    }, [])

    useEffect(() => {
        if (!aiAnswerDone || !aiAnswer) {
            return
        }
        setAiAnswer('')
        setMessages((m) => [
            ...m,
            {
                type: 'received',
                text: aiAnswer,
            },
        ])
    }, [aiAnswerDone, aiAnswer])

    const handleInputKeyUp = (e) => {
        if (!modelToUse) {
            return
        }

        if (e.keyCode !== 13) {
            return
        }

        const promptText = e.target.value
        e.currentTarget.value = ''

        setMessages([
            ...messages,
            {
                type: 'sent',
                text: promptText,
            },
        ])

        setShouldScrollToLastMessage(true)
        setAiAnswerDone(false)
        fetchAiResponse(
            promptText,
            modelToUse.model,
            (chunk) => setAiAnswer((x) => x + chunk),
            () => setAiAnswerDone(true),
            () => setModelsAvailable([])
        )
    }

    // Scroll to the bottom when messages update
    useEffect(() => {
        if (!shouldScrollToLastMessage) {
            return
        }

        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth',
            })
        }
    }, [messages, aiAnswer, shouldScrollToLastMessage])

    const handleChatScroll = (e: UIEvent<HTMLElement>) => {
        const oldPostion = chatConteinerLastScrollPosition.current
        chatConteinerLastScrollPosition.current = e.currentTarget.scrollTop

        if (!oldPostion) {
            return
        }

        const deltaY = e.currentTarget.scrollTop - oldPostion

        if (deltaY < 0) {
            setShouldScrollToLastMessage(false)
        } else {
            const scrollTopWithClientHeight =
                e.currentTarget.scrollTop + e.currentTarget.clientHeight
            const diff =
                e.currentTarget.scrollHeight - scrollTopWithClientHeight
            if (Math.abs(diff) < 1) {
                setShouldScrollToLastMessage(true)
            }
        }
    }

    return (
        <>
            {modelToUse ? (
                <div className="chat-with-input-container">
                    <div
                        ref={chatContainerRef}
                        onScroll={handleChatScroll}
                        className="chat-container"
                    >
                        {messages.map((message, index) => (
                            <ChatMessage
                                key={index}
                                className={`message ${
                                    message.type === 'sent'
                                        ? 'sent'
                                        : 'received'
                                }`}
                                text={message.text}
                            />
                        ))}
                        {aiAnswer && (
                            <ChatMessage
                                text={aiAnswer}
                                className={'message received'}
                            />
                        )}
                    </div>
                    <div id="user-message-wrapper">
                        <button
                            onClick={() => setShouldScrollToLastMessage(true)}
                            className={clsx({
                                'scroll-down': true,
                                'scroll-down-hidden': shouldScrollToLastMessage,
                            })}
                        >
                            <i className="arrow-down"></i>
                        </button>

                        <textarea
                            placeholder={t('yourMessage')}
                            onKeyUp={handleInputKeyUp}
                        ></textarea>
                    </div>
                </div>
            ) : (
                <>
                    <h1>{t('chatFeatureTitle')}</h1>
                    <p>{t('chatFeatureIntro')}</p>
                    <p>{t('chatFeatureOfflineNotice')}</p>
                    <p>{t('chatFeatureContact')}</p>
                </>
            )}
        </>
    )
}

const ChatMessage = ({
    text,
    className,
}: {
    text: string
    className?: string
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const { t } = useTranslation()

    useEffect(() => {
        if (!ref.current) return

        // Select all pre elements, that do not have button yet.
        const preElementsWithoutButtons = ref.current.querySelectorAll(
            'pre:not(:has(+button))'
        )

        preElementsWithoutButtons.forEach((preElement) => {
            const button = document.createElement('button')
            button.classList.add('copyToClipboard')
            button.innerText = t('copyToClipboard')

            button.addEventListener('click', () => {
                preElement.textContent &&
                    navigator.clipboard.writeText(preElement.textContent)
            })

            preElement.insertAdjacentElement('afterend', button)
        })
    }, [text])

    return (
        <div className={className} ref={ref}>
            <Markdown>{text}</Markdown>
        </div>
    )
}

export default Chat
