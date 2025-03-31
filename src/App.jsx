import useSwitch from "./useSwitch";

function App() {

  const [isOn, toggle] = useSwitch();

  return (
    <main>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
    </main>
  )
}

export default App;
