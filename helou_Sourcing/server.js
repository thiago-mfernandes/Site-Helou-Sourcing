const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');

//instancia de express na const app
const app = express();

//adicionando middlewar's (funcoes que tratam requisicoes que chegam no meu bak-end) a esta instância:
//---------------------------------------------------------------------------------------------------

//o cors evita que o front-end faca chamada para o back-end, entao preciso habilitá-lo
app.use(require('cors')());
//pegar as info's das requisicoes e transformar em json
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'smtp.gmail.com',
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  auth: {
    user: 'swordkenshin@gmail.com',
    pass: 'branco844246'
  },tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

sendMail = (req, res) => {
  const mail = {
    from: req.body.email,
    to: 'falecomobranco@yahoo.com.br',
    subject: `Assunto: ${req.body.subject}`,
    text: `Email enviado por ${req.body.name} - Email: ${req.body.email}`
  }
  transporter.sendMail(mail).then((trans) => {
    res.status(200).send('E-mail enviado');
  }).catch((error) => {
      res.status(500).send('Houve um erro ao enviar e-mail. Detalhe: ' + error);
  });
}

app.use(express.urlencoded({ extended: true }));

//aqui, o post estara recebendo uma requisicao de um form enviando dados
app.post('/send', sendMail)


//express.static serve os arquivos estaticos
app.use(express.static(path.join(__dirname, 'build')));
// alterar a configuracao da aplicacao para subir o server em vez dos arquivos estaticos do react:
//ir no package.json nos scripts

const port = process.env.PORT || 3000;

app.listen(port,() => {
  console.log(`Server Starting at port 3000`);
})


