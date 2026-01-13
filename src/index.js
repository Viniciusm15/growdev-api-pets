import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { pets } from './pets.js'
import { randomUUID } from 'crypto';
import { validarPetMiddleware } from './middlewares.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ROTA RAIZ - Documentação
app.get('/', (req, res) => {
    res.json({
        message: "🐾 API de Pets - Creche para Animais",
        version: "1.0.0",
        endpoints: {
            getAllPets: "GET /pets",
            getPetById: "GET /pets/:id",
            createPet: "POST /pets",
            updatePet: "PUT /pets/:id",
            deletePet: "DELETE /pets/:id"
        }
    });
});

// LISTAR TODOS OS PETS - GET /pets
app.get('/pets', (req, res) => {
    try {
        res.status(200).json({
            message: "Pets encontrados com sucesso!",
            count: pets.length,
            data: pets
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pets" });
    }
});

// BUSCAR PET POR ID - GET /pets/:id
app.get('/pets/:id', (req, res) => {
    try {
        const { id } = req.params;
        const pet = pets.find(p => p.id === id);

        if (!pet) {
            return res.status(404).json({ error: "Pet não encontrado" });
        }

        res.status(200).json({
            message: "Pet encontrado com sucesso!",
            data: pet
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pet" });
    }
});

// CADASTRAR NOVO PET - POST /pets
app.post('/pets', [validarPetMiddleware], (req, res) => {
    try {
        const { nome, raca, idade, nomeTutor } = req.body;

        const novoPet = {
            id: randomUUID(),
            nome,
            raca,
            idade,
            nomeTutor
        };

        pets.push(novoPet);

        res.status(201).json({
            message: "Pet cadastrado com sucesso!",
            data: novoPet
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar pet" });
    }
});

// ATUALIZAR PET - PUT /pets/:id
app.put('/pets/:id', [validarPetMiddleware], (req, res) => {
    try {
        const { id } = req.params;
        const { nome, raca, idade, nomeTutor } = req.body;

        const pet = pets.find(p => p.id === id);
        if (!pet) {
            return res.status(404).json({ error: "Pet não encontrado" });
        }

        pet.nome = nome;
        pet.raca = raca;
        pet.idade = idade;
        pet.nomeTutor = nomeTutor;

        res.status(200).json({
            message: "Pet atualizado com sucesso!",
            data: pets
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar pet" });
    }
});

// DELETAR PET - DELETE /pets/:id
app.delete('/pets/:id', (req, res) => {
    try {
        const { id } = req.params;
        const petIndex = pets.findIndex(p => p.id === id);

        if (petIndex === -1) {
            return res.status(404).json({ error: "Pet não encontrado" });
        }

        const petRemovido = pets.splice(petIndex, 1)[0];

        res.status(200).json({
            message: "Pet removido com sucesso!",
            data: petRemovido
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao remover pet" });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: "Rota não encontrada" });
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`Documentação: http://localhost:${port}/`);
});
