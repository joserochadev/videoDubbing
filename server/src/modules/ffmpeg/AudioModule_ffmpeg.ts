import ffmpeg from 'fluent-ffmpeg'

import { IAudioModule } from '../IAudioModule'

export class AudioModule_ffmpeg implements IAudioModule {
	async extractAudioFromVideo(videoPath: string): Promise<void | null> {
		const audio = new Promise<void | Error>((resolve, reject) => {
			ffmpeg(videoPath)
				.output('./output/audio/audio.mp3')
				.noVideo()
				.format('mp3')
				.outputOptions('-ab', '192k')
				.on('end', () => {
					console.log('Áudio extraído com sucesso!')
					resolve()
				})
				.on('error', (err: Error) => {
					console.error('Erro ao extrair o áudio:', err.message)
					reject(err)
				})
				.run()
		})

		if (audio instanceof Error) {
			return null
		}
	}
}
