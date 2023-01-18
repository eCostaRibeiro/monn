import React from "react"
import "./Branding.css"
import Marca from "./logoMonn.svg"
import bgVideo from "./bgVideo.mp4"
export default props =>
    <div className="folder">
        <video onloadstart="this.playbackRate = 0.0001;" id="bgVideo" loop autoPlay className="LogoBG">
            <source src={bgVideo} />
        </video>
        <img className="Branding"
            src={Marca}
            alt="MonnCustomAudio - Logo"
        />
    </div>
