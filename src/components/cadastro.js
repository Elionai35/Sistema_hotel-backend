app.post("/register", (req, res) => {
const { nome, email, senha } = req.body;

const query = `INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)`;

db.run(query, [nome, email, senha], function (err) {
if (err) {
return res.status(400).json({ error: "Email já existe" });
}
res.json({ message: "Usuário criado com sucesso" });
});
});