# Video Dubbing Application

This application provides a service that automatically dubs videos in different languages. It includes features like audio extraction, speech recognition, translation, text-to-speech (TTS) synthesis, and synchronization with the original video.

## Usage

- Upload a video to the platform.
- Select the target language for dubbing.
- Review the translation (optional).
- Preview the dubbed video (optional).
- Download the final video.

## Features

- Video upload and format validation
- Audio extraction from video
- Speech recognition and transcription
- Automated translation of text
- Text-to-speech generation in multiple languages
- Audio synchronization with original video
- Video rendering and export
- generate subtitles for animes (maybe)

## Requisitos Funcionais (RFs)

- [] deve ser possivel fazer upload de videos
- [] deve ser possivel extrair o audio do video
- [] deve ser possivel transcrever o audio do video
- [] deve ser possivel traduzir a transcrição do video para o idioma desejado
- [] deve ser possivel gerar um novo audio com a trascrição traduzida
- [] deve ser possivel sincronizar o audio dublado com o video original
- [] deve ser possivel baixar o video dublado
- [] deve retornar uma lista de termos que possivelmente nao fação sentido na trascrição
- [] deve ser possivel alterar a trascrição antes de fazer a dublagem

## Requisitos Não Funcionais (RNFs)

- [] suporte vídeos de até 2GB.

## Translate APIs

- LibreTranslate
- Microsoft Translator (Azure)
