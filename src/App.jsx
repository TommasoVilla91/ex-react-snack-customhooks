import useCustomPointer from "./useCustomPointer.JSX";
import useDate from "./useDate";
import useSwitch from "./useSwitch";

function App() {

  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");

  return (
    <main>
      {/* SNACK 1 */}
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      {/* SNACK 2 */}
      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>

      {/* SNACK 3 */}
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
    </main>
  )
}

export default App;
