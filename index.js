const express = require("express");
const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: "Semana omnistack 11.0",
        aluno: 'Brenao',
    });
});

app.listen(3333);
//mudando de nome