import { describe, it } from 'vitest'
import { GenerateAudioTranscriptUseCase } from './GenerateAudioTranscriptUseCase'

describe('Genetare audio transcript use case', () => {
	it.only('should be able to generate transcription', async () => {
		const sut = new GenerateAudioTranscriptUseCase()

		const audioPath = 'kkk'

		await sut.execute({ audioPath })
	})
})
