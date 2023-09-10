import React from 'react';
import styled from 'react-emotion';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import theme from './theme.js';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './sections/about/About.js';
import Intro from './sections/intro/Intro.js';
import Skills from './sections/skills/Skills.js';
import Experience from './sections/experience/Experience.js';
import Contact from './sections/contact/Contact.js';
import Testimonials from './sections/testimonials/Testimonials.js';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // ...for injecting the styles in the DOM.
  insertionPoint: document.getElementById('jss-insertion-point'),
});

const
  AppBarSpacer = styled('div')`
    min-height: ${theme.mixins.toolbar.minHeight}px;
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
      {/* <Skills /> */}
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </MuiThemeProvider>
  </JssProvider>
);

export default App;