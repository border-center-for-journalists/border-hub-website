import React, { Component } from "react"
import HomeHeaderComponent from "../components/homeHeader/index.js"
import MainNewsComponent from "../components/mainNews/index.js"
import SubscribeComponent from "../components/subscribe/index.js"
import RecentNews from "../components/recentNews/index.js"
import SpecialNews from "../components/specials/index.js"

class HomeContainer extends Component {

  getNoticeUids(notices){
    return notices.reduce((acc,notice)=>{
      acc.push(notice.uid);
      return acc;
    },[])
  }

  removeDuplicated(priorityNotices, normalNotices){
    let priorityUids = this.getNoticeUids(priorityNotices);

    return normalNotices.reduce((acc,notice)=>{
      if(!acc.includes(notice) && !priorityUids.includes(notice.uid)){
        acc.push(notice);
      }
      return acc;
    },[])
  }

  render() {
    const removeSpecialNotices = this.removeDuplicated(
      this.props.noticeS.nodes,
      this.props.recentNotices.nodes
    );
    const recentNoticesFiltered = {
      nodes: this.removeDuplicated(
        this.props.noticeP.nodes,
        removeSpecialNotices
      )
    }
    return (
      <React.Fragment>
        <HomeHeaderComponent bannerNotice={this.props.bannerNotice} />
        <MainNewsComponent notice={this.props.noticeP} />
        <SubscribeComponent />
        <RecentNews
          notices={recentNoticesFiltered}
          bannerNotices={this.props.bannerNotice}
          principalNotices={this.props.normalNotices}
        />
        <SpecialNews notice={this.props.noticeS} />
      </React.Fragment>
    )
  }
}

export default HomeContainer
