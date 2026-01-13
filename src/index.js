import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import router from './routes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(router); 

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`Documentação: http://localhost:${port}/`);
});
