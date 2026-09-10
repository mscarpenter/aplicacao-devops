import express from "express"
import path from "path"

const app = express()
const PORT = process.env.PORT || 3333

const data = {'integrantes':[

{'nome':'Bernardo Bregeron'},
{'nome':'Lucas Ricci'},
{'nome':'Mateus Carpenter'}

]}

app.get('/', (req, res) => {
  res.sendFile( "./src/views/index.html", {root: process.cwd()});
});


app.get('/integrantes', (req, res) => {

  res.json(data)

})

app.listen(PORT, () => {
  console.log("server is running")
})