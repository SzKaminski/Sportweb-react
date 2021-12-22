import React, { Component } from 'react';
import './Statistics.css'

class Statistics extends Component {

    state = {
      data: []
    }
   
    
    componentDidMount() {
      fetch('http://localhost:8080/recentMatchStatistics')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({ data })
        });
    }
  
    render() {
      return (
        <div className="statistics">
          <h3>{this.state.data.homeTeamBallPossession} ball possession {this.state.data.awayTeamBallPossession}</h3>
          <h3>{this.state.data.homeTeamShotsOnTarget} shots on target {this.state.data.awayTeamShotsOnTarget}</h3>
          <h3>{this.state.data.homeTeamShotsOffTarget} shots off target {this.state.data.awayTeamShotsOffTarget}</h3>
          <h3>{this.state.data.homeTeamSaves} saves {this.state.data.awayTeamSaves}</h3>
          <h3>{this.state.data.homeTeamCorners} corners {this.state.data.awayTeamCorners}</h3>
          <h3>{this.state.data.homeTeamOffsides} offsides {this.state.data.awayTeamOffsides}</h3>
          <h3>{this.state.data.homeTeamFouls} fauls {this.state.data.awayTeamFouls}</h3>
          <h3>{this.state.data.homeTeamYellowCards} yellow cards {this.state.data.awayTeamYellowCards}</h3>
          <h3>{this.state.data.homeTeamRedCards} red cards {this.state.data.awayTeamRedCards}</h3>
        
        </div>
      )
    }
  }
  
  export default Statistics;