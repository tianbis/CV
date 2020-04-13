import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Profile from './comps/Profile';
import './App.css'
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';


import SectionContainer from './comps/Sections/SectionContainer';
import { connect } from 'react-redux';


function App(props) {
	const classes = useStyles()
	const darkTheme = createMuiTheme({
		palette: {
			type: props.theme,
			primary:{
				main: "#009688"
			},
			secondary:{
				main: "#880e4f"
			}
		}
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
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