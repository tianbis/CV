import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Profile from './comps/Profile';
import './App.css'
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';


import SectionContainer from './comps/Sections/SectionContainer';
import Header from './comps/Header.js'

import { connect } from 'react-redux';


function App(props) {
	const classes = useStyles()
	const darkTheme = createMuiTheme({
		palette: {
			type: 'dark',
			primary:{
				main: "#00695c"
			},
			secondary:{
				main: "#62757f"
			},
			background:{
				paper: '',
				default: 'darkslategray'
			}
		}
	});
	const lightTheme = createMuiTheme({
		palette: {
			type: 'light',
			primary:{
				main: "#b2dfdb"
			},
			secondary:{
				main: "#c1d5e0"
			},
			background:{
				default: 'mintcream'
			}
		}
	});
	return (
		<ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
			<CssBaseline />
			<Header />
			<Grid className={classes.fullHeight} container spacing={0} >
				<Grid className={classes.fullHeight} item xs={12} md={4} lg={3} >
					<Profile height="100%"></Profile>
				</Grid>
				<Grid className={classes.fullHeight} item xs={12} md={8} lg={9} >
					<SectionContainer height="100%"></SectionContainer>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

const useStyles = makeStyles({
	fullHeight: {
		minHeight: '100vh'
	}
})

const mapStateToProps = state => {
	return {
		theme: state.theme
	}
}
export default connect(
	mapStateToProps
)(App);