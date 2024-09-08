import { describe, expect, it, vi } from 'vitest'
import { GenerateAudioTranscriptUseCase } from './GenerateAudioTranscriptUseCase'
import { TranscriptModule } from '@/modules/transcript/TranscriptModule'

describe('Genetare audio transcript use case', () => {
	it('should be able to generate transcription', async () => {
		const transcriptModule = new TranscriptModule()
		const sut = new GenerateAudioTranscriptUseCase(transcriptModule)

		const audioPath = 'output/audio/audio.mp3'

		const transcriptMock = vi
			.spyOn(transcriptModule, 'transcript')
			.mockResolvedValueOnce('This is a sample transcript')

		const { transcription } = await sut.execute({ audioPath })

		// expect(transcriptMock).toHaveBeenCalledWith(audioPath)
		expect(transcription).toBeTruthy()
		expect(transcription.length).toBeGreaterThan(0)
		expect(typeof transcription).toBe('string')
	})

	it('should not be able to generate transcription with wrong audio path', async () => {
		const transcriptModule = new TranscriptModule()
		const sut = new GenerateAudioTranscriptUseCase(transcriptModule)

		const audioPath = 'wrong_audio_path'

		await expect(() => sut.execute({ audioPath })).rejects.toBeInstanceOf(Error)
	})
})
