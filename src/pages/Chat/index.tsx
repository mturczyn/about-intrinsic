import { LanguageModel } from 'utils/aiApi/LanguageModel'
import { checkModelsAvailable } from 'utils/aiApi/checkModelsAvailable'
import { fetchAiResponse } from 'utils/aiApi/fetchAiResponse'
import { UIEvent, useEffect, useRef, useState, WheelEventHandler } from 'react'
import './Chat.css'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { usePageTitle } from 'hooks/usePageTitle'
import { ChatMessage } from 'components/chat/ChatMessage'
import { ChatOffline } from 'components/chat/ChatOffline'

type ChatMessageType = 'sent' | 'received'

interface ChatMessage {
    type: ChatMessageType
    text: string
}

const Chat = () => {
    const chatConteinerLastScrollPosition = useRef<number>()
    const mouseIsDown = useRef(false)
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [aiAnswer, setAiAnswer] = useState<string>('')
    const [modelsAvailable, setModelsAvailable] = useState<LanguageModel[]>()
    const [aiAnswerDone, setAiAnswerDone] = useState(true)
    const [shouldScrollToLastMessage, setShouldScrollToLastMessage] =
        useState(true)
    const chatContainerRef = useRef<HTMLDivElement>(null)
    const { t } = useTranslation()
    const modelsList = modelsAvailable?.map((m) => m.name).join(', ')
    const modelToUse =
        modelsAvailable && modelsAvailable.length > 0 && modelsAvailable[0]
    const touched = useRef(false)

    usePageTitle(t('chatPageTitle'))

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

    const handleWheel: WheelEventHandler<HTMLDivElement> = (e) => {
        if (e.deltaY < 0) setShouldScrollToLastMessage(false)
    }

    const handleChatScroll = (e: UIEvent<HTMLElement>) => {
        const oldPostion = chatConteinerLastScrollPosition.current
        chatConteinerLastScrollPosition.current = e.currentTarget.scrollTop

        if (!oldPostion) {
            return
        }

        const deltaY = e.currentTarget.scrollTop - oldPostion

        // We need to account for that some AI models "stutter",
        // causing sometimes random scroll up.
        // Here we check if user has clicked the chat (maybe to scroll).
        const isUserScroll = mouseIsDown.current || touched.current
        if (deltaY < 0 && isUserScroll) {
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
                        onMouseDown={() => (mouseIsDown.current = true)}
                        onMouseUp={() => (mouseIsDown.current = false)}
                        onTouchStart={() => (touched.current = true)}
                        onTouchEnd={() => (touched.current = false)}
                        onWheel={handleWheel}
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
                <ChatOffline />
            )}
        </>
    )
}

export default Chat
