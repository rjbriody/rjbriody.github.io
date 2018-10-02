import React from 'react';
import styled from 'react-emotion';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme.js';
import Header from './Header.js';
import About from './sections/about/About.js';
import Intro from './sections/intro/Intro.js';
import Skills from './sections/skills/Skills.js';
import Tech from './sections/tech/Tech.js';
import Testimonials from './sections/testimonials/Testimonials.js';

const AppBarSpacer = styled('div')`
  min-height: ${theme.mixins.toolbar.minHeight}px;
`;

export default () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <AppBarSpacer />
    <Intro />
    <Testimonials />
    <About />
    <Skills />
    <Tech />
  </MuiThemeProvider>
);
