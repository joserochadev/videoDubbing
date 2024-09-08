import fastify from 'fastify'
import fastifyWebsocket from '@fastify/websocket'

export const app = fastify({ logger: true })

app.register(fastifyWebsocket)

app.register(async function (app) {
	app.get('/ws', { websocket: true }, (socket, request) => {
		socket.on('message', (msg) => {
			socket.send('hi from server')
		})

		console.log('test')
	})
})
