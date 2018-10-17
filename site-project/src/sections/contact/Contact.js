import React from 'react';

import styled from 'react-emotion';
import Typography from '@material-ui/core/Typography';

const
    SectionContainer = styled('div')`
        padding-top: 100px;
        padding-bottom: 100px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        margin: auto;
        background-color: white;
    `,
    Header = styled(Typography)`
        color: black;
    `,
    AnchorContainer = styled('div')`
        visibility: hidden;
        height: 0px;
    `;

export default () => (
    <React.Fragment>
        <AnchorContainer>
            <a name="contact">Contact</a>
        </AnchorContainer>
        <SectionContainer>
            <Header variant="display1">
                Contact:<br/> robertjbriody@gmail.com
            </Header>
        </SectionContainer >
    </React.Fragment>
);
