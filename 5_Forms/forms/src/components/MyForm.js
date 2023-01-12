import { useState } from 'react'


const MyForm = ({ user }) => {
  // Controlled inputs
  // 3 - gereenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "")

  const handleName = (e) => {
    setName(e.target.value);
  }

  console.log(name);
  console.log(email);
  console.log(bio);
  console.log(role);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando foorumário");
    console.log(name, email, bio, role);


    //Validação
    //envio
    //...

    // 7: limpar formulários
    // é MUITO simples, um macete é deficinir o "setCampo" como uma string vazia e apos o envio, o campo do form reseta
    // exemplo prático é para cadastro de produtos
    setName("");
    setEmail("");
    setBio("");
    setRole("");

  }

  return (
    <div>
      {/* 5 - Envio de form  */}
      {/*1- Criaçao de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder="Digite Seu nome" onChange={handleName} value={name} />
        </div>
        {/*2- Label envolvendo o input */}
        <label>
          <span>E-mail:</span>
          <input type="email" name="E-mail" placeholder="Digite seu E-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        {/* 8- Text Area */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder="Deescrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
          {/* 9- select (HTML) */}
          <label>
            <span>Função no Sistema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm