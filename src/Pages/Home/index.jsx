import './styles.css'
import Lixo from '../../assets/trash.svg'

function Home() {

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

    <div className='usuarios-cadastrados'>
      <div className='infos'>
      <p>Nome: </p>
      <p>Idade: </p>
      <p>E-mail: </p>
      </div>
      <img src={Lixo} />
    </div>
    </div>
  )
}

export default Home