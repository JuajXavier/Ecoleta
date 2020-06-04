import express from 'express';

const app = express();
app.use(express.json());

const users = ['Juaj', 'Clarinha'];

app.get('/users', (req, res)  => {
  //filtro -> const filteredUsers = search ? users.filter(user => user.includes(seach)) : users;
  return res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id); // requisição dos parametros da rota;
                                    // Number pro ts entender, ele le como string em vez de number;
  const user = users[id]; // pegar um usuário de dentro do array na posição id;

  return res.json(user);
});
  

app.post('/users', (req, res) => {
  const data = req.body;

  const user = {
    name: data.name,
    email: data.email,
  }

  return res.json(user);
});

app.listen(3333);