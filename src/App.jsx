import useCustomPointer from "./useCustomPointer.JSX";
import useDate from "./useDate";
import useKeyPress from "./useKeyPress";
import useSwitch from "./useSwitch";

function App() {

  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");
  const isEnterPressed = useKeyPress("Enter");

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

      {/* BONUS */}
      <div>
        <h1>Tieni premuto "Enter" per testare il custom hook</h1>
        <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
      </div>
    </main>
  )
}

export default App;
