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
        min-height: 600px;
        padding-top: 100px;
        padding-bottom: 100px;
        padding-left: 25px;
        padding-right: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
    CardPaper = styled(Paper)`
        min-height: 265px;
        width: 98%;
        max-width: 350px;
        background-color: white;
        text-align: center;
        padding: 30px;
        padding-top: 50px;
        margin: auto;
    `,
    Quote = styled(Typography)`
        color: black;
        min-height: 130px;
    `,
    QuoteDivider = styled(Divider)`
        width: 180px;
        margin: auto;
        margin-bottom: 20px;
        background: lightgrey;
    `,
    Credit = styled(Typography)`
        color: darkgrey;
    `,
    AnchorContainer = styled('div')`
        visibility: hidden;
        height: 0px;
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
);

export default () => (
    <React.Fragment>
        <AnchorContainer>
            <a name="testimonials">Testimonials</a>
        </AnchorContainer>
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
                        text="When it comes to soliciting requirements from users, I think you're the best I know."
                        author="Recent Boss"
                    />
                </Grid>
                <Grid item>
                    <Card
                        text="Bob just makes $#.! happen :)"
                        author="Happy Customer!"
                    />
                </Grid>
            </Grid>
        </SectionContainer>
    </React.Fragment >
);

