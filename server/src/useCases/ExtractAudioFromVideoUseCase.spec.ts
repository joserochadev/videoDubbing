import { describe, expect, it, vi } from 'vitest'
import { ExtractAudioFromVideoUseCase } from './ExtractAudioFromVideoUseCase'
import { AudioModule_ffmpeg } from '@/modules/ffmpeg/AudioModule_ffmpeg'

describe('Extract audio from video use case', () => {
	it('shoul be able to extract audio from video', async () => {
		const audioModule = new AudioModule_ffmpeg()
		const sut = new ExtractAudioFromVideoUseCase(audioModule)

		// Mock do método extractAudioFromVideo
		const extractAudioMock = vi
			.spyOn(audioModule, 'extractAudioFromVideo')
			.mockResolvedValueOnce()

		await sut.execute({ videoPath: './video.mp4' })

		expect(extractAudioMock).toHaveBeenCalledWith('./video.mp4')
		expect(extractAudioMock).toHaveBeenCalledTimes(1)
	})

	it('should throw an erro if extraction fails', async () => {
		const audioModule = new AudioModule_ffmpeg()
		const sut = new ExtractAudioFromVideoUseCase(audioModule)

		// Mock do método extractAudioFromVideo
		const extractAudioMock = vi
			.spyOn(audioModule, 'extractAudioFromVideo')
			.mockResolvedValueOnce(null)

		await expect(() =>
			sut.execute({ videoPath: './video.mp4' }),
		).rejects.toThrow('Unable to extract audio from video.')

		expect(extractAudioMock).toHaveBeenCalledWith('./video.mp4')
		expect(extractAudioMock).toHaveBeenCalledTimes(1)
	})
})
