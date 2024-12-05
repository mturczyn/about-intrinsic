import { fetchAiResponse } from 'fetchAIResponse'
import { useEffect, useRef, useState } from 'react'
import './Chat.css'
import Markdown from 'react-markdown'

type ChatMessageType = 'sent' | 'received'

interface ChatMessage {
    type: ChatMessageType
    text: string
}

const Chat = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [aiAnswer, setAiAnswer] = useState<string>('')
    const [aiAnswerDone, setAiAnswerDone] = useState(true)
    const chatContainerRef = useRef<HTMLDivElement>(null)

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
        <div className="chat-with-input-container">
            <div ref={chatContainerRef} className="chat-container">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${
                            message.type === 'sent' ? 'sent' : 'received'
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
            <input onKeyUp={handleInputKeyUp} />
        </div>
    )
}

export default Chat
