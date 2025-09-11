const conn = require('../db/conn');

const UserController = {
  getAll: (req, res) => {
    conn.query('SELECT * FROM users', (err, data) => {
      if (err) {
        return res.status(500).json({
          mensagem: 'Erro na busca de usuários',
          erro: err.message,
        });
      }

      return res.status(200).json(data);
    });
  },

  getById: (req,res) =>{
    const id = req.params.id
    conn.query("select * from users where id = ? ", [id], (err,data)=>{
        if(err)
            return res.status(500).json({
          mensagem: 'Erro na busca de usuários',
          erro: err.message,
        })

        if(data.length==0)
            return res.status(404).json({
          mensagem: 'Usuário não encontrado'
        })

        return res.status(200).json(data[0])
    })

  },

  create:(req,res)=>{
    const {nome,telefone, senha, foto_perfil} = req.body

    conn.query('select * from users where nome = ? or telefone = ?', [nome,telefone],(err,data)=>{
        if(err)
            return res.status(500).json({mensagem: 'Erro ao criar'})
        if(data.length > 0)
            return res.status(404).json({mensagem: 'Dados já usados'})
        conn.query('insert into users (nome, telefone,senha,foto_perfil) values (?,?,?,?)',[nome,telefone,senha,foto_perfil],(err)=>{
            if(err)
                return res.status(500).json({mensagem: 'Erro ao criar',erro:err.message})

            return res.status(200).json({mensagem: 'User criado!'})
        })
    })

  },

  update:(req,res)=>{
    const {nome,telefone, senha, foto_perfil} = req.body
    const id = req.params.id
    conn.query('select * from users where id = ?', [id],(err,data)=>{
        if(err)
            return res.status(500).json({mensagem: 'Erro ao atualizar'})
        if (data.length === 0) 
            return res.status(404).json({ mensagem: "Usuário não encontrado!" });

        conn.query('update users set nome = ?, telefone = ?, senha = ?, foto_perfil = ? where id = ?',[nome,telefone,senha,foto_perfil,id],(err)=>{
            if(err)
                return res.status(500).json({mensagem: 'Erro ao atualizar', erro:err.message})  

            return res.status(200).json({mensagem: 'User atualizado!'})
            })

    })

  }
,

  deletar:(req,res)=>{
     const id = req.params.id
    conn.query("delete from users where id = ? ", [id], (err)=>{
        if(err)
            return res.status(500).json({
          mensagem: 'Erro ao deletar usuário',
          erro: err.message,
        })
        return res.status(200).json({mensagem:'User deletado'})
    })
  },

};

module.exports = UserController;
