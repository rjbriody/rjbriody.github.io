import React from 'react';
import headshot from './headshot.png';
import styled from 'react-emotion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const
    SectionContainer = styled('div')`
        background: linear-gradient(170deg, #2d2f39 0%, #1a1c22 60%);
        height: 100vh;
    `,
    GridContainer = styled(Grid)`
        height: 100%;
    `,
    ColoredText = styled('span')`
        color: ${props => props.color};
        font-weight: 400;
    `,
    Blurb = styled(Typography)`
        color: white;
        width: 500px;
    `;

export default () => (
    <SectionContainer>
        <GridContainer
            container
            justify="center"
            alignItems="center"
            spacing={32}
        >
            <Grid item>
                <Blurb variant="display3">
                    Build the <ColoredText color="#00fff7">right thing</ColoredText>,<br />
                    the <ColoredText color="#ee3bac">right way</ColoredText>,<br />
                    with <ColoredText color="#ab4cfc">great people</ColoredText>.<br />
                </Blurb>
            </Grid>
            <Grid item>
                <img src={headshot} alt="headshot" style={{ maxHeight: '450px' }} />
            </Grid>
        </GridContainer>
    </SectionContainer>
);

