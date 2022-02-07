import { DataProvider } from "./API/API";
import WeatherDataDisplay from "./components/WeatherDataDisplay";
import BasicModal from "./components/BasicModal";

function App() {



  return (

    <div>
      <DataProvider>

        <WeatherDataDisplay />
        <BasicModal/>
      </DataProvider>

    </div>
  );
}

export default App; 
