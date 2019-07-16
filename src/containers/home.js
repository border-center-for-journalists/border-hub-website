import React, { Component } from "react"
import HomeHeaderComponent from "../components/homeHeader/index.js"
import MainNewsComponent from "../components/mainNews/index.js"
import SubscribeComponent from "../components/subscribe/index.js"
import RecentNews from "../components/recentNews/index.js"
import SpecialNews from "../components/specials/index.js"


class HomeContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeHeaderComponent/>
        <MainNewsComponent/>
        <SubscribeComponent/>
        <RecentNews/>
        <SpecialNews/>
      </React.Fragment>
        )
        }
}

export default HomeContainer
