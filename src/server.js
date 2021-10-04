import express from 'express'
import bodyParser from 'body-parser'

// const articlesInfo = {
//     'learn-react': {
//         upvotes: 0
//     },
//     'learn-node': {
//         upvotes: 0,
//     },
//     'my-thoughts-on-resumes': {
//         upvotes: 0
//     }
// }

const app = express()

// TODO: deprecated
app.use(bodyParser.json())

app.get('/hello', (req, res) => res.send('hello'))
app.get('/hello/:name', (req, res) => res.send(`hello ${req.params.name}`))
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`))

app.listen(8000, () => console.log('Listening on port 8000'))