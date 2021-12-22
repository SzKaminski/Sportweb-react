import React, { Component } from "react";
import "./MainSection.css"

import Statistics from "./Statistics/Statistics";

class MainSection extends Component {

    render() {
        return (
            <div className="main-container">
                <h2>Most recent match</h2>
                <div className="recent-match">
                    <img className="home-team-logo"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Crystal_Palace_FC_logo.svg/160px-Crystal_Palace_FC_logo.svg.png"
                        alt="new" />
                    <h1 className="recent-teams">
                        {this.props.homeTeamName} vs {this.props.awayTeamName}
                    </h1>
                    <img className="away-team-logo"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/170px-FC_Southampton.svg.png"
                        alt="new" />
                    <h1>{this.props.homeScore} : {this.props.awayScore}</h1>

                    <Statistics/>

                </div>
            </div>
        );
    }
}

export default MainSection