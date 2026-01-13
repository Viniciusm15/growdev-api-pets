import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//Definir rotas

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`O servidor está executando na porta ${port}`);
});
