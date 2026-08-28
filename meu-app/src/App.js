import React from 'react';
import './App.css';

function App() {
  const dados = [
    { id: '1', nome: 'João' },
    { id: '2', nome: 'Maria' },
    { id: '3', nome: 'Pedro' },
    { id: '4', nome: 'Ana' },
  ];

  return (
    <div className="App">
      <h1>Minha Lista</h1>

      <div>
        {dados.map((item) => (
          <div key={item.id}>
            {item.nome}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;