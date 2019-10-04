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
        <HomeHeaderComponent bannerNotice={this.props.bannerNotice} />
        <MainNewsComponent notice={this.props.noticeP} />
        <SubscribeComponent />
        <RecentNews
          notices={this.props.recentNotices}
          bannerNotices={this.props.bannerNotice}
          principalNotices={this.props.normalNotices}
        />
        <SpecialNews notice={this.props.noticeS} />
      </React.Fragment>
    )
  }
}

export default HomeContainer
