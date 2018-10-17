import React from 'react';

import styled from 'react-emotion';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBarMui from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import theme from './theme.js';

const
    MainAppBar = styled(AppBarMui)`
        z-index:  ${theme.zIndex.drawer + 1};
        background-color: #1e2026;
    `,
    AppBarSpacer = styled('div')`
        min-height: ${theme.mixins.toolbar.minHeight}px;
    `;

export default class Header extends React.Component {
    state = {
        open: false
    };

    handleToggleDrawerOpen = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    }

    onClick = location => {
        window.location = location;
        this.handleToggleDrawerOpen();
    }

    render() {
        const { open } = this.state;
        return (
            <React.Fragment>
                <MainAppBar>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open/Close drawer"
                            onClick={this.handleToggleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            Bob Briody
                        </Typography>
                    </Toolbar>
                </MainAppBar>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <AppBarSpacer />
                    <List>
                        <ListItem button onClick={() => { this.onClick('#testimonials') }}>
                            <ListItemText primary="Testimonials" />
                        </ListItem>
                        <ListItem button onClick={() => { this.onClick('#about') }}>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button onClick={() => { this.onClick('#skills') }}>
                            <ListItemText primary="Areas of Expertise" />
                        </ListItem>
                        <ListItem button onClick={() => { this.onClick('#experience') }}>
                            <ListItemText primary="Professional Experience" />
                        </ListItem>
                        <ListItem button onClick={() => { this.onClick('#contact') }}>
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </List>
                </Drawer>
            </React.Fragment>
        );
    }
}