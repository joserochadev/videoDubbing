import { IAudioModule } from '../modules/IAudioModule'

interface IExtractAudioFromVideoUseCaseRequest {
	videoPath: string
}

export class ExtractAudioFromVideoUseCase {
	constructor(private audioModule: IAudioModule) {}

	async execute({
		videoPath,
	}: IExtractAudioFromVideoUseCaseRequest): Promise<void> {
		const result = await this.audioModule.extractAudioFromVideo(videoPath)

		if (result === null) {
			throw new Error('Unable to extract audio from video.')
		}
	}
}
