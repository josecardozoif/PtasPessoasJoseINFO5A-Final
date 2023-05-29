const express = require('express');
const path = require('path');
const { Usuario } = require('./models');

const app = express();

// Configurar o mecanismo de visualização
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota para listar os usuários
app.get('/usuarios', async function (req, res) {
  try {
    const usuarios = await Usuario.findAll();
    res.render('index', { usuarios });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os usuários.' });
  }
});

// Rota para adicionar um novo usuário
app.get('/usuarios/adicionar', async function (req, res) {
  res.render('usuarios/adicionar');
});

app.post('/usuarios/adicionar', async function (req, res) {
  try {
    await Usuario.create(req.body);
    res.redirect('/usuarios');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ocorreu um erro ao criar o usuário.' });
  }
});

// Rota para atualizar um usuário
app.get('/usuarios/atualizar', async function (req, res) {
  try {
    const usuario = await Usuario.findByPk(req.query.id);
    res.render('usuarios/atualizar', { usuario });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ocorreu um erro ao atualizar o usuário.' });
  }
});

app.post('/usuarios/atualizar', async function (req, res) {
  try {
    await Usuario.update(req.body, { where: { id: req.body.id } });
    res.redirect('/usuarios');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ocorreu um erro ao atualizar o usuário.' });
  }
});

// Rota para excluir um usuário
app.post('/usuarios/delete', async function (req, res) {
  try {
    await Usuario.destroy({ where: { id: req.body.id } });
    res.redirect('/usuarios');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ocorreu um erro ao excluir o usuário.' });
  }
});

app.listen(3000, function () {
  console.log('App de Exemplo escutando na porta 3000!');
});

app.get('/usuarios/delete', async function(){
  try {
    await Usuario.destroy({ where: { id: req.body.id } });
    res.redirect('/usuarios');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Ocorreu um erro ao excluir o usuário.' });
  }
})