import React from 'react';
import './App.css';
import CardList from "./components/card-list/Card-list";
import SearchBox from "./components/search-box/SearchBox";

class App extends React.Component {
    state = {
        url: 'https://jsonplaceholder.typicode.com/users',
        searchField: '',
        monsters: []
    };

    componentDidMount() {
        fetch(this.state.url)
            .then(res => res.json())
            .then(users => this.setState({monsters: users}))
    }

    handleChange = e => {
        this.setState({searchField: e.target.value})
    };

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className='App'>
                <h1>Monster Rolodex</h1>
                <SearchBox
                    placeholder='search monsters'
                    handleChange={this.handleChange}
                />
                <CardList
                    monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
