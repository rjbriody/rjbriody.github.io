import React from 'react';
import styled from 'react-emotion';
import { Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const
    SectionContainer = styled('div')`
        padding-top: 100px;
        padding-bottom: 50px;
        padding-left: 20px;
        padding-right: 20px;
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
        padding: 20px;
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
    ListText = styled(Typography)`
        color: black;
    `,
    AnchorContainer = styled('div')`
        visibility: hidden;
        height: 0px;
    `;

const SkillContainerBase = ({ title, children, width }) => (
    <SkillWrapper>
        <ExpansionPanelSummary expandIcon={<ExpandIcon />} style={{ background: 'black', top: '-1px' }}>
            <SkillHeader variant={isWidthUp('sm', width) ? "display2" : "display1"}>
                {title}
            </SkillHeader>
        </ExpansionPanelSummary>
        <SkillContent>
            {children}
        </SkillContent>
    </SkillWrapper>
);
const SkillContainer = withWidth()(SkillContainerBase);


const getBlurbTypographyVariant = width => {
    return isWidthUp('sm', width) ? 'subheading' : 'subheading';
}

const Skills = ({ width }) => (
    <React.Fragment>
        <AnchorContainer>
            <a name="skills">Skills</a>
        </AnchorContainer>
        <SectionContainer>
            <Header variant={isWidthUp('sm', width) ? "display3" : "display1"}>
                Areas of expertise
            </Header>

            <SkillDivider />
            <SkillContainer title="Architecture">
                <SkillBlurb variant="subheading">
                    Architecture is a highly overloaded term these days, but in my opinion architecture is all about leveraging one’s knowledge of the details to guide big picture decisions.
                    My diverse background, versatile communication skills, and strong analytical decision-making enable me to excel in this role.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Proven ability to design effective multi-component systems that leverage the best tools for the job.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Strong ability to understand technological trade-offs / strengths & weaknesses.
                        </ListText>
                    </ListItem>

                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Ability to conceptualize the interaction of components in complex systems and situations.
                        </ListText>
                    </ListItem>

                </SkillList>
            </SkillContainer>

            <SkillDivider />
            <SkillContainer title="Web Apps, Services, & APIs">
                <SkillBlurb variant="subheading">
                    Back-end development is my comfy place.
                    I have a lot of experience here, the tools and technologies are proven, the patterns are relatively standardized, and informational resources are abundant.
                    That may sound a bit dull, but I find that this enables me to focus more exclusively on problem solving in the business domain, which I enjoy.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Expert-level knowledge of patterns and best-practices for java-based back-end development.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Proven experience in delivering scalable and dependable web apps, services, and APIs from ideation to production.
                        </ListText>
                    </ListItem>

                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Nearly a decade of hands-on experience spearheading efforts and leading teams in this domain.
                        </ListText>
                    </ListItem>
                </SkillList>
            </SkillContainer>

            <SkillDivider />
            <SkillContainer title="UI / Frontend">
                <SkillBlurb variant="subheading">
                    I specialize in leading efforts to build non-trival applications that people love to use. I achieve this by combining my knowlege of software design principles with relentless attention to product focus and usability.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Extensive experience in architecture and component design for non-trivial applications.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Strong ability to introduce reusable patterns and application “building blocks”.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Passionate about pragmatic test patterns and feature coverage.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Outstanding ability to turn fuzzy requirements into great solutions.
                        </ListText>
                    </ListItem>
                </SkillList>
            </SkillContainer>

            <SkillDivider />
            <SkillContainer title="Data Visualization">
                <SkillBlurb variant="subheading">
                    Mmmm, Data Visualization; the culmination of software, art, psychology, and design.<br />
                    Personally, I enjoy data visualization because I get the opportunity to tap into my creative, artistic side as well as my regular engineering skills.
                    I love that Datavis requires me to become deeply familiar with the nuances of the domain and the goals and mindset of the user.
                    Most of all, I like the satisfaction I get from enabling a complex goal with a beautiful solution that’s obvious and intuitive.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Designed and implemented the DataStax Studio Interactive Graph View, Interactive Schema View, and Gremlin Traversal Profile View
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Proven experience in creating bespoke interactive visualizations that are beautiful, intuitive, and effective.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Especially skilled in the realm of interactive graph/network visualization.
                        </ListText>
                    </ListItem>
                </SkillList>
            </SkillContainer>

            <SkillDivider />
            <SkillContainer title="Graph & Network">
                <SkillBlurb variant="subheading">
                    In 2014 I became the 7th engineer at Aurelius, the company behind Apache TinkerPop and Titan Graph Database (now Apache Jaunus).
                    This put me smack dab in the center of the graph technology universe, and it was amazing.
                    I was working with the sharpest graph minds in the world and I was solving the toughest graph problems around.
                    <br /><br />
                    In 2015, Aurelius was acquired by DataStax, which enabled me to focus on DataStax Studio.
                    For the first year or so I was primarily focused on interactive network and graph schema visualization and analysis.
                    My focus since then has grown well beyond graph, but I'm still "the graph guy on the Studio team", and I'm extremely proud of the wonderful feedback we've received from developers using the graph features I built for DataStax Studio.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Expert-level knowledge of graph database patterns, techniques, and tools; I even built some of them :)
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Designed and implemented the traversal profiling framework for Apache TinkerPop Gremlin.
                        </ListText>
                    </ListItem>

                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Creator, designer, and implementor of the DataStax Studio Graph View, Graph Schema View, and Gremlin Traversal Profile View.
                        </ListText>
                    </ListItem>

                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Well-versed in graph theory and network analysis concepts.
                        </ListText>
                    </ListItem>


                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            I recently gave a Network Analysis talk at Cassandra Summit. Check it out...
                        </ListText>
                    </ListItem>

                    <iframe
                        src="https://www.youtube-nocookie.com/embed/7qb3C-lnLX8?rel=0"
                        title="Network Analysis with Tinkerpop, DataStax Graph, and DataStax Studio."
                        frameBorder="0"
                        allowFullScreen
                    />

                </SkillList>
            </SkillContainer>


            <SkillDivider />
            <SkillContainer title="Rapid Prototyping">
                <SkillBlurb variant="subheading">
                    When I think about the times in my career when I had the most fun, I think about prototyping.
                    Rapid prototyping efforts tend to involve working closely with a small, tightly knit team in a highly collaborative manner, and that gets me excited!
                    Situations like this require a fluid growth mindset, the attitude and aptitude to learn new technologies and business domains, and the ability to build a product that delivers the intended value and achieves product market fit. I'm proud to say that I check all those boxes.
                    In situations like this there are no limits to the scope of the work you may end up doing, which lends itself well to my diverse skillset.
                    I'm proud to say that throughout my career I have even been successful in taking a few of my own ideas from brainstorming to production.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Legitimate full-stack development skills from the DB to the UI.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Proven ability to design and implement products that are effective, intuitive, and make users happy.
                        </ListText>
                    </ListItem>
                </SkillList>
            </SkillContainer>

            <SkillDivider />
            <SkillContainer title="Product Design & UX">
                <SkillBlurb variant="subheading">
                    My approach to software is rooted in user empathy and product focus, regardless of what layer of the stack I'm in.
                    So while I'm not a product or UX designer per se, I am a developer that tends to end up working very closely with these folks to bridge the gap between the user and the tech.
                    And although I'm not formally educated in this discipline, I have found that a firm understanding of the basic principles coupled with the discipline to follow them is more than sufficient in most cases.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Proven ability to take projects from ideation to production.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Frequently relied upon by Product Managers and UX Designers to provide feedback and technical input.
                        </ListText>
                    </ListItem>

                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Relentless attention to product focus.
                        </ListText>
                    </ListItem>

                    <ListItem>
                        <ListText variant={getBlurbTypographyVariant(width)}>
                            Strong ability and willingness to get inside the heads of the users.
                        </ListText>
                    </ListItem>

                </SkillList>
            </SkillContainer>

        </SectionContainer>
    </React.Fragment>
);

export default withWidth()(Skills);
