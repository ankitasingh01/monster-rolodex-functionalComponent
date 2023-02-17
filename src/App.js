import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useEffect, useState } from "react";

const initialState = {
  monsters: [],
  newTargetState: "",
  filterMonsters: [],
};

const App = () => {
  const [state, setState] = useState(initialState);
  console.log("state", state);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setState((prevState) => {
          return { ...prevState, monsters: data };
        });
      });
  }, []);
  useEffect(() => {
    const filterMonsters = state.monsters.filter((monsterfilter) => {
      return monsterfilter.name.toLowerCase().includes(state.newTargetState);
    });
    setState((prevState) => {
      return {
        ...prevState,
        filterMonsters,
      };
    });
  }, [state.monsters, state.newTargetState]);

  const searchChange = (event) => {
    const newTargetState = event.target.value.toLowerCase();
    setState((prevState) => {
      return {
        ...prevState,
        newTargetState,
      };
    });
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        className="monsters-search-box"
        onChangeHandler={searchChange}
      />
      <CardList filterMonsters={state.filterMonsters} />
    </div>
  );
};

export default App;
