// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatchDetail} = props
  const getUpdates = {
    competingTeam: eachMatchDetail.competing_team,
    competingTeamLogo: eachMatchDetail.competing_team_logo,
    matchStatus: eachMatchDetail.match_status,
    result: eachMatchDetail.result,
    id: eachMatchDetail.id,
  }

  const winOrLose = getUpdates.matchStatus === 'Won' ? 'green_color' : ''

  return (
    <li className="match-card-li-bg-container">
      <img
        className="match-card-img"
        alt={`competing team ${getUpdates.competingTeam}`}
        src={getUpdates.competingTeamLogo}
      />
      <p className="match-card-title">{getUpdates.competingTeam}</p>
      <p className="match-card-para">{getUpdates.result}</p>
      <p className={`${winOrLose} match-card-result`}>
        {getUpdates.matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
