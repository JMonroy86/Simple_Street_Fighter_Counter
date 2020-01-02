import React from 'react';
import Over from './gameover';

 export default class Card extends React.Component {

    render() {
        return (
            
                <div className="container">
                    <div className="row">
                        <div className="col-6 pt-5">
                            <div className="text-center pt-3">
                                <img src="public/img/Street_Fighter_old_logo.png" width="400" alt="" />

                            </div>
                            <Over />
                            <div className="container pt-5">
                                <div className="row text-center">
                                    <div className="col-4 ">
                                        <div className="box">
                                            <h1>{this.props.horas}</h1>
                                        </div>
                                        <h4 className="pt-3 text-center">HORAS</h4>

                                    </div>
                                    <div className="col-4">
                                        <div className="box">
                                            <h1>{this.props.minutos}</h1>
                                        </div>
                                        <h4 className="pt-3 text-center">MINUTOS</h4>

                                    </div>
                                    <div className="col-4">
                                        <div className="box">
                                            <h1>{this.props.segundos}</h1>
                                        </div>
                                        <h4 className="pt-3 text-center">SEGUNDOS</h4>

                                    </div>
                                </div>
                               

                            </div >
                        </div>
                        <div className="col-6 text-center pt-5">
                            <img src="public/img/ryu.png" className="animated pulse infinite" alt=""/>
                            <div className="row pt-5">
                                    <div className="col-12 d-block">
                                        <h4 className="red animated infinite fadeIn text-right float-right pl-5">Insert a coin! </h4>
                                        <img src="public/img/coin.png" class="animated infinite flip float-right" width="50" height="50" alt="" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        );
    }
}
