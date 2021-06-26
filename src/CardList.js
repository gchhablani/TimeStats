import { Component } from "react";
import Card from "./Card";
class CardList extends Component {
    constructor({ timecards }) {
        super({ timecards })
        this.initialCards = timecards.map(timecard => (
            <Card
                name={timecard.name}
                total_time_logged={timecard.total_time_logged}
                id={timecard.id}
            />

        ))
        this.state = {
            cardsArray: this.initialCards,
            content: <div>
                {this.initialCards}
                <div><button class="add_new_card" onClick={() => this.handleAddNewCardClick()}>+</button></div>
            </div >,
            new_entry_name: ""
        }
    };
    handleInput = event => {
        this.setState({ new_entry_name: event.target.value });
    }

    addNewCard() {
        var newCardsArray = this.state.cardsArray.concat(<Card name={this.state.new_entry_name} total_time_logged={0} id={this.state.cardsArray.length + 1} />);
        this.setState({
            cardsArray: newCardsArray,
            content: < div >
                {newCardsArray}
                < div > <button class="add_new_card" onClick={() => this.handleAddNewCardClick()}>+</button></div >
            </div >,
        });

    }
    handleAddNewCardClick() {
        // var name = prompt("Enter the name for the task.", "New Task");
        this.setState({
            content: <div>
                {this.state.cardsArray}
                <div className="bg-light-green dib br3 pa3 ma2 grow">
                    <input id="addNewCard" type="text" onChange={this.handleInput} />
                    <button class="add_button" onClick={() => this.addNewCard()}>Add</button>
                </div>
            </div>
        });

        //this.cardsArray.add(<Card name=<input type="text">Name:</input> total_time_logged = 0 id = { this.cardsArray[-1].id + 1 } />)
    };

    render() {
        return this.state.content;
    }
};

export default CardList;