import React from 'react';
import Section from './Section';
import {Info} from '@material-ui/icons';

function AboutSection(props){
    let info = props.info;
    return (
        <Section title={info.title[props.lang]} icon={<Info />}>
            {info.data[props.lang]}
        </Section>
    )
}

export default AboutSection;