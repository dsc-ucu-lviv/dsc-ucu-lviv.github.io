import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../styles/shelf.css'
import '../styles/materials_set__presentation.css'

import {getMaterialsByID} from "../JsonServerCommunication/serverCommunication"

class Presentation extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;
        this.fetchData(this.props.id);
    }

    fetchData = async (id) => {
        return await getMaterialsByID(id).then( (x) => this.setState({presentation: x, textFull: false}));

    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextState);
        return nextState !== null;
    }

    // expand_text () {
    //     if ()
    // }

    render() {

        if (this.state === null) {return  (<p>... </p>)}

        let presentation_data = this.state.presentation.materials;
        return (
            <div className="materials_set__presentation">
                <img className="materials_set__presentation__img" src={presentation_data.img_url}
                     alt={presentation_data.img_alt}/>

                <div className={"materials_set__presentation__content"}>
                    <h3> {presentation_data.name} </h3>

                    <p className={this.state.textFull ? "long" : "short"}> {presentation_data.description} </p>
                    {this.state.textFull
                        ?
                        <button className={"text_expander"}
                            onClick={() => this.setState({textFull: false})}> ▲ </button>
                        :
                        <button className={"text_expander"}
                                onClick={() => this.setState({textFull: true})}> ▼ </button>
                    }

                    <div className="actionBar">
                        <a href={presentation_data.prep_doc_url}>
                            <button className={"preparation"}> Prep </button> </a>
                        <a href={presentation_data.slides_url}>
                            <button className={"slides"}> Slides</button> </a>
                        <a href={presentation_data.code_git_url}>
                            <button className={"code"}> Code</button> </a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Presentation;


// https://drive.google.com/uc?export=view&id=1e-v_YpSlidneJ2HozksOOLwwAj8VrYxs