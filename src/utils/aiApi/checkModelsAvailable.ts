import { baseUrl, listModels } from './constants'
import { LanguageModel } from './LanguageModel'

export async function checkModelsAvailable(): Promise<LanguageModel[]> {
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
        const models = JSON.parse(json) as { models: LanguageModel[] }
        return models.models
    } catch (error) {
        console.warn('Error in checkAiAvailability:', error)
        return []
    }
}
