import React from "react";
import './Player.css'

export default props => (
    <div className="PlayerLayout">

        <iframe className='Player' src="https://open.spotify.com/embed/playlist/6ruFOnOt1IyJ5YytqYbe2L?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen;  picture-in-picture" loading="lazy" />

        <iframe className="Player" allow="autoplay" frameborder="0" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/573168834&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" />

    </div>
);