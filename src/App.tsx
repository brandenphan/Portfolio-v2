import Home from "./pages/home";
import { WindowWidthProvider } from "./context/windowWidth";

const App = () => {
  return (
    <WindowWidthProvider>
      <Home />
    </WindowWidthProvider>
  );
}

export default App;
