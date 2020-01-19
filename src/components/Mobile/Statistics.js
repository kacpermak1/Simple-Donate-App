import React, { Component } from 'react';

class Statistics extends Component {

    state = {
        data: [],
        numberOfBags: 0,
    }

    componentDidMount(){
        this.getData()
    }
       
    getData = () => {
        let arr = [];
        let email = sessionStorage.getItem("email")
        this.props.firebase.db.collection("users").where("email", "==", email)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    arr.push(doc.data().request.bags);
                })
            })
        this.setState({ data: arr })
    }

    addBags = () => {
        let number;
        if (this.state.data.length > 0) {
            number = this.state.data.reduce((a, b) => a + b);
            this.setState({ numberOfBags: number })
        }
    }

    updateState = () => {
        this.props.firebase.db.collection("users")
    .onSnapshot(function(doc) {
        console.log(doc);
    });
    }

    render() {
        return (
            <div className="statistics">
                <div className="statisticsColumn" onClick={this.addBags}>
                    <div>{this.state.numberOfBags}</div>
                    <p>oddanych worków</p>
                </div>
                <div className="statisticsColumn" onClick={this.addBags}>
                    <div>{this.state.data.length}</div>
                    <p>wspartych organizacji</p>
                </div>
                <div className="statisticsColumn" onClick={this.addBags}>
                    <div>0</div>
                    <p>zbiórek</p>
                </div>
            </div>
        )
    }
}

export default Statistics;