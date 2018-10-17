import React from 'react';
import headshot from './headshot.png';
import styled from 'react-emotion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const
    SectionContainer = styled('div')`
        background: linear-gradient(170deg, #2d2f39 0%, #1a1c22 60%);
        height: 100vh;
        padding: 50px;
        align-items: center;
        display: flex;
    `,
    ColoredText = styled('span')`
        color: ${props => props.color};
        font-weight: 400;
    `,
    Blurb = styled(Typography)`
        color: white;
    `,
    ImageContainer = styled('div')`
        width: 100%;
        text-align: center;
    `;

const Intro = ({ width }) => (
    <SectionContainer>
        <Grid
            container
            justify="center"
            alignItems="center"
            spacing={32}
        >
            <Grid item>
                <Blurb variant={isWidthUp('sm', width) ? "display3" : "display1"}>
                    Build the <ColoredText color="#00fff7">right thing</ColoredText>,<br />
                    the <ColoredText color="#ee3bac">right way</ColoredText>,<br />
                    with <ColoredText color="#ab4cfc">great people</ColoredText>.<br />
                </Blurb>
            </Grid>
            <Grid item>
                <ImageContainer>
                    <img
                        src={headshot}
                        alt="headshot"
                        style={{
                            maxHeight: '600px',
                            width: '90%',
                            maxWidth: '400px'
                        }} />
                </ImageContainer>
            </Grid>
        </Grid>
    </SectionContainer>
);

export default withWidth()(Intro);