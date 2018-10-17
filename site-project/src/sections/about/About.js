import React from 'react';

import styled from 'react-emotion';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

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
    FactList = styled('div')`
        text-align: left;
        margin: auto;
        max-width: 650px;
    `,
    ListItem = styled('li')`
        padding-bottom: 10px;
        font-size: 20px;
        font-weight: 400;
    `,
    ListText = styled(Typography)`
        color: black;
    `,
    AnchorContainer = styled('div')`
        visibility: hidden;
        height: 0px;
    `;

const getListTextTypographyVariant = width => {
    return isWidthUp('sm', width) ? 'headline' : 'subheading';
}

const About = ({ width }) => (
    <React.Fragment>
        <AnchorContainer>
            <a name="about">About</a>
        </AnchorContainer>
        <SectionContainer>
            <Header variant={isWidthUp('sm', width) ? "display3" : "display1"}>
                Things to know about me...
            </Header>
            <FactList>
                <ul>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            My approach to software is rooted in user empathy and product focus.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            I get stuff done and I have a good time while I'm at it.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            I'm happy to pitch in wherever I can and I often wear a few different hats, but most of all <strong>I write code</strong>.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            People say that I bring energy, innovation, and focus to every team that I’m a part of.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            The only thing I like better than learning new technology is using boring old tools that just work :)
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            I'm at my best when working with a solid team on a challenging project in a fast-paced environment.
                        </ListText>
                    </ListItem>
                </ul>
            </FactList>
        </SectionContainer >
    </React.Fragment>
);

export default withWidth()(About);