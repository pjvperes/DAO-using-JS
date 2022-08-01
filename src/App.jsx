import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {
  // Use o hook connectWallet que o thirdweb nos dá.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  // Esse é o caso em que o usuário ainda não conectou sua carteira
  // ao nosso webapp. Deixe ele chamar connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Bem-vindos ao App da República. Aqui serão tomadas decisões da organização da casa.</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Conecte sua carteira
        </button>
      </div>
    );
  }
  
  // Esse é o caso em que temos o endereço do usuário
  // o que significa que ele conectou sua carteira ao nosso site!
  return (
    <div className="landing">
      <h1>Muito bem! Agora você está conectado à DAO da República!</h1>
    </div>);
};

export default App;