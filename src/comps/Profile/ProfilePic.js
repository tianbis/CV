import React from 'react';
import {Avatar, makeStyles} from '@material-ui/core'

function ProfilePic(props){
    const classes = useStyle();
    return (
        <Avatar src={props.imgSrc} className={classes.large} />
    )
}

const useStyle = makeStyles({
    large:{
        height:150,
        width:150
    }
})

export default ProfilePic;