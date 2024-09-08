## Gerando transcrição de audio com timestamps

```python


import whisper

# Carregar o modelo do Whisper
model = whisper.load_model("base")  # Escolha o tamanho do modelo (tiny, base, small, medium, large)

# Transcrever o arquivo de áudio e obter os timestamps
result = model.transcribe("seu_audio.wav", verbose=True)

# Salvar o resultado como legendas SRT
with open("transcricao.srt", "w") as srt_file:
    for segment in result["segments"]:
        start = segment["start"]
        end = segment["end"]
        text = segment["text"]
        # Formatar os timestamps no estilo SRT (hh:mm:ss,ms)
        start_time = f"{int(start // 3600):02}:{int((start % 3600) // 60):02}:{int(start % 60):02},{int((start % 1) * 1000):03}"
        end_time = f"{int(end // 3600):02}:{int((end % 3600) // 60):02}:{int(end % 60):02},{int((end % 1) * 1000):03}"

        # Escrever o segmento no arquivo SRT
        srt_file.write(f"{segment['id'] + 1}\n")
        srt_file.write(f"{start_time} --> {end_time}\n")
        srt_file.write(f"{text.strip()}\n\n")

print("Legendas geradas em transcricao.srt")


```

## Executar o script Python no Node.js

```js
const { exec } = require("child_process");

exec("python transcrever_audio.py", (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao executar o script Python: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Erro: ${stderr}`);
    return;
  }
  console.log(`Saída do script Python: ${stdout}`);
});
```
