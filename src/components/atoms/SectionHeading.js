import React from 'react'

export default function SectionHeading(props) {
    const styles = {
        sectionTitle: {
            'margin': '2rem 0 0 0'
        },
    }

    return (
        <div className="section-heading">
            <h2 className="section-title" style={styles.sectionTitle}>{props.sectionTitle}</h2>
        </div>
    )
}
