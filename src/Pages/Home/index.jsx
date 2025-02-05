import { useEffect, useState, useRef } from 'react'
import './styles.css'
import Lixo from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {
  const [usuarios, setUsuarios] = useState([])
  
  const InputName = useRef()
  const InputIdade = useRef()
  const InputEmail = useRef()


  async function getUsuarios(){
    const usuariosApi = await api.get('/usuarios')
  
    setUsuarios(usuariosApi.data)
  }

  async function createUsuario(){
    await api.post('/usuarios', {
      name: InputName.current.value,
      age: InputIdade.current.value,
      email: InputEmail.current.value
    })
  
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
          <input type="text" placeholder='Nome' ref={InputName} />
          <input type="number" placeholder='Idade' ref={InputIdade} />
          <input type="email" placeholder='E-mail' ref={InputEmail} />
          <input type="submit" onClick={createUsuario}/>
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