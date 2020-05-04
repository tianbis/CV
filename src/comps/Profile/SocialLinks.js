import React from "react"
import { GitHub, LinkedIn } from "@material-ui/icons"
import { Link, makeStyles } from "@material-ui/core";

function SocialLinks(props){
    const classes = useStyles()
    const profiles = props.info
    return (
        <div className={classes.links}>
            <Link color="textSecondary" href={profiles[0].url + profiles[0].username} target="_blank" rel="noopener"><LinkedIn /></Link>
            <Link color="textSecondary" href={profiles[1].url + profiles[1].username} target="_blank" rel="noopener"><GitHub /></Link>
        </div>
    )
}

const useStyles = makeStyles({
    links: {
        marginTop: 15,
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%'
    }
})

export default SocialLinks;