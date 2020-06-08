import React from 'react';

const gameOver = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 pt-5">
                    <div className="text-center pt-3">
                        <img src="public/img/Street_Fighter_old_logo.png" width="400" alt="" />

                    </div>
                    <div className="container pt-5">
                        <div className="row text-center">
                        </div>
                    </div >
                </div>
                <div className="col-6 text-center pt-5">
                    <img src="public/img/ryu_grey.png" className="animated fadein infinite delay-2s" alt="" />
                    <div className="row pt-5">
                        <div className="col-12 d-block">
                            <h4 className="red animated infinite fadeIn text-right float-right pl-5">Insert a coin! </h4>
                            <img src="public/img/coin.png" class="animated infinite flip float-right" width="50" height="50" alt="" />
                        </div>
                    </div>
                    <input type="text" value="text"/>
                </div>
            </div>
        </div>
    );
}

export default gameOver;
