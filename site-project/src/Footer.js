import React from 'react';

import styled from 'react-emotion';
import Typography from '@material-ui/core/Typography';

const
    Footer = styled('div')`
        height: 100px;
        text-align: center;
        background-color: black;
        color: darkgrey;
        justify-content: center;
        display: flex;
        flex-direction: column;
  `,
    FooterText = styled(Typography)`
        color: lightgray;
    `;

export default () => (
    <Footer>
        <FooterText variant="subheading">
            I built this site using React.js and Material-UI. Feel free to check out the source <a href="https://github.com/rjbriody/rjbriody.github.io/tree/master/site-project" target="_blank">here</a>.
        </FooterText>
    </Footer >
);