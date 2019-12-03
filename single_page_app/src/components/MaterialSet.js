import React from "react";

import Presentation from "./Presentation";
import {getAllMaterials} from "../JsonServerCommunication/serverCommunication";

import '../styles/shelf.css'
import '../styles/main_styles.css'


class MaterialSet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            materials: null
        };
        this.fetchData();
    }

    fetchData = async () => {
        let materials = await getAllMaterials();
        this.setState({materials: materials.materials});
    };

    render() {
        if (this.state.materials === null) {
            return null;
        }
        return (
            <main>
                <header>
                    <img alt={"Developer Student Club logo"}
                         src="https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/70921228_144534506820268_8139607015333658240_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=104&oh=f960efdcaefda495edd75a7557322dc6&oe=5E734DBF"/>
                    <h2> Ukrainian Catholic University</h2>
                    <h4> workshop materials </h4>
                </header>

                <div className="main_shelf">

                    { this.state.materials.map(
                        (content, index) => <Presentation content={content} key={index}/>)}

                </div>
            </main>
        );
    }
}

export default MaterialSet;