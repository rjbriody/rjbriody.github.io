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
                        My approach to software is rooted in user empathy and product focus.
                </ListItem>
                    <ListItem>
                        I get stuff done and I have a good time while I'm at it.
                </ListItem>
                    <ListItem>
                        People say that I bring energy, innovation, and focus to every team that I’m a part of.
                </ListItem>
                    <ListItem>
                        The only thing I like better than learning new technology is using boring old tools that just work :)
                </ListItem>
                    <ListItem>
                        I'm at my best when working with a solid team on a challenging project in a fast-paced environment.
                </ListItem>
                </ul>
            </FactList>
        </SectionContainer >
    </React.Fragment>
);
