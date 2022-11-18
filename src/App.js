import './App.css';

import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Projeto React-Redux</h1>

      <div className='linha'>
        <Card title="Card 1" red>TESTE 1</Card>
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
