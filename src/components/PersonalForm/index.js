import React, { useState, useEffect } from "react";
import './styles.css';

function PersonalForm({ onSubmit }) {
    
  const [name, setName] = useState('');
  const [cref, setCref] = useState('');
  const [skills, setSkills] = useState('');
  const [bio, setBio] = useState('');
  const [birth_date, setBirth_date] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [pagWeb, setPagWeb] = useState('');
  const [email, setEmail] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
        name,
        cref,
        skills,
        bio,
        birth_date,
        whatsapp,
        pagWeb,
        email,
        latitude,
        longitude
      });

      setName('');
      setCref('');
      setBio('');
      setSkills('');
      setBirth_date('');
      setWhatsapp('');
      setPagWeb('');
      setEmail('');
      setLatitude('');
      setLongitude('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="nome">Nome</label>
        <input 
          name="nome" 
          id="nome" 
          required 
          value= {name}
          onChange= {e => setName(e.target.value)}
      />
      </div>

      <div className="input-block">
        <label htmlFor="habilidades">Skills</label>
        <input 
          name="habilidades" 
          id="habilidades" 
          required
          value= {skills} 
          onChange= {e => setSkills(e.target.value)}
        />
      </div>

        <div className="input-block">
            <label htmlFor="biografia">Bio</label>
            <textarea id="biografia" 
              rows="8" 
              cols="35"
              value= {bio}
              onChange= {e => setBio(e.target.value)}
            />
        </div>
              
        <div className="input-block">
          <label htmlFor="birth_date">Idade</label>
          <input 
            type="date"
            value= {birth_date}
            onChange= {e => setBirth_date(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input 
            name="whatsapp" 
            id="whatsapp" 
            required 
            value= {whatsapp}
            onChange= {e => setWhatsapp(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="cref">CREF</label>
          <input 
            name="cref" 
            id="cref" 
            required
            value= {cref}
            onChange= {e => setCref(e.target.value)} 
          />
        </div>

        <div className="input-block">
            <label htmlFor="web">Página Web</label>
            <input 
              name="web" 
              id="web" 
              required 
              value= {pagWeb}
              onChange= {e => setPagWeb(e.target.value)}
            />
        </div>

        <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input 
              name="email" 
              id="email" 
              required 
              value= {email}
              onChange= {e => setEmail(e.target.value)}
            />
        </div> 

      <button type='submit'>Salvar</button>
  </form>
  );
}

export default PersonalForm;