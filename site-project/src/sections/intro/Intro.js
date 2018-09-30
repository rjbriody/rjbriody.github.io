import React from 'react';
import headshot from './headshot.png';
import styled from 'react-emotion';

const Blurb = styled('div')`
`;

export default () => (
    <section id="Intro">
        <Blurb>
            <h1>
                Intro
            </h1>
        </Blurb>
        <img src={headshot} alt="headshot" />
        <div style={{height: "800px"}}/>
    </section>
);

