// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="ipl-logo-title-container">
              <img
                className="ipl-logo-el"
                alt=" ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              />
              <h1 className="ipl-dashboard-title">IPL Dashboard</h1>
            </div>

            <ul className="home-ul-container">
              {teamsList.map(eachItem => (
                <TeamCard key={eachItem.name} teamDetails={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
