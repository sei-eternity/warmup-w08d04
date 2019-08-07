import React, { Component } from 'react';
import Cards from './Cards'
import './App.css';

class App extends Component {
    state = {
        question: '',
        cards: []
    }

    handleChange(event) {

        this.setState({ question: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        const question = this.state.question
        const card = this.state.cards
        card.push({ question })
        console.log(card);

        this.setState({ cards: card })
    }

    render() {
        console.log(this.state.cards);

        return (
            <section id="add-card" className="container-fluid">
                <div className="row">
                    <form name="add-card" >
                        <input
                            type="text"
                            name="question"
                            value={this.state.question}
                            onChange={(e) => this.handleChange(e)}
                            placeholder="What's your question?" />
                        <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)} />
                    </form>
                </div>

                <Cards cards={this.state.cards} />
            </section>
        )
    }
}

export default App;
