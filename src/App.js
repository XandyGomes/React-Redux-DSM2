import './App.css';

import Card from './components/Card'
import Intervalo from './components/Intervalo'

function App() {
  return (
    <div className="App">
      <h1>Projeto React-Redux</h1>

      <div className='linha'>
        <Intervalo></Intervalo>
      </div>

      <div className='linha'>
        <Card title="Card 2" green>TESTE 2</Card>
        <Card title="Card 3" blue>TESTE 3</Card>
        <Card title="Card 4" purple>TESTE 4</Card>
      </div>


    </div>
  );
}

export default App;
