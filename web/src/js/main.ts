import { Server } from 'socket.io'

const fileInput = document.getElementById('fileInput') as HTMLInputElement
const totalSizeOutput = document.getElementById('totalSize') as HTMLSpanElement
const uploadStatusOutput = document.getElementById(
	'uploadStatus',
) as HTMLSpanElement

const _ws = new WebSocket('ws://localhost:3333/ws')

_ws.onopen = (message) => {
	_ws.send('hello world')
}

_ws.onmessage = (event) => {
	console.log(event.data)
}

fileInput.addEventListener('change', updateStatus)

function formatBytes(bytes: number, decimals = 2) {
	if (bytes === 0) return '0 bytes'

	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

function updateStatus(): void {
	let totalSize: number = 0
	for (let i = 0; i < fileInput.files!.length; i++) {
		totalSize += fileInput.files![i].size
	}
	totalSizeOutput.innerHTML = `Pending bytes to upload: <strong> ${formatBytes(
		totalSize,
	)} </strong>`
}

function handleSubmit(): void {
	if (fileInput.files!.length > 0) {
		uploadStatusOutput.textContent = 'Status: Enviando...'
		// Simulação de upload
		setTimeout(() => {
			uploadStatusOutput.textContent = 'Status: Sucesso!'
		}, 2000)
	} else {
		alert('Por favor, selecione pelo menos um arquivo.')
	}
}

function handleReset(): void {
	fileInput.value = ''
	totalSizeOutput.innerHTML =
		'Pending bytes to upload: <strong>0 bytes</strong>'
	uploadStatusOutput.textContent = 'Status: Aguardando...'
}
