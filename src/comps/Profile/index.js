import React from 'react';
import {connect} from 'react-redux'

import { makeStyles, useTheme } from '@material-ui/core';
import ProfilePic from './ProfilePic';
import BasicInfo from './BasicInfo';

function Profile(props){
    const theme = useTheme()
    
    const classes = useStyles({...props,palette: theme.palette})
    return (
        <div className={`${classes.profile} ${classes.height}`}>
            <ProfilePic imgSrc={props.info.picture}></ProfilePic>
            <BasicInfo lang={props.lang} info={props.info}></BasicInfo>
            <button onClick={ () => {props.switchTheme()}}></button>
        </div>
    )
}

const useStyles = makeStyles({
    height: props => ({
        height: props.height ? props.height : 'auto'
    }),
    profile: props => ({
        paddingTop: 25,
        display:'flex',
        flexFlow:'column',
        alignItems: 'center',
        background: `linear-gradient(90deg,${props.palette.primary.dark}  0%, ${props.palette.background.default} 100%)` 
    })
})

const mapDispatchToProps = (dispatch) => {
    return {
        switchTheme: () => {dispatch({type:'SWITCH_THEME'})},
    }
}
const mapStateToProps = (state) => {
    return {
        info: {...state.resume.basics,languages:state.resume.languages.data},
        lang: state.lang
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);