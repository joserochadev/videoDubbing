import { spawn } from 'node:child_process'
import { ITranscript, ITranscriptModule } from '../ITranscriptModule'

export class TranscriptModule implements ITranscriptModule {
	async transcript({ audioPath, whisperModel }: ITranscript): Promise<string> {
		const audioData = JSON.stringify({
			audioPath,
			whisperModel,
		})

		let transcript = ''

		const transcriptProcess = spawn('python3', [
			'-u',
			'src/whisper/generate_transcript.py',
			audioData,
		])

		transcriptProcess.stdout.on('data', (data) => {
			console.log(`${data}`)
			transcript = data.text
		})

		transcriptProcess.stderr.on('data', (data) => {
			console.error(`Erro: ${data}`)
			throw new Error(`Erro: ${data}`)
		})

		transcriptProcess.on('close', (code) => {
			console.log(`Processo finalizado com código ${code}`)
		})

		return transcript
	}
}
