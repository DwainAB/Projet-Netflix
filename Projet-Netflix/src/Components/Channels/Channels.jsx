import React from "react";
import JobBiden from '../../assets/live-now-img1.png'
import DonaldTrump from '../../assets/live-now-img2.png'
import './Channels.css'

function Channels(){
    return(
        <div className="Container">
            <div className="live-now">

                {/* la partie gauche de live now  */}
                <div className="live-now-left">
                    <div className="live-now-left-img">
                        <img src={JobBiden} alt="" />
                    </div>
                    <div className="live-now-left-info">
                        <h3>5. CNN</h3>
                        <h2>NEWS</h2>
                        <p>Right now, as we speak, Joe Biden, the current President of the United States, is delivering an important and insightful </p>
                        <button className="live-now-left-info-button">
                            Go Live
                        </button>
                    </div>
                </div>

                {/* le separateur entre la partie droite et la partie gauche de live now  */}
                <div class="footer-separator"></div>
                
                {/* la partie droite de live now  */}
                <div className="live-now-right">
                    <div className="live-now-right-img">
                        <img src={DonaldTrump} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Channels;