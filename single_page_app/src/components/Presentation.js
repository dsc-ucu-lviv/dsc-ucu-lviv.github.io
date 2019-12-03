import React from "react";

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
        return await getMaterialsByID(id).then( (x) => this.setState({presentation: x}));

    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextState);
        return nextState !== null;
    }

    render() {
        if (this.state === null) {return  (<p>... </p>)}

        let presentation_data = this.state.presentation.materials;
        return (
            <div className="materials_set__presentation">

                <img className="materials_set__presentation__img" src={presentation_data.img_url} alt={presentation_data.img_alt}/>

                <div className={"materials_set__presentation__content"}>
                    <h3> {presentation_data.name} </h3>
                    <p> {presentation_data.description} </p>
                    <div className="actionBar">
                        <button className={"code"}> Code </button>
                        <button className={"slides"}> Slides </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Presentation;


// https://drive.google.com/uc?export=view&id=1e-v_YpSlidneJ2HozksOOLwwAj8VrYxs