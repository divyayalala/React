import React, { Component } from 'react'
import WithCounter from './withCounter'
class ClickCounter extends Component {
    render() {
        const {count,incrementCount} = this.props
        console.log(count)
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}
export default  WithCounter(ClickCounter)
