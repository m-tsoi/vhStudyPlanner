import Message from "./Message";
import ListGroup from "./components/ListGroup";
import TestButton from "./components/TestButton";

function App() {
  const items = ["a", "b", "c", "d"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Message />
      <ListGroup items={items} heading="AAAA" onSelectItem={handleSelectItem} />
      <TestButton color="secondary" onClick={() => console.log("Clicked")}>
        buttonName
      </TestButton>
    </div>
  );
}

export default App;
