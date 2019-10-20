import React, { Component } from 'react';
import theWords from '../eventyr.txt';
import ParseList from '../helpers/parseList';


class wordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: false,
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(theWords)
            .then(response => response.text())
            .then(data => this.setState({ data:data,isLoading:true }))
            .catch(error => this.setState({ error, isLoading: false }))
    }



    render() {

        if (this.state && this.state.data) {
            const p = new ParseList(this.state.data)
            p.parse()
            this.state.data = p.getAnagrams()
            return (
                <div>
                <h1>{'Anagrams'}</h1>
                <h2>List of anagrams from existing in a file</h2>
            { this.state && this.state.data &&
            <ul>
                <WordDisplay listWords={this.state.data}  />
            </ul>

            }
        </div>
        )
        } else {
            //WHen the list is still not loaded
            return ""
        }
    }
}
class Word extends Component {
    render(){
        const word = this.props.word
        return (
            <li key="{word.words}">
                {word.words}
            </li>
        )
    }
}

class WordDisplay extends Component {

    render(){
        return (

            this.props.listWords.map(word =>

                    <Word word={word} key={word.alfa}/>

            )
        )
    }
}

export default wordList