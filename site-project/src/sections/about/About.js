import React from 'react';

import styled from 'react-emotion';
import Typography from '@material-ui/core/Typography';

const
    SectionContainer = styled('div')`
        padding-top: 100px;
        padding-bottom: 100px;
        padding-left: 50px;
        padding-right: 50px;
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
    `;

export default () => (
    <React.Fragment>
        <a name="about" />
        <SectionContainer>
            <Header variant="display3">
                Things to know about me...
            </Header>
            <FactList>
                <ul>
                    <ListItem>
                        <ListText variant="headline">
                            My approach to software is rooted in user empathy and product focus.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="headline">
                            I get stuff done and I have a good time while I'm at it.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="headline">
                            People say that I bring energy, innovation, and focus to every team that I’m a part of.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="headline">
                            The only thing I like better than learning new technology is using boring old tools that just work :)
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="headline">
                            I'm at my best when working with a solid team on a challenging project in a fast-paced environment.
                        </ListText>
                    </ListItem>
                </ul>
            </FactList>
        </SectionContainer >
    </React.Fragment>
);
