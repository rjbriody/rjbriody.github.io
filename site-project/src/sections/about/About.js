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
                            The teams I lead make stuff happen and we have a good time while we’re at it!
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            My approach to leadership is rooted in empathy, fairness, open communication, and teamwork.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            My approach to software development is rooted in user empathy and product focus. “Let’s build the right thing!”
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            People say that I bring energy, drive, and focus to every team that I’m a part of.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            I am one of the more customer/user/product-focused engineers you will come across.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getListTextTypographyVariant(width)}>
                            My professional goal is pretty simple (to describe): build the right thing, a right way, with great people.
                        </ListText>
                    </ListItem>
                </ul>
            </FactList>
        </SectionContainer >
    </React.Fragment>
);

export default withWidth()(About);