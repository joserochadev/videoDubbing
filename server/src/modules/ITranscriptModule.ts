export interface ITranscript {
	audioPath: string
	whisperModel: 'tiny' | 'base' | 'small' | 'medium' | 'large'
}

export interface ITranscriptModule {
	transcript(audioData: ITranscript): Promise<string>
}
