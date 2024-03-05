import React from 'react';
import Section from './Section';
import {PeopleAlt, ChevronRight, BookmarkBorder} from '@material-ui/icons';
import { Typography, Link, makeStyles, useTheme } from '@material-ui/core';

function VolunteerSection(props){
    const theme = useTheme()
    const classes = useStyles({palette: theme.palette})
    const info = props.info;
    return (
        <Section title={info.title[props.lang]} icon={<PeopleAlt />}>
            {info.data.map( (el,idx) => {
                return (
                    <div key={idx} className={classes.job}>
                        <Typography variant="h6">
                            <ChevronRight className={classes.vAlign} /> <span className={classes.vAlign}>{el.position[props.lang]}</span>
                        </Typography>
                        <div style={{paddingLeft:30}}>
                            <Link className={classes.link} href={el.website} variant="subtitle2" > {el.organization} </Link>
                            <Typography variant="caption" component="div" color="textSecondary" className={classes.miniCaption}>  
                                {el.startDate[props.lang]} - {el.endDate[props.lang]}
                            </Typography>
                            <Typography variant="body2"> 
                                {el.summary[props.lang]} 
                            </Typography>
                            {el.highlights.map( (el,idx) => {
                                return (
                                    <Typography key={idx} variant="subtitle2">
                                        <BookmarkBorder className={classes.vAlign} /> <span className={classes.vAlign}>{el[props.lang]}</span>
                                    </Typography>
                                )
                            })}
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
    link: props => ({
        color: props.palette.primary.contrastText,
        textDecoration: 'underline'
    }),
    miniCaption:{
        fontSize: '0.8em',
        fontStyle: 'italic',
        marginTop: -5
    }
})

export default VolunteerSection;