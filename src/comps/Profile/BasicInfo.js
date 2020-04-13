import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

import { Room, Mail, Language } from '@material-ui/icons'

function BasicInfo(props){
    const classes = useStyles();
    const info = props.info;
        
    return (
        <div className={classes.container}>
            <Typography variant="h4">{info.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{info.label[props.lang]}</Typography>
            <div className={classes.extraData}>
                <div className='row'>
                    <Room /><span>{info.location.city}, {info.location.region} - {info.location.countryCode} </span>
                </div>
                <div className='row'>
                    <Mail /><span>{info.email} </span>
                </div>
                <div className='row'>
                    <Language  style={{alignSelf:'flex-start'}} />
                    <span>
                        {
                            info.languages.map( (el,idx) => {
                                return (
                                    <div key={idx}>
                                        {el.name[props.lang]} 
                                        <Typography variant="caption" color="textSecondary"> ({el.level[props.lang]}) </Typography>
                                    </div>
                                )
                            })
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        display:'flex',
        alignItems: 'center',
        flexFlow: 'column'
    },
    extraData: {
        paddingTop: 25,
        '& .row': {
            paddingBottom:10,
            display:'flex',
            alignItems:'center',
            '& svg':{
                marginRight: 10
            }
        },
    },
})

export default BasicInfo;