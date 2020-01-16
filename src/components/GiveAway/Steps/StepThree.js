import React, { Component } from 'react';

const selected = {
    backgroundColor: "#FAD648"
}

class StepThree extends Component {

    render() {

        const clickedSelectStyle = {
            display: this.props.animate % 2 !== 0 ? "flex" : "none"
        }

        let animateStyle = null;
        if (this.props.animate && this.props.animate % 2 === 0) {
            animateStyle = {
                animationName: "arrowDown",
                animationDuration: "0.4s"
            }
        } else if (this.props.animate && this.props.animate % 2 !== 0) {
            animateStyle = {
                animationName: "arrowUp", animationDuration: "0.4s", transform: "rotate(180deg)"
            }
        }

        let buttonDisabled;
        if (this.props.multiChoiceList.length && this.props.city) { buttonDisabled = false } else if (this.props.inputVal && this.props.multiChoiceList.length) { buttonDisabled = false } else { buttonDisabled = true };

        return (

            <div className="singleStep container">
                <h3>Krok 3/4</h3>
                <h2 style={{ marginBottom: "0" }}>Lokalizacja</h2>
                <div className="selectCity">
                    <div onClick={this.props.selectClick} className="select"><h4>{this.props.city ? this.props.city : "— wybierz —"}</h4><div className="arrowDown" style={animateStyle}></div></div>
                    <div className="options optionsIn" style={clickedSelectStyle} >
                        <div onClick={this.props.select}>Poznań</div>
                        <div onClick={this.props.select}>Warszawa</div>
                        <div onClick={this.props.select}>Kraków</div>
                        <div onClick={this.props.select}>Wrocław</div>
                        <div onClick={this.props.select}>Katowice</div>
                    </div>
                </div>
                <div className="multiSelectStepThree">
                    <p>Komu chcesz pomóc?</p>
                    <div className="multiSelectTop">
                        <div onClick={this.props.multipleChoice} style={this.props.multiChoiceList.indexOf('dzieciom') > -1 ? selected : null}>dzieciom</div>
                        <div onClick={this.props.multipleChoice} style={this.props.multiChoiceList.indexOf('samotnym matkom') > -1 ? selected : null}>samotnym matkom</div>
                        <div onClick={this.props.multipleChoice} style={this.props.multiChoiceList.indexOf('bezdomnym') > -1 ? selected : null} >bezdomnym</div>
                    </div>
                    <div className="multiSelectBottom">
                        <div onClick={this.props.multipleChoice} style={this.props.multiChoiceList.indexOf('niepełnosprawnym') > -1 ? selected : null}>niepełnosprawnym</div>
                        <div onClick={this.props.multipleChoice} style={this.props.multiChoiceList.indexOf('osobom starszym') > -1 ? selected : null}>osobom starszym</div>
                    </div>
                </div>
                <div className="optionalOrganisation">
                    <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                    <input type="text" name="optionalOrganisation" onChange={this.props.inputChange} value={this.props.inputVal} style={{ border: "0.75px solid #3C3C3C", backgroundColor: "transparent" }} />
                </div>
                <div className="buttonsBottom"><button onClick={this.props.prevStep}>Wstecz</button><button onClick={this.props.nextStep} disabled={buttonDisabled}>Dalej</button></div>
            </div>
        )
    }
}

export default StepThree;