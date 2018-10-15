import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { BarChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import { Content, Card, Text, View } from 'native-base'

const StatItem = ({title, number}) => (
  <Card style={{padding: 12}}>
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20, lineHeight: 30, textAlign: 'left'}}>{title}</Text>
    </View>
    <View>
      <Text style={{textAlign: 'left', fontSize: 20, lineHeight: 40}}>{number}</Text>
    </View>
  </Card>
)

export default class Stats extends Component {
  static navigationOptions = {title: 'Stats'}
  constructor (props, context) {
    super(props, context)
    this.state = {
      resultsLast7Days: [5143,8913,2421,7916,10015,10714,13104],
      targetsLast7Days: [9500,5000,5000,10000,10000,15000,15000],
      allTimeNumberOfSteps: 124210,
      maxNumberOfStepsInADay: 14710,
      numberOfDaysTargetReached: 36,
      sessionsCompleted: 40
    }
  }

  render () {
    const resultColor = 'rgb(23, 147, 189)'
    const targetColor = 'rgb(96,194,240)'
    const targetMax = Math.max(...this.state.targetsLast7Days)
    const resultMax = Math.max(...this.state.resultsLast7Days)
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
                  data={ showGridInTargets ? this.state.targetsLast7Days : this.state.resultsLast7Days }
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
                    data={ this.state.targetsLast7Days }
                    contentInset={{ top: 30, bottom: 0, left: 20, right: 10 }}
                />
                <BarChart
                    yMax={yMax}
                    yMin={0}
                    style={{ flex: 1, marginLeft: 16}}
                    svg={{ fill: resultColor }}
                    data={ this.state.resultsLast7Days }
                    contentInset={{ top: 30, bottom: 0, left: 4, right: 10 }}
                />
              </View>
            </View>
            <View style={{position: 'absolute', left: '15%', bottom: 10, width: '84%'}}>
              <XAxis
                  style={{ marginBottom: 8 }}
                  data={ this.state.targetsLast7Days }
                  scale={scale.scaleBand}
                  formatLabel={(_, index) => this.state.resultsLast7Days[index] >= this.state.targetsLast7Days[index] ? '+' : '-'}
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
          <StatItem title="All time total number of steps" number={this.state.allTimeNumberOfSteps} />
          <StatItem title="Highest number of steps in a single day" number={this.state.maxNumberOfStepsInADay} />
          <StatItem title="Number of days where target was reached" number={this.state.numberOfDaysTargetReached} />
          <StatItem title="Number of training sessions completed" number={this.state.sessionsCompleted} />

      </Content>
    )
  }
}
