import React from "react";
import JobBiden from '../../assets/live-now-img1.png'
import DonaldTrump from '../../assets/live-now-img2.png'
import './Channels.css'
import TF1 from '../../assets/featured-img1.png'
import M6 from '../../assets/featured-img-2.png'
import CNN from '../../assets/featured-img3.png'

function Channels(){
    return(
        <div className="Container-live-now">
            <h2>Live Now</h2>
            <div className="live-now">

                {/* la partie gauche de live now  */}
                <div className="live-now-left">
                    <div className="live-now-left-img">
                        <img src={JobBiden} alt="" />
                    </div>
                    <div className="live-now-left-info">
                        <div className="live-now-left-info-text">
                            <p>5. CNN</p>
                            <p>NEWS</p>
                            <p>Right now, as we speak, Joe Biden, <br />
                            the current President of the United States,<br />
                            is delivering an important and insightful </p>
                        </div>
                        <div className="live-now-left-info-div-button">
                            <button className="live-now-left-info-button">
                                Go Live
                            </button>
                        </div>
                    </div>
                </div>

                {/* le separateur entre la partie droite et la partie gauche de live now  */}
                <div class="footer-separator-g">
                    <div className="footer-separator-1"></div>
                    <span className="arrow_right_alt" class="material-symbols-outlined">arrow_right_alt</span>
                    <div className="footer-separator-2"></div>
                </div>

                {/* la partie droite de live now  */}
                <div className="live-now-right">
                    <div className="live-now-right-img">
                        <img className="live-now-right-img-img" src={DonaldTrump} alt="" />
                    </div>
                </div>
            </div>



            {/* Featured TV channels */}
            <div className="featured-general">
                <h2 className="featured-general-title">Featured TV channels</h2>
                <div className="featured-general-box-g">


                    <div className="featured-general-box1">
                        <div className="featured-general-box1-img">
                            <img src={TF1} alt="" />
                        </div>
                        <div className="featured-general-box1-info">
                            <p>1. TF1</p>
                            <p>The Newspaper</p>
                            <p>12h - 12h30</p>
                        </div>
                    </div>

                    <div className="featured-general-box1">
                        <div className="featured-general-box1-img M6">
                            <img className="M6" src={M6} alt="" />
                        </div>
                        <div className="featured-general-box1-info">
                            <p>1. M6</p>
                            <p>The Titanic</p>
                            <p>18h30 - 21h15</p>
                        </div>
                    </div>

                    <div className="featured-general-box1">
                        <div className="featured-general-box1-img">
                            <img className="CNN" src={CNN} alt="" />
                        </div>
                        <div className="featured-general-box1-info">
                            <p>1. CNN</p>
                            <p>Donald Trump</p>
                            <p>10h15 - 11h25</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Channels;