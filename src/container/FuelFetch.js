import React, { Component } from 'react'
import fuels from '../fuels'
export default class FuelFetch extends Component{
    state = {
        rocketfuels: fuels,
        totalFuel: 0,
        realFuel: 0
    }

    getTotalForLaunch = () => {
        const reducer = (accum, currentVal) => accum + ((Math.floor(currentVal/3))-2)
        this.setState({
            totalFuel: this.state.rocketfuels.reduce(reducer, 0)
        })
    }

    getAccurateTotalForLaunch = () => {
        const allFuel = (val) => {
            if((Math.floor(val/3)-2) <= 0 ){
                return val
            }
            else{
                return val + allFuel((Math.floor(val/3))-2)
            }
        }
        const reducer = (accum, currentVal) => {
            let val = Math.floor(currentVal/3)-2
            let allFuelMass = allFuel(val)

            return accum + allFuelMass
        }
        this.setState({
            realFuel: this.state.rocketfuels.reduce(reducer, 0)
        })
    }
    render(){
        return(
          <>
          <p onClick={this.getFuels}>Here they are</p>
          <button onClick={this.getTotalForLaunch}>How Much Fuel DO I Need</button>
          <button onClick={this.getAccurateTotalForLaunch}>Really How much do I need</button>
          <h2>Total Fuel: {this.state.totalFuel}</h2>
          <h3>[Real Ammount]: {this.state.realFuel}</h3>
          </>
        )
    }
}