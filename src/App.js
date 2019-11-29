import React from 'react';
import './App.css';
import CardList from "./components/card-list/Card-list.component";

class App extends React.Component {
    state = {
        url: 'https://jsonplaceholder.typicode.com/users',
        monsters: []
    };

    componentDidMount() {
        fetch(this.state.url)
            .then(res => res.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        return (
            <div className='App'>
                <CardList
                    monsters={this.state.monsters}/>
            </div>
        )
    }
}

export default App;
