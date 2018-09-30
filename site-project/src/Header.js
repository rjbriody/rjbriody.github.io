import React from 'react';

import styled from 'react-emotion';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 440,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

class Header extends React.Component {
    state = {
        open: false
    };

    handleToggleDrawerOpen = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <React.Fragment>
                <AppBar className={classes.appBar}>
                    <Toolbar>

                        <IconButton
                            color="inherit"
                            aria-label="Open/Close drawer"
                            onClick={this.handleToggleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            Bob Briody
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <div className={classes.toolbar} />
                    <List>
                        <ListItem button href="#tech">
                            <ListItemText primary="Testimonials" />
                        </ListItem>
                        <ListItem button onClick={() => { window.location = '#about' }}>
                            <ListItemText primary="About" />
                        </ListItem>

                        <ListItem button onClick={() => { window.location = '#tech' }}>
                            <ListItemText primary="Technologies" />
                        </ListItem>
                    </List>

                </Drawer>
            </React.Fragment>
        );
    }
}


Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);