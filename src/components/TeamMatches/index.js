// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    matchDetails: '',
    banerUrl: '',
    recentMatchDetails: [],
    teamId: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const latestMatchDetails = data.latest_match_details
    const teamBannerUrl = data.team_banner_url
    const recentMatches = data.recent_matches
    console.log(data)

    this.setState({
      matchDetails: latestMatchDetails,
      banerUrl: teamBannerUrl,
      recentMatchDetails: recentMatches,
      teamId: id,
      isLoading: false,
    })
  }

  render() {
    const {
      matchDetails,
      banerUrl,
      recentMatchDetails,
      teamId,
      isLoading,
    } = this.state

    return (
      <div className={`team-matches-bg-container ${teamId}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-matches-container ${teamId}`}>
            <img className="team-banner-img" alt="team banner" src={banerUrl} />
            <h1 className="teamMatches-title">Latest Matches</h1>
            <LatestMatch latestMatchDetails={matchDetails} />
            <ul className="match-card-ul-container">
              {recentMatchDetails.map(eachItem => (
                <MatchCard key={eachItem.id} eachMatchDetail={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
