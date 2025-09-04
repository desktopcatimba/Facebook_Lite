import mysql from "mysql2";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "whatsapp"
});

conn.connect((err) => {
  if (err) {
    console.error("Erro ao conectar MySQL:", err);
    return;
  }
  console.log("MySQL conectado!");
});

export default conn;
