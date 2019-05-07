import React, { Component } from "react";
import "./Portfolio.css"
import Slideshow from "./Slideshow/Slideshow";  


                
class Portfolio extends Component {
    state = {

    }

    render() {
        return (
            <div                         
                ref={this.props.portfolioRef}
                className="windowRef">
                <div 
                    id="portfolio"
                    className="portfolio" 
                    style={{ 
                    }}
                >
                    <div className="backgroundPseudo backgroundPortfolio" style={{
                            backgroundImage: "url("+this.props.backgroundPicture+")",
                            backgroundPositionY: (this.props.backgroundScrollSpeed*this.props.scrollPercent),
                            backgroundAttachment: "fixed",
                            zIndex: 1
                    }}/>
                    <Slideshow/>
                </div>
            </div>

        )
    }
};

export default Portfolio;