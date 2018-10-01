import React from 'react';

import styled from 'react-emotion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const
    SectionContainer = styled('div')`
        background: -webkit-gradient(linear, left top, left bottom, from(#fd5252), to(#b539fd));
        background: linear-gradient(#fd5252,#b539fd);
        height: 300px;
    `,
    CardPaper = styled(Paper)`
        background-color: white;
    `;

const Card = ({ text, author }) => (
    <CardPaper elevation={24}>
        <Typography variant="body2">
            "{text}"
        </Typography>
        <Typography variant="caption">
            -{author}
        </Typography>
    </CardPaper>
)
export default () => (
    <SectionContainer>
        <a name="testimonials" />
        <Grid
            container
            justify="space-around"
            alignItems="center"
            spacing="32">
            <Grid item>
                <Card
                    text="Bob is leading the team to build a tool that everyone wants to use."
                    author="Anonymous Peer, DataStax Employee Excellence Award 2017" />
            </Grid>
            <Grid item>
                <Card
                    text="You really are one of the absolute best engineers I have ever worked with."
                    author="Coworker" />
            </Grid>
            <Grid item>
                <Card
                    text="Bob just makes $#!~ happen :)"
                    author="Happy Customer" />
            </Grid>
        </Grid>
    </SectionContainer>
);

