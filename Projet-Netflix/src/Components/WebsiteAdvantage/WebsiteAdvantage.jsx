import React from "react";
import "./WebsiteAdvantage.css"
import img_content from "../../assets/content.png"
import img_interface from "../../assets/interface.png"
import img_access from "../../assets/access.png"
import img_exceptional from "../../assets/exceptional.png"

function WebsiteAdvantage(){
    return(
        <div>
            <div className="advantage_container">
                <div className="advantage_text">
                    <h1 className="advantage_text_title"><span>WHY USE</span>RESTREAM ?</h1>
                    <p className="advantage_text_para">For starters, we have a user-friendly interface that makes it easy to find exactly what you're looking for. Plus, our site is optimized for streaming on all devices, so you can enjoy your favorite content on the go. And with regular updates and new releases added every week, you'll always have something new and exciting to watch.</p>
                </div>
                <div className="advantage_card">
                    <div className="card">
                        <div><img className="card_img" src={img_content} alt="" /></div>
                        <div>
                            <h2 className="card_title">Content</h2>
                            <p className="card_text">Discover a vast library of popular movies, TV shows, and exclusive original series only available on our streaming site.</p>
                            <a className="card_btn" href="/">DETAILS</a>
                        </div>
                       
                    </div>
                    <div className="card">
                        <div><img className="card_img" src={img_interface} alt="" /></div>
                        <div>
                            <h2 className="card_title">Interface</h2>
                            <p className="card_text">Easily find and watch your favorite content with our intuitive and user-friendly interface</p>
                            <a className="card_btn" href="/">DETAILS</a>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div><img className="card_img" src={img_access} alt="" /></div>
                        <div>
                            <h2 className="card_title">Accessibility</h2>
                            <p className="card_text">Enjoy seamless streaming on any device, including computers, mobile phones, and tablets, for an unparalleled streaming </p>
                            <a className="card_btn" href="/">DETAILS</a>
                        </div>
                    </div>
                    <div className="card">
                        <div><img className="card_img" src={img_exceptional} alt="" /></div>
                        <div>
                            <h2 className="card_title">Exceptional</h2>
                            <p className="card_text">Personalized recommendations based on your viewing habits, organized playlists and collections by genre and mood</p>
                            <a className="card_btn" href="/">DETAILS</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebsiteAdvantage