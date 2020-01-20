import React, { Component } from 'react';
class Statistics extends Component {

    state = {
        data: []
    }
  
    componentDidMount(){
        setTimeout(()=>{this.setState({ data: this.props.data })},1300)
    }

    render() {
        return (
            <div className="statistics">
                <div className="statisticsColumn">
                    <div>{this.state.data.length ? this.state.data.reduce((a, b) => a + b) : 0}</div>
                    <p>oddanych worków</p>
                </div>
                <div className="statisticsColumn">
                    <div>{this.state.data.length}</div>
                    <p>wspartych organizacji</p>
                </div>
                <div className="statisticsColumn">
                    <div>0</div>
                    <p>zbiórek</p>
                </div>
            </div>
        )
    }
}

export default Statistics;