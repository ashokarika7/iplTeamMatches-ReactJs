// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails
  return (
    <Link className="teamCard-link" to={`/team-matches/${id}`}>
      <li className="team-card-li-container">
        <img className="teamCard-img" alt={name} src={teamImageUrl} />
        <p className="teamCard-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
