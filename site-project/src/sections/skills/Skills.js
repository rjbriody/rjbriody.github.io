import React from 'react';
import styled from 'react-emotion';
import { Typography } from '@material-ui/core';

const
    SectionContainer = styled('div')`
        padding: 100px;
        text-align: center;
        margin: auto;
        background-color: #1a1c22;
    `,
    Header = styled(Typography)`
        color: white;
        padding-bottom: 50px;
    `,
    SkillDivider = styled(`div`)`
        padding: 20px;
    `,
    SkillWrapper = styled('div')`
        box-shadow: 0px 0px 40px #252525;
        max-width: 1000px;
        margin: auto;
    `,
    SkillContainerHeader = styled('div')`
        background-color: black;
        display: flex;
        padding: 1rem;
        border-top-left-radius: .6rem;
        border-top-right-radius: .6rem;
    `,
    SkillHeader = styled(Typography)`
        background: -webkit-gradient(linear, right top, left top, from(#f120e7), to(#ff1979));
        background: linear-gradient(to left, #f120e7 30%, #ff1979);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `,
    SkillContent = styled('div')`
        background-color: white;
        padding: 50px;
        border-bottom-left-radius: .6rem;
        border-bottom-right-radius: .6rem;
    `,
    SkillList = styled('div')`
        text-align: left;
        margin: auto;
        max-width: 650px;
    `,
    ListItem = styled('li')`
        padding-bottom: 8px;
    `;

const SkillContainer = ({ title, children }) => (
    <SkillWrapper>
        <SkillContainerHeader>
            <div>
                <SkillHeader variant="display2">
                    {title}
                </SkillHeader>
            </div>
        </SkillContainerHeader>
        <SkillContent>
            {children}
        </SkillContent>
    </SkillWrapper>
);

export default () => (
    <React.Fragment>
        <a name="skills" />
        <SectionContainer>
            <Header variant="display3">
                Areas of expertise
        </Header>
            <SkillContainer title="UI / Frontend">
                <Typography>
                    I specialize in leading efforts to build non-trival applications that people love to use. I achieve this by combining my knowlege of software design principles with relentless attention to product focus and usability.
            </Typography>
                <SkillList>
                    <ListItem>Extensive experience in architecture and component design for non-trivial applications.</ListItem>
                    <ListItem>Strong ability to introduce reusable patterns and application “building blocks”. </ListItem>
                    <ListItem>Passionate about pragmatic test patterns and feature coverage.</ListItem>
                    <ListItem>Outstanding ability to turn fuzzy requirements into fantastic solutions.</ListItem>
                </SkillList>
            </SkillContainer>

            <SkillDivider />

            <SkillContainer title="UI / Frontend">
                <Typography>
                    I specialize in leading efforts to build non-trival applications that people love to use. I achieve this by combining my knowlege of software design principles with relentless attention to product focus and usability.
            </Typography>
                <SkillList>
                    <ListItem>Extensive experience in architecture and component design for non-trivial applications.</ListItem>
                    <ListItem>Strong ability to introduce reusable patterns and application “building blocks”. </ListItem>
                    <ListItem>Passionate about pragmatic test patterns and feature coverage.</ListItem>
                    <ListItem>Outstanding ability to turn fuzzy requirements into fantastic solutions.</ListItem>
                </SkillList>
            </SkillContainer>

        </SectionContainer>
    </React.Fragment>
);
