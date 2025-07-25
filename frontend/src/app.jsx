function App() {
  const [location, setLocation] = useState('');
  const [predictions, setPredictions] = useState([]);
  async function handleSubmit() {
    const resp = await fetch('/predict', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({location})
    });
    const data = await resp.json();
    setPredictions(data.predictions);
  }
  return (
    <div className="container">
      <h1>COVID‑19 Death Predictor</h1>
      <LocationSelector onSelect={setLocation} />
      <button className="btn btn-primary" onClick={handleSubmit}>Predict</button>
      <PredictionChart data={predictions}/>
    </div>
  );
}