import React from 'react';
import styled from 'react-emotion';
import { Typography } from '@material-ui/core';

const
    SkillWrapper = styled('div')`
    `,
    SkillContainerHeader = styled('div')`
    `,
    SkillContent = styled('div')`
    `;

const SkillContainer = ({ title, children }) => (
    <SkillWrapper>
        <SkillContainerHeader>
            <Typography>{title}</Typography>
        </SkillContainerHeader>
        <SkillContent>
            {children}
        </SkillContent>
    </SkillWrapper>
);

export default () => (
    <div>
        <a name="skills" />
        <h1>Skills</h1>
        <SkillContainer title="UI / Frontend">
            <span>blah blah blah</span>
        </SkillContainer>
    </div>
);
