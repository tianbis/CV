import React from 'react';
import {connect} from 'react-redux'

import { makeStyles, useTheme } from '@material-ui/core';
import ProfilePic from './ProfilePic';
import BasicInfo from './BasicInfo';
import SocialLinks from './SocialLinks';

function Profile(props){
    const theme = useTheme()
    
    const classes = useStyles({...props,palette: theme.palette})
    return (
        <div className={`${classes.profile} ${classes.height}`}>
            <ProfilePic imgSrc={props.info.picture}></ProfilePic>
            <SocialLinks info={props.info.profiles} />
            <BasicInfo lang={props.lang} info={props.info}></BasicInfo>
        </div>
    )
}

const useStyles = makeStyles({
    height: props => ({
        height: props.height ? props.height : 'auto'
    }),
    profile: props => ({
        display:'flex',
        flexFlow:'column',
        alignItems: 'center',
        backgroundColor: props.palette.primary.light,
    })
})

const mapStateToProps = (state) => {
    return {
        info: {...state.resume.basics,languages:state.resume.languages.data},
        lang: state.lang
    }
}
export default connect(
    mapStateToProps
)(Profile);