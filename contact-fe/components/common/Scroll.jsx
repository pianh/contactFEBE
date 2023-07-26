import React from 'react';

export default function Scroll(props) {
    return (
        <div>
            <section className="scroll__area pt-80">
                <div className="container-fluid d-flex scroll-group">
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        {props.text1}
                    </div>
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        {props.text2}
                    </div>
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        {props.text2}
                    </div>
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        {props.text4}
                    </div>
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        {props.text5}
                    </div>
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        {props.text6}
                    </div>
                </div>
            </section>
        </div>
    );
}
