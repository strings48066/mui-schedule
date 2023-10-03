import React from "react";
import mockGames from "./mockGames";
import ScheduleComponent from "./ScheduleComponent";

function App() {
  return (
    <div className="App">
      <ScheduleComponent games={mockGames} />
    </div>
  );
}

export default App;
