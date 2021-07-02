import React, { Component } from "react"
import { Container } from "../../theme/index.styled"
import {
  Timeline,
  TimelineContainerRight,
  TimelineContent
} from './single.styled'
import PlusIcon from "../../theme/images/plus-32.png"

import moment from "moment"
import "moment/locale/es"
moment.locale("es")

class StatusIncidentComponent extends Component {
  constructor(props){
    super(props);
    this.buildDate = this.buildDate.bind(this);
  }
  buildDate(currentState){
    const {from_date, to_date} = currentState;

    const FromDate = moment(from_date).format('DD/MM/YYYY')
    if(to_date == null){
      return FromDate;
    } 
    const ToDate = moment(to_date).format('DD/MM/YYYY')
    return `${FromDate} - ${ToDate}`
    
  }
  render() {
    const { data: { status = [] } } = this.props.incident;
    console.log(status)
    return (
      <Container size="medium" xlStaticSize color="#f2f2f2">
        <h2>Estatus</h2>
        <Timeline>
          {status.map(currentState => {
            return (
              <TimelineContainerRight>
                <TimelineContent>
                  <p className="title">
                    <img src={PlusIcon} width={18}/>
                    <strong> {currentState.status_type} <i className="icon-calendar" /></strong> {this.buildDate(currentState)} 
                  </p>
                  <p>
                    {currentState.status_description.text}
                  </p>
                </TimelineContent>
              </TimelineContainerRight>
            );
          })}
        </Timeline>
      </Container>
    )
  }
}

export default StatusIncidentComponent
