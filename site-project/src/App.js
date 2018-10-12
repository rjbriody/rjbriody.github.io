import React from 'react';
import styled from 'react-emotion';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import theme from './theme.js';
import Header from './Header.js';
import About from './sections/about/About.js';
import Intro from './sections/intro/Intro.js';
import Skills from './sections/skills/Skills.js';
import Tech from './sections/tech/Tech.js';
import Testimonials from './sections/testimonials/Testimonials.js';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById('jss-insertion-point'),
});

const
  AppBarSpacer = styled('div')`
    min-height: ${theme.mixins.toolbar.minHeight}px;
  `,
  Footer = styled('div')`
    height: 300px;
    background-color: black;
  `;

const App = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <AppBarSpacer />
      <Intro />
      <Testimonials />
      <About />
      <Skills />
      <Tech />
      <Footer />
    </MuiThemeProvider>
  </JssProvider>
);

export default App;