import React from 'react'

export default function SectionHeading(props) {
    const styles = {
        sectionTitle : {
            color: '#fff'
        }
    }
    return (
        <div className="section-heading">
            <h2 className="section-title" style={styles.sectionTitle} >{props.sectionTitle}</h2>
        </div>
    )
}
