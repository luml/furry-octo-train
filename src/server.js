import express from 'express'
import bodyParser from 'body-parser'

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
        comments: []
    },
    'learn-node': {
        upvotes: 0,
        comments: []
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
        comments: []
    }
}

const app = express()

// TODO: deprecated
app.use(bodyParser.json())

// add endpoints
app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name
    articlesInfo[articleName].upvotes++
    res.status(200).send(`${articleName} has been voted ${articlesInfo[articleName].upvotes} !`)
})

app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body
    const articleName = req.params.name
    articlesInfo[articleName].comments.push({ username, text })
    res.status(200).send(articlesInfo[articleName])
})

app.listen(8000, () => console.log('Listening on port 8000'))