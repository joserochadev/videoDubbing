import { exec, spawn } from 'node:child_process'

interface IGenerateAudioTranscriptUseCaseRequest {
	audioPath: string
	// audioLanguage: string
	whisperModel?: 'tiny' | 'base' | 'small' | 'medium' | 'large'
}

export class GenerateAudioTranscriptUseCase {
	async execute({
		audioPath,
		// audioLanguage,
		whisperModel = 'tiny',
	}: IGenerateAudioTranscriptUseCaseRequest) {
		const audioData = JSON.stringify({
			audioPath,
			whisperModel,
		})

		const transcriptProcess = spawn('python3', [
			'-u',
			'src/whisper/generate_transcript.py',
			audioData,
		])

		transcriptProcess.stdout.on('data', (data) => {
			console.log(`${data}`)
		})

		transcriptProcess.stderr.on('data', (data) => {
			console.error(`Erro: ${data}`)
		})

		transcriptProcess.on('close', (code) => {
			console.log(`Processo finalizado com código ${code}`)
		})
	}
}
