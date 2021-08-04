import React, { Component } from "react"
import HomeHeaderComponent from "../components/homeHeader/index.js"
import MainNewsComponent from "../components/mainNews/index.js"
import SubscribeComponent from "../components/subscribe/index.js"
import RecentNews from "../components/recentNews/index.js"
import RecentIncidencias from "../components/recentIncidencias/index.js"
import SpecialNews from "../components/specials/index.js"
import CategoryBlockComponent from "../components/categoryblock/index.js"

class HomeContainer extends Component {

  getNoticeUids(notices) {
    return notices.reduce((acc, notice) => {
      acc.push(notice.uid);
      return acc;
    }, [])
  }

  removeDuplicated(priorityNotices, normalNotices) {
    let priorityUids = this.getNoticeUids(priorityNotices);

    return normalNotices.reduce((acc, notice) => {
      if (!acc.includes(notice) && !priorityUids.includes(notice.uid)) {
        acc.push(notice);
      }
      return acc;
    }, [])
  }

  render() {
    const removeSpecialNotices = this.removeDuplicated(
      this.props.specialNotices.nodes,
      this.props.recentNotices.nodes
    );
    const recentNoticesFiltered = {
      nodes: this.removeDuplicated(
        this.props.noticeP.nodes,
        removeSpecialNotices
      )
    }
    console.log(this.props)
    return (
      <React.Fragment>
        <HomeHeaderComponent bannerNotice={this.props.bannerNotice} />
        <MainNewsComponent notice={this.props.noticeP} />
        {
          this.props.categories.map(category => 
            ((category.active && category.category !== null) && <CategoryBlockComponent
              key={`category-block-${category.prismicId}`}
              category={category}
              site={this.props.site}
            />)
          )
        }
        <SubscribeComponent />
        <RecentNews
          notices={recentNoticesFiltered}
          bannerNotices={this.props.bannerNotice}
          principalNotices={this.props.normalNotices}
        />
        <RecentIncidencias
          notices={this.props.recentIncidencias}
          bannerNotices={this.props.bannerNotice}
          principalNotices={this.props.normalNotices}
        />
        <SpecialNews notices={this.props.specialNotices} />
      </React.Fragment>
    )
  }
}

export default HomeContainer
