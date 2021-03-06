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
        padding: 30px;
    `,
    SkillBlurb = styled(Typography)`
        color: black;
        text-align: left;
    `,
    SkillStrong = styled(Typography)`
        color: black;
        font-weight: 400;
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
    TechList = styled(Typography)`
        color: black;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px
    `,
    AnchorContainer = styled('div')`
        visibility: hidden;
        height: 0px;
    `,
    IframeWrapper = styled('div')`
        margin: auto;
    `;

const SkillContainerBase = ({ children, title, width }) => (
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

const Experience = ({ width }) => (
    <React.Fragment>
        <AnchorContainer>
            <a name="experience">Experience</a>
        </AnchorContainer>
        <SectionContainer>
            <Header variant={isWidthUp('sm', width) ? "display3" : "display1"}>
                Professional Experience
            </Header>

            <SkillDivider />
            <SkillContainer title="DataStax">
                <SkillBlurb variant="subheading">
                    <SkillStrong variant="heading">
                        2015 - Present<br />
                        Technical Lead & Development Manager<br />
                        Primary Project: DataStax Studio
                    </SkillStrong>
                    <br />
                    <a href="https://www.datastax.com/products/datastax-studio-and-development-tools#DataStax-Studio" target="_blank">Studio is a Notebook-style developer enablement tool</a> that DataStax Enterprise (DSE) customers use to develop applications against DSE Graph, CQL, Search, & Analytics.
                </SkillBlurb>
                <SkillStrong variant="subheading">
                    <br />
                    Creator & Technical Lead (2015-Present)
                </SkillStrong>
                <SkillList>
                    <ListItem>
                        <ListText variant="subheading">
                            Designed full-stack system architecture.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Single handedly implemented initial full-stack prototype - java/spring backend, javascript front-end.
                            </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Participated heavily in all aspects of product design including UX workflow definitions, product design specifications, personas definitions, and usability observations.
                            </ListText>
                    </ListItem>

                    <ListItem>
                        <ListText variant="subheading">
                            Designed & implemented...
                        </ListText>
                    </ListItem>
                    <SkillList>

                        <ListItem>
                            <ListText variant="subheading">
                                <a href="https://www.datastax.com/wp-content/uploads/2017/06/Screen-Shot-2017-05-24-at-3.31.43-PM.png" target="_blank">Best-in-class graph visualization and charting interface</a> with interactive customizations and exploration capabilities.
                            </ListText>
                        </ListItem>
                        <ListItem>
                            <ListText variant="subheading">
                                “Whiteboard inspired” <a href="https://s3.amazonaws.com/datastax-graph-schema-viewer/index.html#/?schema=pokegraph.json" target="_blank">property-graph schema viewer</a> that enables a natural, interactive schema exploration experience.
                            </ListText>
                        </ListItem>
                        <ListItem>
                            <ListText variant="subheading">
                                Gremlin query profiler view, a bespoke D3-based visualization that provides critical insight into Traversal execution behavior.
                        </ListText>
                        </ListItem>
                        <ListItem>
                            <ListText variant="subheading">
                                Domain-agnostic, <a href="https://www.datastax.com/wp-content/uploads/2017/06/Screen-Shot-2017-05-24-at-3.31.43-PM.png" target="_blank">dynamic charting capabilities</a> for on-the-fly data visualization.
                        </ListText>
                        </ListItem>

                        <ListItem>
                            <ListText variant="subheading">
                                Back-end graph query execution service.
                        </ListText>
                        </ListItem>
                    </SkillList>
                </SkillList>

                <SkillStrong variant="subheading">
                    Dev Manager (Jan 2018 - Present)
                </SkillStrong>
                <SkillList>
                    <ListItem>
                        <ListText variant="subheading">
                            Project Development Manager leading team of ~15 members, 5 of whom are developers (including myself).
                        </ListText>
                    </ListItem>

                    <ListItem>
                        <ListText variant="subheading">
                            Instrumental in defining best practices, development methodologies, agile adoption, and general processes regarding release planning, deployment, and people management.
                        </ListText>
                    </ListItem>

                </SkillList>

                <SkillStrong variant="subheading">
                    Acting Product Manager (Temporary 2017)
                </SkillStrong>
                <SkillList>
                    <ListItem>
                        <ListText variant="subheading">
                            Assumed temporary “Acting Product Manager” role (in addition to regular duties) during ProdM staffing transition. (Note: I have no interest in becoming a Product Manager, but I care deeply about ensuring that my team builds the best product possible, and in this situation that meant branching out my responsibilities.)
                        </ListText>
                    </ListItem>
                </SkillList>

                <TechList>
                    Technologies: DataStax Enterprise (Cassandra, Graph, Solr, Spark), Java, JavaScript, TinkerPop, React, Redux, vis.js, D3, Spring Framework, JAX-RS, JSON, Junit, Git.
                </TechList>
                <br />
                <SkillStrong variant="subheading">
                    Misceleneous
                </SkillStrong>
                <SkillList>
                    <ListItem>
                        <ListText variant="subheading">
                            Extremely honored to be selected by peers for an annual “Employee Excellence Award”. (Awarded to 6 of ~150 team members.) <a href="https://photos.app.goo.gl/iXFCr6GWF78Dhm9x2" target="_blank">See what folks had to say here.</a>
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Pioneered the forefront project, a customizable demonstration platform that provides the sales team with unprecedented ability to create pristine, customer-focused, interactive sales collateral that highlights key DataStax differentiators to high-value prospects.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Volunteered to implement the <a href="https://s3.amazonaws.com/datastax-graph-schema-viewer/index.html#/?schema=pokegraph.json" target="_blank">Standalone schema viewer</a>, an html/js app that is used to dynamically render an interactive property-graph schema view that can be embedded in blog posts, documentation, and github examples. (1.5 week side project to help developer relations team.)
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            2016 Cassandra Summit Speaker <a href="https://youtu.be/7qb3C-lnLX8" target="_blank">Network Analysis with DSE Graph, Studio, and TinkerPop.</a>
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            DataStax Engineering Blog contributor: <a href="https://www.datastax.com/dev/blog/graph-storytelling-with-studio-2-0-0" target="_blank">Graph Storytelling with Studio 2.0.0.</a>
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Appeared on <a href="https://youtu.be/utyMj3v8GJg" target="_blank">DataStax Distributed Data Show.</a>
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Educator for 4 units of <a href="https://photos.app.goo.gl/b3hTnE6wryFa3Ztf7" target="_blank">DataStax Academy Graph Course.</a>
                        </ListText>
                    </ListItem>
                </SkillList>
            </SkillContainer>

            <SkillDivider />
            <SkillContainer title="Aurelius">
                <SkillBlurb variant="subheading">
                    <SkillStrong variant="heading">
                        2014 - 2015 (Acquired by DataStax)<br />
                        Core Developer & Graph Consultant<br />
                        Projects: Apache TinkerPop, Titan GraphDB (Now Apache Jaunus)<br />
                    </SkillStrong>
                    <br />
                    As one of just seven developers at Aurelius, the company behind the <a href="http://tinkerpop.apache.org/" target="_blank">Apache TinkerPop</a> Graph Library and <a href="https://thinkaurelius.wordpress.com/team/" target="_blank">Open Source Graph Database, Titan</a>.
                    I wore a lot of hats and participated in many aspects of the Aurelius ecosystem.
                    Core responsibilities were primarily split between TinkerPop Development and customer consulting services.
                    Customer engagements typically began with an on-site visit (ranging from a few days to a week), followed by a varying duration of remote support, typically a few months.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        <ListText variant="subheading">
                            Advised clients on all GraphDB-related matters such as modeling / schema design, query development & optimization, system architecture, concurrency, scalability, development practices, and testing.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Designed and implemented intuitive graph analysis and visualization applications.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Implemented RESTful enterprise Java applications built around TinkerPop, Titan, ElasticSearch, and Cassandra.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Lead/Solo developer - Gremlin Dashboard (which later served as the inspiration for DataStax Studio).
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Designed & implemented the TinkerPop 3 Traversal Profiling Framework, which is used by developers to gain critical insight when optimizing Traversals. This is also the framework upon which the Studio Profile View is built.
                        </ListText>
                    </ListItem>
                </SkillList>

                <TechList>
                    Technologies: TinkerPop, Titan, Neo4J, Cassandra, ElasticSearch, Java, JavaScript, vis.js, sigma.js, D3, Angular, Spring Framework, JAX-RS, JSON, Junit, Git, YourKit.
                </TechList>

            </SkillContainer>

            <SkillDivider />
            <SkillContainer title="Rovi">
                <SkillBlurb variant="subheading">
                    <SkillStrong variant="heading">
                        2013 - 2014<br />
                        Technical Lead<br />
                        Project: Search & Recommendation / Data Delivery<br />
                    </SkillStrong>
                    <br />
                    Rovi (now TiVo) was an entertainment meta-data services company. I participated heavily in the architecture, system configuration, and implementation of Rovi's next generation Search, Recommendation, and Real-Time Data Delivery system.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        <ListText variant="subheading">
                            Lead developer: Core Search Component. Implemented real-time search and recommendation engine.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Implemented graph-like expansion mechanics over Solr for unprecedented API flexibility. (I basically built GraphQL before GraphQL existed.)
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Decoupled the domain expert and development team workflows by implementing a fully configuration-driven model design (words like “movie” & “person” do not appear in the codebase).
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Designed and implemented an asynchronous message-driven data ingest component to enable real-time data ingestion at the service layer.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Utilized MongoDB for message archival and system bootstrap. (It's cool... it was just a cache)
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Incorporated batch recommendation analytics by pulling mined data from Cassandra.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Enabled “similar items” and “for you” recommendation services by augmenting Solr search logic with latent factors and relevance data.
                        </ListText>
                    </ListItem>
                </SkillList>


                <TechList>
                    Technologies: Java, MongoDB, Solr, RabbitMQ, Python, Spring, Cassandra, EHCache, Zookeeper, JAX-RS, JSON, Junit, Tomcat, Artifactory, Team City, Subversion, VisualVM.
                </TechList>

            </SkillContainer>

            <SkillDivider />
            <SkillContainer title="ITT Exelis">
                <SkillBlurb variant="subheading">
                    <SkillStrong variant="heading">
                        2005 - 2013<br />
                        Technical Lead <br />
                        Project: Scout<br />
                    </SkillStrong>
                    <br />
                    Scout is a client-server data visualization application used by Dept of Defense (DoD) analysts for rapid screening and technical analysis of high-bandwidth signal data. Scout began as a research and development project proposed and
                    prototyped by myself, and eventually grew to 4.5 full time engineers. I’m told that analysts still use Scout for mission critical operations on a daily basis because despite there being no new development in nearly 5 years, it’s still the best and fastest spectral processing application available. In addition to my technical duties such as architecting the system and leading the development team, I was also responsible for interacting with “The Customer”, gathering requirements from analysts, proposing new features, managing schedules, and delegating tasks to the development team.
                </SkillBlurb>
                <SkillList>
                    <ListItem>
                        <ListText variant="subheading">
                            Introduced unprecedented performance by designing a scalable multi-GPU-based approach to a processing paradigm that had remained serialized on high-cost custom FPGAs in competing applications for over a decade.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Designed and implemented complex server-side data sifting algorithms that reduced network traffic and greatly increased performance.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Eliminated hours from analyst’s daily work-flow by proposing and implementing batch pre-processing.
                        </ListText>
                    </ListItem>
                    <ListItem>
                        <ListText variant="subheading">
                            Integrated native hardware processing modules via custom IPC.
                        </ListText>
                    </ListItem>
                </SkillList>

                <TechList>
                    Technologies: Spring Framework, Spring Web MVC, Spring Security, Spring Data, MongoDB, NoSQL, EHCache, JAX-RS, JPA, JSON, JSP, JSTL, HTML, CSS, JQuery, JUnit, JBoss, Gradle, Ivy, Artifactory, Hudson, Subversion, VisualVM.
                </TechList>

            </SkillContainer>
        </SectionContainer>
    </React.Fragment>
);

export default withWidth()(Experience);
