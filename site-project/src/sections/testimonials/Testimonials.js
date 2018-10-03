import React from 'react';

import styled from 'react-emotion';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const
    SectionContainer = styled('div')`
        background: -webkit-gradient(linear, left top, left bottom, from(#fd5252), to(#b539fd));
        background: linear-gradient(#fd5252,#b539fd);
        padding: 10%;
    `,
    CardPaper = styled(Paper)`
        height: 280px;
        width: 350px;
        background-color: white;
        text-align: center;
        padding: 50px;
    `,
    Quote = styled(Typography)`
        font-family: Helvetica, Arial;
        color: black;
        font-style: italic;
        height: 140px;
    `,
    QuoteDivider = styled(Divider)`
        width: 150px;
        margin: auto;
        margin-bottom: 20px;
    `,
    Credit = styled(Typography)`
        color: darkgrey;
    `;

const Card = ({ text, author }) => (
    <CardPaper elevation={24}>
        <Quote variant="headline">
            "{text}"
        </Quote>
        <Credit variant="caption">
            <QuoteDivider />
            -{author}
        </Credit>
    </CardPaper>
)
export default () => (
    <React.Fragment>
        <a name="testimonials" />
        <SectionContainer>
            <Grid
                container
                justify="center"
                spacing={32}>
                <Grid item>
                    <Card
                        text="Bob is leading the team to build a tool that everyone wants to use."
                        author="Anonymous Peer, DataStax Employee Excellence Award 2017"
                    />
                </Grid>
                <Grid item>
                    <Card
                        text="You really are one of the absolute best engineers I have ever worked with."
                        author="Coworker"
                    />
                </Grid>
                <Grid item>
                    <Card
                        text="Bob just makes $#.! happen :)"
                        author="Happy Customer"
                    />
                </Grid>
            </Grid>
        </SectionContainer>
    </React.Fragment>
);

