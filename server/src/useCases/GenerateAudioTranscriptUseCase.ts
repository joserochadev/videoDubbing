import { ITranscriptModule } from '@/modules/ITranscriptModule'

interface IGenerateAudioTranscriptUseCaseRequest {
	audioPath: string
	// audioLanguage: string
	whisperModel?: 'tiny' | 'base' | 'small' | 'medium' | 'large'
}

interface IGenerateAudioTranscriptUseCaseResponse {
	transcription: string
}

export class GenerateAudioTranscriptUseCase {
	constructor(private transcriptModule: ITranscriptModule) {}

	async execute({
		audioPath,
		whisperModel = 'tiny',
	}: IGenerateAudioTranscriptUseCaseRequest): Promise<IGenerateAudioTranscriptUseCaseResponse> {
		const transcription = await this.transcriptModule.transcript({
			audioPath,
			whisperModel,
		})

		if (transcription === '') {
			throw new Error('Unable to generate transcript.')
		}

		return { transcription }
	}
}
