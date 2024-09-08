export interface IAudioModule {
	extractAudioFromVideo(videoPath: string): Promise<void | null>
}
