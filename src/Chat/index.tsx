import { checkModelsAvailable, fetchAiResponse, Model } from 'AiApi'
import { useEffect, useRef, useState } from 'react'
import './Chat.css'
import Markdown from 'react-markdown'
import { t } from 'i18next'

type ChatMessageType = 'sent' | 'received'

interface ChatMessage {
    type: ChatMessageType
    text: string
}

const Chat = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [aiAnswer, setAiAnswer] = useState<string>('')
    const [modelsAvailable, setModelsAvailable] = useState<Model[]>()
    const [aiAnswerDone, setAiAnswerDone] = useState(true)
    const chatContainerRef = useRef<HTMLDivElement>(null)
    const aiAvailable = modelsAvailable && modelsAvailable.length > 0
    const modelsList = modelsAvailable?.map((m) => m.name).join(', ')

    useEffect(() => {
        if (!aiAvailable) return

        const availabilitiyMessage: ChatMessage = {
            text: t('chatbotIntro', { modelsList: modelsList }),
            type: 'received',
        }

        setMessages((m) => [...m, availabilitiyMessage])
    }, [aiAvailable])

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

        setAiAnswerDone(false)
        fetchAiResponse(
            promptText,
            (chunk) => setAiAnswer((x) => x + chunk),
            () => setAiAnswerDone(true)
        )
    }

    // Scroll to the bottom when messages update
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight
        }
    }, [messages, aiAnswer])

    return (
        <>
            {aiAvailable ? (
                <div className="chat-with-input-container">
                    <div ref={chatContainerRef} className="chat-container">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${
                                    message.type === 'sent'
                                        ? 'sent'
                                        : 'received'
                                }`}
                            >
                                <Markdown>{message.text}</Markdown>
                            </div>
                        ))}
                        {aiAnswer && (
                            <div className={'message received'}>
                                <Markdown>{aiAnswer}</Markdown>
                            </div>
                        )}
                    </div>
                    <textarea
                        placeholder={t('yourMessage')}
                        onKeyUp={handleInputKeyUp}
                    ></textarea>
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

export default Chat
