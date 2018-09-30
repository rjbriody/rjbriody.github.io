import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './Header.js';
import About from './sections/about/About.js';
import Intro from './sections/intro/Intro.js';
import Skills from './sections/skills/Skills.js';
import Tech from './sections/tech/Tech.js';
import Testimonials from './sections/testimonials/Testimonials.js';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default () => (
  <MuiThemeProvider theme={theme}>
    <Header />
    <Intro />
    <Testimonials />
    <About />
    <Skills />
    <Tech />
  </MuiThemeProvider>
);
