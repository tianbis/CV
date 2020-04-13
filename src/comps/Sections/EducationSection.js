import React from 'react';
import Section from './Section';
import {School, ChevronRight} from '@material-ui/icons';
import { Typography, Link, makeStyles } from '@material-ui/core';

function EducationSection(props){
    const classes = useStyles();
    const info = props.info;
    return (
        <Section title={info.title[props.lang]} icon={<School />}>
            {info.data.map( (el,idx) => {
                return (
                    <div className={classes.job}>
                        <Typography variant="h6">
                            <ChevronRight className={classes.vAlign} /> <span className={classes.vAlign}>{el.area[props.lang]}, {el.studyType[props.lang]}</span>
                        </Typography>
                        <div style={{paddingLeft:30}}>
                            <Link href={el.website} variant="subtitle2" > {el.institution} </Link>
                            <Typography variant="caption" component="div" color="textSecondary" className={classes.miniCaption}>  
                                {el.startDate[props.lang]} - {el.endDate[props.lang]}
                            </Typography>
                        </div>
                    </div>
                )
            })}
        </Section>
    )
}

const useStyles = makeStyles({
    job: {
        marginBottom: 20
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

export default EducationSection;