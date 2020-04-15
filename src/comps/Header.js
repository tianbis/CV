import React from 'react';

import {useDispatch, useSelector} from 'react-redux'
import {AppBar,Toolbar, IconButton, makeStyles,Typography } from '@material-ui/core';
import { InvertColors, Language } from '@material-ui/icons';

function Header(){
    const  dispatch = useDispatch()
    // const stateLang = useSelector(state => state.lang)
    // const theme = useSelector(state => state.theme)

    const classes = useStyles();
    
    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.toolBar}>
                    <IconButton onClick={() => dispatch({type:'SWITCH_THEME'})}>
                        <InvertColors />
                    </IconButton>
                    <IconButton onClick={() => dispatch({type:'SWITCH_LANG'})}>
                        <Typography style={{display:'flex', alignItems:'center'}}>
                            <Language />
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar /> {/* por position fixed */}
        </>
    )
}

const useStyles = makeStyles({
    toolBar:{
        display:'flex',
        textTransform: 'uppercase',
        justifyContent: 'space-around'
    }
})

export default Header;