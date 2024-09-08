import whisper
import os
import sys
import json


# args = {'audioPath': 'output/audio/audio.mp3', 'whisperModel': 'tiny'}

args_sys = sys.argv[1]
args = json.loads(args_sys)

print(args)

whisper_model = args['whisperModel']
audio_path = args['audioPath']
filename_with_extension = os.path.basename(audio_path)
file_name, _ = os.path.splitext(filename_with_extension)

transcript_path = 'server/output/audio'
transcript_file_name = f'{transcript_path}/[subtitle]{file_name}.srt'


try:
  model = whisper.load_model(whisper_model)

except Exception as e:
  print(f"Erro ao carregar o modelo Whisper ({whisper_model}): {e}")
  exit(1)  

try: 
  print("Iniciando a transcrição...")

  transcript = model.transcribe(audio_path, verbose=True)
  print("Transcrição concluída.")
  print(json.dumps(transcript))

except FileNotFoundError:
  print("Arquivo de áudio não encontrado. Verifique o caminho e tente novamente.")
  exit(1)
except Exception as e:
  print(f"Erro ao transcrever o áudio: {e}")
  exit(1)


# try:
# # Salvar o resultado como legendas SRT
#   with open(transcript_file_name, "w") as srt_file:
#     for segment in transcript["segments"]:
#       start = segment["start"]
#       end = segment["end"]
#       text = segment["text"]
#       # Formatar os timestamps no estilo SRT (hh:mm:ss,ms)
#       start_time = f"{int(start // 3600):02}:{int((start % 3600) // 60):02}:{int(start % 60):02},{int((start % 1) * 1000):03}"
#       end_time = f"{int(end // 3600):02}:{int((end % 3600) // 60):02}:{int(end % 60):02},{int((end % 1) * 1000):03}"

#       # Escrever o segmento no arquivo SRT
#       srt_file.write(f"{segment['id'] + 1}\n")
#       srt_file.write(f"{start_time} --> {end_time}\n")
#       srt_file.write(f"{text.strip()}\n\n")

# except IOError as e:
#   print(f"Erro ao escrever o arquivo SRT: {e}")
#   exit(1)

# print(f"Legendas geradas em {transcript_file_name}")

# print(transcript['text'])

