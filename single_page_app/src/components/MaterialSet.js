import React from "react";

import Presentation from "./Presentation";

import '../styles/shelf.css'


class MaterialSet extends React.Component {

    render() {
        return (
            <main>
                <header>
                    <h2> Developer Student Club @ UCU</h2>
                    <h4>materials</h4>
                </header>

                <div className="main_shelf">
                    <Presentation id={1}/>
                    <Presentation id={2}/>
                    <Presentation id={2}/>
                    <Presentation id={2}/>
                    <Presentation id={2}/>
                </div>
            </main>
        );
    }
}

export default MaterialSet;