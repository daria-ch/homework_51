import React from 'react';
import photo from './assets/photo.jpg';

const Content = () => (
    <section className="info container">
        <div className="photo"><img src={photo} alt=""/></div>
        <article className="info-link">
            <h3 className="case">Resources</h3>
            <p>Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client
                groups. Easily manage your inspiration and work-in-progress </p>
            <p><a className="link" href="#">Explore more &rarr;</a></p>
        </article>
        <article className="info-link">
            <h3 className="speed">Training & Funding</h3>
            <p>Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client
                groups. </p>
            <p><a className="link" href="#">Browse trainig &rarr;</a></p>
        </article>
        <article className="info-link">
            <h3 className="cloud">Connect</h3>
            <p>Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client
                groups. Easily manage your inspiration.</p>
            <p><a className="link" href="#">Connect now &rarr;</a></p>
        </article>
    </section>
);

export default Content;