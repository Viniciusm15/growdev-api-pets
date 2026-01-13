export const validarPetMiddleware = (req, res, next) => {
    try {
        const { nome, raca, idade, nomeTutor } = req.body;
        const errors = [];

        if (!nome || nome.trim() === '') errors.push("Nome é obrigatório");
        if (!raca || raca.trim() === '') errors.push("Raça é obrigatória");
        if (!idade) errors.push("Idade é obrigatória");
        if (!nomeTutor || nomeTutor.trim() === '') errors.push("Nome do tutor é obrigatório");

        if (idade && typeof idade !== 'number') {
            errors.push("Idade deve ser um número");
        }

        if (idade && idade < 0) {
            errors.push("Idade não pode ser negativa");
        }

        if (errors.length > 0) {
            return res.status(400).json({
                error: "Dados inválidos",
                details: errors
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
