import React, { Component } from 'react';
import Step from './OneStep';

class AllSteps extends Component {
    render() {
        return (
            <div className="allSteps">
                <div className="container">
                    <Step step={"Wybierz rzeczy"} text={"ubrania, zabawki, sprzęt i inne"} />
                    <Step step={"Spakuj je"} text={"skorzystaj z worków na śmieci"} />
                    <Step step={"Zdecyduj komu chcesz pomóc"} text={"wybierz zaufane miejsce"} />
                    <Step step={"Zamów kuriera"} text={"kurier przyjedzie w dogodnym terminie"} />
                </div>
            </div>
        )
    }
}

export default AllSteps;