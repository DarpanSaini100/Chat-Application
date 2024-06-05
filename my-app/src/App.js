import { ChatEngine } from "react-chat-engine"
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine
       height="100vh"
       projectId="20eefa03-24fe-4f7c-8920-412a6e59f2e6"
       userName="Darpan"
       userSecret="Darpan@1234"
      />
    </div>
  );
}

export default App;
