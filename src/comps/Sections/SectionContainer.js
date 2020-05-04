import React from 'react';
import { Grid,makeStyles, Container } from '@material-ui/core';

import { connect } from 'react-redux';
import WorkSection from './WorkSection';
import EducationSection from './EducationSection';
import AboutSection from './AboutSection';
import VolunteerSection from './VolunteerSection';
import SkillsSection from './SkillsSection';
import ExtraSection from './ExtraSection';

function SectionContainer(props){
    const resume = props.resume
    const lang = props.lang
    const classes = useStyles(props)
    return (
        <Container>
            <Grid className={`${classes.height}`}>
                <AboutSection lang={lang} info={resume.basics.summary} />
                <WorkSection lang={lang} info={resume.work} />
                <EducationSection lang={lang} info={resume.education} />
                <VolunteerSection lang={lang} info={resume.volunteer} />
                <SkillsSection lang={lang} info={resume.skills} />
                <ExtraSection lang={lang} theme={props.theme} />
            </Grid>

        </Container>
    );
}

const useStyles = makeStyles({
    height: props => ({
        height: props.height ? props.height : 'auto'
    })
})

const mapStateToProps = state => {
    return {
        resume: state.resume,
        lang: state.lang,
        theme: state.theme
    }
}
export default connect(mapStateToProps)(SectionContainer)