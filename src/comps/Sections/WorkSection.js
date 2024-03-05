import React from 'react';
import Section from './Section';
import {Work, Code} from '@material-ui/icons';
import { Typography, Link, makeStyles, useTheme } from '@material-ui/core';

function WorkSection({ info, lang }){
    const theme = useTheme()
    const data = info.data.sort((a, b) => a.startDate.date < b.startDate.date)
    const classes = useStyles({palette: theme.palette})
    return (
        <Section title={info.title[lang]} icon={<Work />}>
            {data.map( (el,idx) => {
                return (
                    <div key={idx} className={classes.job}>
                        <Typography variant="h6">
                            <Code className={classes.vAlign} /> <span className={classes.vAlign}>{el.position[lang]}</span>
                        </Typography>
                        <div style={{paddingLeft:30}}>
                            <Link className={classes.company} href={el.website} variant="subtitle2" > {el.company} </Link>
                            <Typography variant="caption" component="div" color="textSecondary" className={classes.miniCaption}>  
                                {el.startDate[lang]} - {el.endDate[lang]}
                            </Typography>
                            <Typography variant="body2"> 
                                {el.summary[lang]} 
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
    company: props => ({
        color: props.palette.primary.contrastText,
        textDecoration: 'underline'
    }),
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