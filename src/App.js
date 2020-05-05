import React, { useState, useEffect } from 'react';
import './services/Api';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/Api';
import PersonalItem from './components/PersonalItem';
import PersonalForm from './components/PersonalForm';

function App() {

  const [personals, setPersonals] = useState([]);

  useEffect(() => {

    async function loadPersonals(params) {
      const response = await api.get('/personals');
      setPersonals(response.data)
    }

    loadPersonals();

  })

  async function handleAddPersonal(data) {

    const response = await api.post('/personals', data)

    setPersonals([...personals, response.data]);

  }
  
  return (
    <>
      <div id="app">
        <aside>
          <strong>Cadastrar Personais</strong>
          <PersonalForm onSubmit={handleAddPersonal} />
        </aside>
        <main>
          <ul>
            {personals.map(personals => (
              <PersonalItem key={personals.id} personal={personals} />
            ))}
          </ul> 
        </main>
      </div>
    </>
  );
}

export default App;
