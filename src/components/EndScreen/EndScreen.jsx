import './EndScreen.css'

const EndScreen = ({retry,score}) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>Sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>REINICIAR O JOGO</button>
    </div>
  )
}

export default EndScreen