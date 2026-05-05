app.post("/login", (req, res) => {
const { email, senha } = req.body;

const query = `SELECT * FROM users WHERE email = ? AND senha = ?`;

db.get(query, [email, senha], (err, user) => {
if (err) return res.status(500).json(err);

if (!user) {
return res.status(401).json({ error: "Login inválido" });
}

res.json({ message: "Login ok", user });
});
});


app.listen(3000, () => {
console.log("Servidor rodando na porta 3000");
});