import { Component } from "react";
import Card from "./Card";

class CardList extends Component {
    constructor({ timecards }) {
        super({ timecards });
        this.state = {
            timecards: timecards,
            newEntry: ""
        }
    }

    handleDeleteClick(index) {
        const newTimecards = [...this.state.timecards];
        newTimecards.splice(index, 1);
        this.setState({ timecards: newTimecards });
    }
    handleInput = event => {
        this.setState({ new_entry_name: event.target.value });
    }

    addNewCard() {
        const newTimecards = this.state.timecards.concat({ "name": this.state.new_entry_name, "totalTime": 0, "id": this.state.timecards.length + 1 });
        this.setState({ timecards: newTimecards });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.timecards.map((timecard, index) => (<Card
                        name={timecard.name}
                        totalTime={timecard.totalTime}
                        id={timecard.id}
                        bgcolor={timecard.bgcolor}
                        onDelete={() => this.handleDeleteClick(index)}
                    />))}
                </div >
                <div className="bg-light-green dib br3 pa3 ma2 grow">
                    <input id="addNewCard" type="text" onChange={this.handleInput} />
                    <button class="add_button" onClick={() => this.addNewCard()}>Add</button>
                </div>
            </div >
        )
    }
};

export default CardList;