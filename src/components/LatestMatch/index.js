// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const teamDetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    unpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }

  return (
    <div className="latest-match-bg-container">
      <div className="left-container">
        <p className="teamNameHeader">{teamDetails.competingTeam}</p>
        <p className="teamPara">{teamDetails.date}</p>
        <p className="teamPara">{teamDetails.venue}</p>
        <p className="teamPara">{teamDetails.result}</p>
      </div>
      <img
        className="latest-match-logo"
        alt={`latest match ${teamDetails.competingTeam}`}
        src={teamDetails.competingTeamLogo}
      />
      <div className="end-container">
        <h1 className="team-name">First Innings</h1>
        <p className="teamPara">{teamDetails.firstInnings}</p>
        <h1 className="team-name">Second Innings</h1>
        <p className="teamPara">{teamDetails.secondInnings}</p>
        <h1 className="team-name">Man Of The Match</h1>
        <p className="teamPara">{teamDetails.manOfTheMatch}</p>
        <h1 className="team-name">Umpires</h1>
        <p className="teamPara">{teamDetails.unpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
