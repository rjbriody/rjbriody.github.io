import React from 'react';
import styled from 'react-emotion';
import { Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const
    SectionContainer = styled('div')`
        padding-top: 100px;
        padding-bottom: 50px;
        text-align: center;
        margin: auto;
        background-color: #1a1c22;
    `,
    Header = styled(Typography)`
        color: white;
        padding-bottom: 50px;
    `,
    SkillDivider = styled('div')`
        padding: 10px;
    `,
    SkillWrapper = styled(ExpansionPanel)`
        box-shadow: 0px 0px 40px #252525;
        width: 90%;
        max-width: 1000px;
        margin: auto;
        background: none;
    `,
    SkillHeader = styled(Typography)`
        min-width: 50%;
        text-align: left;
        background: -webkit-gradient(linear, right top, left top, from(#9100ff), to(#ff0052));
        background: linear-gradient(to left, #9100ff, #ff0052);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `,
    ExpandIcon = styled(ExpandMoreIcon)`
        color: #9100ff;
        font-size: 1.5em;
    `,
    SkillContent = styled('div')`
        background-color: white;
        border-bottom-left-radius: .6rem;
        border-bottom-right-radius: .6rem;
        padding: 50px;
    `,
    SkillBlurb = styled(Typography)`
        color: black;
        text-align: left;
    `,
    SkillList = styled('ul')`
        padding-top: 20px;
        text-align: left;
        margin: auto;
        font-size: 20px;
        font-weight: 300;
    `,
    ListItem = styled('li')`
        padding-bottom: 8px;
    `,
    AnchorContainer = styled('div')`
        visibility: hidden;
        height: 0px;
    `;

const SkillContainer = ({ title, children }) => (
    <SkillWrapper>
        <ExpansionPanelSummary expandIcon={<ExpandIcon />} style={{ background: 'black', top: '-1px' }}>
            <SkillHeader variant="display2">
                {title}
            </SkillHeader>
        </ExpansionPanelSummary>
        <SkillContent>
            {children}
        </SkillContent>
    </SkillWrapper>
);

export default () => (
    <React.Fragment>
        <AnchorContainer>
            <a name="skills">Skills</a>
        </AnchorContainer>
        <SectionContainer>
            <Header variant="display3">
                Areas of expertise
            </Header>

            {/* <SkillDivider />
            <SkillContainer title="Web Services & APIs">
                <SkillBlurb variant="headline">
                    I specialize in leading efforts to build non-trival applications that people love to use. I achieve this by combining my knowlege of software design principles with relentless attention to product focus and usability.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        Extensive experience in architecture and component design for non-trivial applications.
                        </ListItem>
                    <ListItem>
                        Strong ability to introduce reusable patterns and application “building blocks”.
                        </ListItem>
                    <ListItem>
                        Passionate about pragmatic test patterns and feature coverage.
                        </ListItem>
                    <ListItem>
                        Outstanding ability to turn fuzzy requirements into great solutions.
                        </ListItem>
                </SkillList>
            </SkillContainer> */}

            <SkillDivider />
            <SkillContainer title="UI / Frontend">
                <SkillBlurb variant="headline">
                    I specialize in leading efforts to build non-trival applications that people love to use. I achieve this by combining my knowlege of software design principles with relentless attention to product focus and usability.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        Extensive experience in architecture and component design for non-trivial applications.
                        </ListItem>
                    <ListItem>
                        Strong ability to introduce reusable patterns and application “building blocks”.
                        </ListItem>
                    <ListItem>
                        Passionate about pragmatic test patterns and feature coverage.
                        </ListItem>
                    <ListItem>
                        Outstanding ability to turn fuzzy requirements into great solutions.
                        </ListItem>
                </SkillList>
            </SkillContainer>

            <SkillDivider />
            <SkillContainer title="Data Visualization">
                <SkillBlurb variant="headline">
                    Mmmm, Data Visualization; the culmination of software, art, psychology, and design. <br />
                    <br />
                    Personally, I enjoy data visualization because it leverages my diverse skill set more than any other software discipline.
                    I love that it requires me to become deeply familiar with the nuances of the domain and the goals and mindset of the user.
                    Most of all, I like the satisfaction I get from enabling a complex goal with a beautiful solution that’s obvious and
                    intuitive.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        Designed and implemented the DataStax Studio Interactive Graph View, Interactive Schema View, and Gremlin Traversal Profile View.
                    </ListItem>
                    <ListItem>
                        Strong ability to introduce reusable patterns and application “building blocks”.
                    </ListItem>
                    <ListItem>
                        Passionate about pragmatic test patterns and feature coverage.
                    </ListItem>
                    <ListItem>
                        Outstanding ability to turn fuzzy requirements into great solutions.
                    </ListItem>
                </SkillList>
            </SkillContainer>

        </SectionContainer>
    </React.Fragment>
);
