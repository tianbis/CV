import React from 'react';
import { Grid, Typography, makeStyles, Divider } from '@material-ui/core';

function Section(props){
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <Grid item xs={12}>
                <Typography className={classes.title} variant="h5">
                    <span className={classes.icon}>{props.icon}</span>
                    <span>{props.title}</span>
                </Typography>
                <Divider />
            </Grid>
            <Grid className={classes.body} item xs={12}>
                {props.children}
            </Grid>
        </div>
    );
}

const useStyles = makeStyles({
    section: {
        paddingBottom: 30
    },
    icon:{
        marginRight: 10
    },
    title:{
        marginTop:20,
        display:'flex',
        '& span':{
            lineHeight: 1,
            verticalAlign: 'middle'
        }
    },
    body:{
        paddingTop:15,
        paddingLeft: 50
    }
})

export default Section;