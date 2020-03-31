const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const gdrive = require('./gdrive-auth');
// const gdriveUpload = require("./gdrive");
// gdriveUpload.imageUpload("imagem.jpeg", "./imagem.jpeg", (id) => {
//     console.log(id);
// });

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(gdrive);

app.listen(3333);
