import { Button } from "./lib/button/button";
import "./App.scss";

function App() {
  return (
    <>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
      <Button size={"xs"}>btn</Button>
      <Button size={"sm"}>btn</Button>
      <Button size={"md"}>btn</Button>
      <Button size={"lg"}>btn</Button>
      <Button size={"xl"}>btn</Button>

    </div>
    </>
  );
}

export default App;
