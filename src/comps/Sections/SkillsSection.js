import React from 'react';
import Section from './Section';
import {Build} from '@material-ui/icons';
import {Chip, makeStyles, Avatar, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

function WorkSection(props){
    const theme = useTheme();
    const classes = useStyles(theme);
    const info = props.info;

    return (
        <Section title={info.title[props.lang]} icon={<Build />}>
            {info.data.map( (el,idx) => {
                return (
                    <div key={idx} className={classes.skill}>
                        <Typography variant="h6" style={{marginBottom:'-5px'}}>{el.name[props.lang]}</Typography>
                        <Typography variant="caption" color="textSecondary">{el.description[props.lang]}</Typography>
                        <div className={classes.tagContainer}>
                            {el.keywords.map((keyword,idx) => {
                                return <Tag key={idx} icon={keyword.icon} tag={keyword.tag}></Tag>
                            })}
                        </div>
                    </div>
                )
            })}
        </Section>
    )
}

function Tag(props){
    let icon = `icon-${props.icon}`
    return (
        <Chip  
            avatar={
                <Avatar>
                    <i className={icon}></i>
                </Avatar>
            } 
            color="secondary"
            label={props.tag}
            style={{margin: 3}}
        />
    )
}

const useStyles = makeStyles({
    skill: props => ({
        margin: '.75em 0',
        padding: '0 .75em',
        borderLeft: `5px solid ${props.palette.primary.main}`
    }),
    tagContainer:{
        marginTop:10
    },
    vAlign:{
        lineHeight: 1,
        verticalAlign:'middle'
    },
    miniCaption:{
        fontSize: '0.8em',
        fontStyle: 'italic',
        marginTop: -5
    }
})

export default WorkSection;