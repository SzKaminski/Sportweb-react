import { Component } from "react/cjs/react.development";
import Navbar from './component/Navbar/Navbar';
import MainSection from "./component/MainSection";

class App extends Component {

  state = {
    data: []
  }
 
  
  componentDidMount() {
    fetch('http://localhost:8080/recentMatch')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ data })
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        {/* <div>{this.state.data.map(match => <MainSection info={match}/>)}</div> */}
        
        <MainSection 
        homeTeamName={this.state.data.homeTeamName}
        homeScore={this.state.data.homeScore}
        awayTeamName={this.state.data.awayTeamName}
        awayScore={this.state.data.awayScore}
        />
      </div>
    )
  }
}

export default App;
