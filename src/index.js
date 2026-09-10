data = {'integrantes':[

{'nome':'Bernardo Bregeron'},
{'nome':'Lucas Ricci'},
{'nome':'Mateus Carpenter'}

]}

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});


app.get('/integrantes', (req, res) => {

res.json(data)

})