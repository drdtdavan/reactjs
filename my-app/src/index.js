import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {shuffle} from 'lodash';
import '../node_modules/blaze/dist/components.buttons.min.css'
import '../node_modules/blaze/dist/utilities.sizes.min.css'



class Story extends React.Component {
    constructor(props){
        super(props);
        this.state={
            words:["one","two","three"],
            sentence:""
        }         
    }
    handleClick(word){
        this.setState({sentence:this.state.sentence+" "+word})
        this.setState({words:shuffle(this.state.words)})
    }
    render() {
       let b=this.state.words.map(word=><button className="c-button u-xlarge" onClick={event=>this.handleClick(word)}>{word}</button>)
        return (
            <div>
                <p>{this.state.sentence}</p>
            {b}
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Story />,
    document.getElementById('root')
);
