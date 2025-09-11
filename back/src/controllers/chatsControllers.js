const conn = require('../db/conn')

const chatsControllers = {
  getChat: (req, res) => {
    const id = req.params.id

    const sql = `
      SELECT 
          c.id,
          CASE 
              WHEN c.is_group = 1 THEN c.nome 
              ELSE u.nome 
          END AS nome,
          CASE 
              WHEN c.is_group = 1 THEN NULL   -- se quiser, depois troca por c.foto_grupo
              ELSE u.foto_perfil
          END AS foto,
          c.is_group,
          c.criado_em,
          m.conteudo AS ultima_mensagem,
          DATE_FORMAT(m.enviado_em, '%H:%i') AS hora
      FROM chats c
      JOIN chat_participants cp 
          ON c.id = cp.chat_id
      LEFT JOIN users u 
          ON u.id = (
              SELECT cp2.user_id 
              FROM chat_participants cp2
              WHERE cp2.chat_id = c.id 
                AND cp2.user_id <> cp.user_id
              LIMIT 1
          )
      LEFT JOIN messages m 
          ON m.id = (
              SELECT m2.id 
              FROM messages m2 
              WHERE m2.chat_id = c.id
              ORDER BY m2.enviado_em DESC
              LIMIT 1
          )
      WHERE cp.user_id = ?;
    `;

    conn.query(sql, [id], (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ mensagem: 'Erro na busca de chats', erro: err.message })
      }

      res.status(200).json(data)
    })
  }
}

module.exports = chatsControllers
