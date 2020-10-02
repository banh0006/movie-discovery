import React from 'react'
import { MOVIE_IMAGE_URL } from '../../asset/GlobalData'

export default function CastInfoCard({ name, url }) {
    const styles = {
        cardContainer: {
            'maxWidth': '60px',
            'marginRight': '1rem'
        },
        cardImage: {
            'width': '100%',
        },
        cardText: {
            'textAlign': 'center'
        }
    }
    
    return (
        <div className="cast-info" style={styles.cardContainer}>
            <img src={MOVIE_IMAGE_URL + url}  alt="Not found" style={styles.cardImage} />
            <div className="cast-name" style={styles.cardText} >{name}</div>
        </div>
    )
}
