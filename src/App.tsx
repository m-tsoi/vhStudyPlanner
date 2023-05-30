import TimerCircle from "./components/TimerCircle";
import Timer from "./components/Timer";
import "tailwindcss/tailwind.css";
import "./App.css";

function App() {
  const items = ["a", "b", "c", "d"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <h1>
        <b>AMONGUSAMONGUSAMONGUSAMONGUSAMONGUSAMONGUSAMONGUS</b>
        <p className="bg-red-500">BRUUHHHZHZZZZZZZ SUSSSSYYY!!!!!!!</p>
      </h1>
      <TimerCircle />
      <Timer />
    </div>
  );
}

export default App;
