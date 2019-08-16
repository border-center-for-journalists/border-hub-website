import React, { Component } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  Label,
  ResponsiveContainer,
} from "recharts"
import { Container } from "../../theme/index.styled"

class ChartComponent extends Component {
  constructor(props) {
    super(props)
    //console.log("CHART", this.props.type, this.props.notice)
    const { primary } = this.props.notice
    this.state = {
      chart: "",
      data: [],
      name: primary.chart_title.text,
      Xaxis: primary.axis_x.text || "",
      Yaxis: primary.eje_y.text || "",
      type: this.props.type,
    }
  }
  componentWillMount() {
    const { items, primary } = this.props.notice
    const newState = {
      chart: "",
      data: this.getData(items, this.props.type),
      name: primary.chart_title.text,
      Xaxis: primary.axis_x.text || "",
      Yaxis: primary.eje_y.text || "",
      type: this.props.type,
    }
    this.setState(newState)
  }
  getData = (items, type) => {
    return type === "area"
      ? this.getAreaChartData(items)
      : this.getBarChartData(items)
  }
  getBarChartData = items => {
    const result = items.reduce((data, item) => {
      const { values } = item
      const valuesLines = values.text.split(" ")
      let i = {
        name: item.section.text,
        years: "",
      }
      valuesLines.map((line, index) => {
        if (index === 0) return
        const currentLine = line.split(",")
        i.years += (i.years !== "" ? "," : "") + currentLine[1]
        i[currentLine[1]] = parseFloat(currentLine[2])
        i[currentLine[1] + "_average"] = (currentLine[2] * 100) / currentLine[0]
      })
      data.push(i)
      return data
    }, [])
    return result
  }
  getAreaChartData = items => {
    let data = {}
    const total = Array.from(Array(100), (x, index) => index)
    total.map(index => {
      return (data[`${index}`] = {
        name: `${index}`,
      })
    })
    let years = ""
    items.map((item, index) => {
      const { values, section } = item
      years += (years !== "" ? "," : "") + section.text
      const valuesLines = values.text.split(" ")
      valuesLines.map((line, index) => {
        if (index === 0) return
        const currentLine = line.split(",")
        const puntaje = Math.floor(currentLine[0])
        if (!data[`${puntaje}`]) {
          data[`${puntaje}`] = {
            name: `${puntaje}`,
            years: years,
          }
        }
        data[`${puntaje}`].years = years
        data[`${puntaje}`][section.text] = parseFloat(currentLine[1])
      })
    })
    //console.log("AREA", Object.values(data))
    return Object.values(data)
  }
  barChart = () => {
    const { data } = this.state
    //console.log("BAR CHART DATA", data)
    const w = data.length * 160
    const years = data.length > 0 ? data[0].years.split(",") : []
    const colors =
      data.length < 3
        ? ["#fb8077", "#5a9eeb", "#e7a65a", "#adb2ba"]
        : ["#e7a65a", "#fb8077", "#5a9eeb", "#adb2ba"]
    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="name">
            <Label value="" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: this.state.Yaxis,
              angle: -90,
              position: "insideBottomLeft",
            }}
          />
          <Tooltip />
          <Legend />
          {years.map((y, index) => {
            return <Bar key={index} dataKey={y} fill={colors[index % 4]} />
          })}
        </BarChart>
      </ResponsiveContainer>
    )
  }
  areaChart = () => {
    const { data } = this.state
    //antes 730 de ancho
    const years = data.length > 0 ? data[0].years.split(",") : []
    const colors = ["#fb8077", "#e7a65a", "#5a9eeb", "#adb2ba"]
    return (
      <ResponsiveContainer width="100%" height={450}>
        <AreaChart data={data}>
          <XAxis />
          <YAxis
            label={{
              value: this.state.Yaxis,
              angle: -90,
              position: "insideBottomLeft",
            }}
          />
          <Tooltip />
          <Legend />
          {years.map((y, index) => {
            return (
              <Area
                connectNulls
                type="natural"
                key={index}
                dataKey={y}
                fill={colors[index % 4]}
                stroke={colors[index % 4]}
                fillOpacity={0.8}
              />
            )
          })}
        </AreaChart>
      </ResponsiveContainer>
    )
  }
  render() {
    return (
      <Container size="medium" padding>
        {this.state.type === "area" ? this.areaChart() : ""}
        {this.state.type === "bar" ? this.barChart() : ""}
      </Container>
    )
  }
}
export default ChartComponent
