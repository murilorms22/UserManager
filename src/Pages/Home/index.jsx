import { useEffect, useState } from 'react'
import './styles.css'
import Lixo from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {
  const [usuarios, setUsuarios] = useState([])
  

  async function getUsuarios(){
    const usuariosApi = await api.get('/usuarios')
  
    setUsuarios(usuariosApi.data)
  }

  useEffect(() => {
    getUsuarios()
  }, [])

  return (
    <div className='Home'>
      <div className='container'>
        <h1>Cadastro de usuário</h1>
        <form>
          <input type="text" placeholder='Nome' />
          <input type="number" placeholder='Idade' />
          <input type="email" placeholder='E-mail' />
          <input type="submit" />
        </form>
      </div>

      {usuarios.map((usuario) => (

        <div className='usuarios-cadastrados' key={usuario.id}>
          <div className='infos'>
            <p>Nome: <span>{usuario.name}</span></p>
            <p>Idade: <span>{usuario.age}</span></p>
            <p>E-mail: <span>{usuario.email}</span></p>
          </div>
          <img src={Lixo} />
        </div>

      ))}


    </div>
  )
}

export default Home