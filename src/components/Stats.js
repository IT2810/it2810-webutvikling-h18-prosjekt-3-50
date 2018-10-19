import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { BarChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import { Content, Card, Text, View } from 'native-base'
import { isSameDay } from '../assets/utils'

const StatItem = ({title, value}) => (
  <Card style={{padding: 12}}>
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20, lineHeight: 30, textAlign: 'left'}}>{title}</Text>
    </View>
    <View>
      <Text style={{textAlign: 'left', fontSize: 20, lineHeight: 40}}>{value}</Text>
    </View>
  </Card>
)

class Stats extends Component {
  static navigationOptions = {title: 'Stats'}

  numberWithSpaces = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  render () {
    const resultColor = 'rgb(23, 147, 189)'
    const targetColor = 'rgb(96,194,240)'
    const targetMax = Math.max(...this.props.targetsLast7Days)
    const resultMax = Math.max(...this.props.resultsLast7Days)
    const showGridInTargets = targetMax > resultMax
    const yMax = Math.max(targetMax, resultMax)
    return (
      <Content>
          <Card style={{width: '100%', paddingLeft: '3%', height: 300 }}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20, lineHeight: 30, textAlign: 'left', marginTop: 4}}>Last 7 days</Text>
            </View>
            <View style={{width: '100%', height: 200, flexDirection: 'row' }}>
              <YAxis
                  data={ showGridInTargets ? this.props.targetsLast7Days : this.props.resultsLast7Days }
                  contentInset={ { top: 30 } }
                  svg={{
                      fill: 'grey',
                      fontSize: 10,
                  }}
                  numberOfTicks={5}
                  formatLabel={ value => `${value}` }
              />
              <View style={{width: '90%', height: 200}}>
                <BarChart
                    yMax={yMax}
                    yMin={0}
                    style={StyleSheet.absoluteFill}
                    svg={{ fill: targetColor }}
                    data={ this.props.targetsLast7Days }
                    contentInset={{ top: 30, bottom: 0, left: 20, right: 10 }}
                />
                <BarChart
                    yMax={yMax}
                    yMin={0}
                    style={{ flex: 1, marginLeft: 16}}
                    svg={{ fill: resultColor }}
                    data={ this.props.resultsLast7Days }
                    contentInset={{ top: 30, bottom: 0, left: 4, right: 10 }}
                />
              </View>
            </View>
            <View style={{position: 'absolute', left: '15%', bottom: 10, width: '84%'}}>
              <XAxis
                  style={{ marginBottom: 8 }}
                  data={ this.props.targetsLast7Days }
                  scale={scale.scaleBand}
                  formatLabel={(_, index) => this.props.resultsLast7Days[index] >= this.props.targetsLast7Days[index] ? '+' : '-'}
                  labelStyle={ { color: 'black' } }
              />
              <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                <View style={{backgroundColor: targetColor, padding: 4}}>
                  <Text>Target</Text>
                </View>
                <View style={{backgroundColor: resultColor, padding: 4, marginLeft: 5}}>
                  <Text>Result</Text>
                </View>
              </View>
            </View>
          </Card>
          <StatItem title="All time total number of steps" value={this.numberWithSpaces(this.props.allTimeNumberOfSteps)} />
          <StatItem title="Highest number of steps in a single day" value={this.numberWithSpaces(this.props.maxNumberOfStepsInADay)} />
          <StatItem title="Number of days where target was reached" value={this.props.numberOfDaysTargetReached} />
          <StatItem title="Number of training sessions completed" value={this.props.sessionsCompleted} />
          <StatItem title="Most common exercise(s)" value={this.props.mostCommonExercise} />
          <View style={{height: 30, width: '100%'}} /> {/* for padding in the end of the list */}

      </Content>
    )
  }
}

function mapStateToProps(state) {
  const today = new Date()
  let oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  const stepStatsLast7Days = state.sessions.stepStats.filter(stepStat => (new Date(stepStat.date) <= today && new Date(stepStat.date) > oneWeekAgo))

  for (let dayCount=0;dayCount<7;dayCount++) { // fill in for missing data
    let day = new Date()
    day.setDate(day.getDate() - dayCount)
    const dayIndex = stepStatsLast7Days.findIndex(stepStatLast7Days => isSameDay(day, stepStatLast7Days.date))
    if (dayIndex == -1) { // missing data point, insert fallback
      stepStatsLast7Days.push({
        result: 1000, // fallBackResult
        target: 5000, // fallBackTarget
        date: day
      })
      stepStatsLast7Days.sort((a, b) => a.date > b.date) // insert fallbackData in the right place
    }
  }
  const resultsLast7Days = stepStatsLast7Days.map(stepStat => stepStat.result)
  const targetsLast7Days = stepStatsLast7Days.map(stepStat => stepStat.target)

  let allTimeNumberOfSteps = 0, maxNumberOfStepsInADay = 0, numberOfDaysTargetReached = 0
  state.sessions.stepStats.forEach(stepStat => {
    allTimeNumberOfSteps += stepStat.result
    if (stepStat.result > maxNumberOfStepsInADay) maxNumberOfStepsInADay = stepStat.result
    if (stepStat.result >= stepStat.target) numberOfDaysTargetReached++
  })
  let sessionsCompleted = 0
  let exerciseCounts = {}
  state.sessions.sessions.forEach(session => {
    if(session.done) sessionsCompleted++
    session.exercises.forEach(exercise => {
      if (exerciseCounts[exercise.name]) {
        exerciseCounts[exercise.name]++
      } else {
        exerciseCounts[exercise.name] = 1
      }
    })
  })
  let mostCommonExercise = 'No exercises in calendar' // will be overwritten when exercises exist
  let exercisesInCalendar = Object.keys(exerciseCounts)
  if (exercisesInCalendar.length !== 0) {
    let exerciseCountMax = 0
    exercisesInCalendar.forEach(exerciseInCalendar => {
      if (exerciseCounts[exerciseInCalendar] == exerciseCountMax) {
        mostCommonExercise += (', ' + exerciseInCalendar)
      } else if (exerciseCounts[exerciseInCalendar] > exerciseCountMax) {
        exerciseCountMax = exerciseCounts[exerciseInCalendar]
        mostCommonExercise = exerciseInCalendar
      }
    })
  }

  return {
    resultsLast7Days,
    targetsLast7Days,
    allTimeNumberOfSteps,
    maxNumberOfStepsInADay,
    numberOfDaysTargetReached,
    sessionsCompleted,
    mostCommonExercise
  }
}

export default connect(mapStateToProps, null)(Stats)
