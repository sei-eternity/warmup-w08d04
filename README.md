# React 

Create a react app that takes a question from a form and displays it as a card, use two components `<Cards` which takes all the cards as a prop from your App.js, and `</Card>` which is called by Cards.js

## App.js 

```js
import React, { Component } from 'react';
import Card from './Card'
import Cards from './Cards'
import './App.css';

class App extends Component {

  render() {

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

        
      </section>
    )
  }
}

export default App;

```

## Styling

```css
.row {
  margin: 0;
}

.card {
  background: #231e1e;
  border-color: black;
  color: white;
  padding: 1.8rem 2.2rem;
  position: relative;
  max-width: 300px;
  max-height: 200px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card h4 {
  font-size: 2rem;
  line-height: 130%;
}

.card h6 {
  position: absolute;
  font-size: 1.2rem;
  margin-top: 1.618rem;
  opacity: 0.2;
  bottom: 0.618rem;
  left: 1.6rem;
}

.card h6:after {
  font-size: 60%;
  margin-left: 1px;
}

.card:hover {
  cursor: pointer;
}
```