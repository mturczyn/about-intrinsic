export const baseUrl = import.meta.env.VITE_AI_SERVER_HOST
const generatePath = '/api/generate'
export const listModels = '/api/tags'

export interface Model {
    name: string
    model: string
}

export async function checkModelsAvailable(): Promise<Model[]> {
    try {
        const response = await fetch(baseUrl + listModels, {
            headers: {
                Authorization: 'Bearer 1234',
            },
        })

        if (!response.ok) {
            return []
        }

        const json = await response.text()
        const models = JSON.parse(json) as { models: Model[] }
        return models.models
    } catch (error) {
        console.warn('Error in checkAiAvailability:', error)
        return []
    }
}

export async function fetchAiResponse(
    prompt: string,
    onNewChunk: (string) => void,
    onAnswerComplete: () => void
) {
    const requestBody = {
        model: 'llama3.2',
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
                onNewChunk(JSON.parse(chunk).response)
            }
        }

        onAnswerComplete()
    } catch (error) {
        console.error('Error in fetchAiResponse:', error)
        throw error
    }
}
