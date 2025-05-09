import React, { useState } from 'react';


export default function DiagnosisForm() {
  const [symptoms, setSymptoms] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const symptomsArray = symptoms.split(',').map(s => s.trim());
    const res = await axios.post('http://localhost:3001/api/diagnosis', { symptoms: symptomsArray });
    setResults(res.data);
  };

  return (
    <div>
      <h2>Descubra a doença do seu Pet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Digite os sintomas separados por vírgula"
        value={symptoms}
        onChange={e => setSymptoms(e.target.value)} 
        required />
        <button type="submit">Diagnosticar</button>
      </form>
      <div>
        {results.lenght > 0 && (
          <ul>
            {results.map(disease => (
              <li key={disease._id}>
                <strong>{disease.name}</strong>: {disease.description}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
  );

}