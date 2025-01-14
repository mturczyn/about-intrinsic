export const baseUrl = import.meta.env.VITE_AI_SERVER_HOST
export const generatePath = '/api/generate'

export async function fetchAiResponse(
    prompt: string,
    modelToUse: string,
    onNewChunk: (string) => void,
    onAnswerComplete: () => void,
    onServerFault: () => void
) {
    const requestBody = {
        model: modelToUse,
        prompt,
    }

    try {
        const response = await fetch(baseUrl + generatePath, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer 1234',
                'Content-Type': 'text/event-stream',
            },
            body: JSON.stringify(requestBody),
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const reader = response.body?.getReader()
        if (!reader) {
            throw new Error(
                'ReadableStream not supported or no body in response.'
            )
        }

        const decoder = new TextDecoder('utf-8')
        let done = false

        while (!done) {
            const { value, done: streamDone } = await reader.read()
            done = streamDone

            if (value) {
                // Decode the current chunk of data
                const chunk = decoder.decode(value)
                handleChunk(chunk).forEach((x) => onNewChunk(x))
            }
        }

        onAnswerComplete()
    } catch (error) {
        console.error('Error in fetchAiResponse:', error)
        onServerFault()
    }
}

const handleChunk = (chunk: string): string[] => {
    const parsedChunks: string[] = []
    const match = chunk.match(/\}\s*\{/)

    // Sometimes AI server responds with 2 response
    // objects, making JSON.parase to fail. Here we account
    // for that.
    if (match?.index) {
        const chunk1 = chunk.slice(0, match.index + 1)
        const chunk2 = chunk.slice(match.index + 1 + match.length)

        parsedChunks.push(JSON.parse(chunk1).response)
        parsedChunks.push(...handleChunk(chunk2))
    } else {
        parsedChunks.push(JSON.parse(chunk).response)
    }

    return parsedChunks
}
