import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core'
import Section from './Section'
import { Stars } from '@material-ui/icons'

const SOFlair = (props) => {
    const link = `http://stackoverflow.com/users/flair/5796253.png?theme=${props.theme}`
    return (
        <a href="http://stackoverflow.com/users/5796253/sebastianb">
			<img
				src={link}
				width="208"
                height="58"
				alt="profile for Sebastianb at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
				title="profile for Sebastianb at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
			/>
		</a>
    )
}

const GithubBadge = (props) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/github-cards/latest/widget.js";
        script.async = true;
      
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <div className="github-card" data-github="tianbis" data-width="300" data-height="" data-theme="default"></div>
    )
}

const LinkedInBadge = (props) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
      
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <div 
            class="badge-base LI-profile-badge"  
            data-version="v1" 
            data-size="small" 
            data-locale={props.lang}
            data-type="VERTICAL" 
            data-theme={props.theme} 
            data-vanity="sebastianbiscussi"
        >
        </div>
    )
}

const ExtraSection = (props) => {
    const classes = useStyles();
    return (
        <Section title="Extras" icon={<Stars />}>
            <div className={classes.container}>
                <GithubBadge />
                <SOFlair theme={props.theme} />
                <LinkedInBadge lang={props.lang} theme={props.theme} />
            </div>
            
        </Section>
    )
}

const useStyles= makeStyles({
    container: {
        display:'flex',
        flexWrap: 'wrap',
        alignItems:'flex-start',
        justifyContent:'space-around'
    }
})

export default ExtraSection