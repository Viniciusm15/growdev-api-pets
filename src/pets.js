import { randomUUID } from 'crypto';

export const pets = [
    {
        id: randomUUID(),
        nome: "Daphne",
        raca: "Vira-lata",
        idade: 4,
        nomeTutor: "José Silva"
    },
    {
        id: randomUUID(),
        nome: "Thor",
        raca: "Golden Retriever",
        idade: 2,
        nomeTutor: "Ana Paula Santos"
    },
    {
        id: randomUUID(),
        nome: "Luna",
        raca: "Siamês",
        idade: 5,
        nomeTutor: "Carlos Eduardo Oliveira"
    }
];
