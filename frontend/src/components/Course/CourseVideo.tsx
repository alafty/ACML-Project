import React from 'react'
import '../../Styling/video.css'
import { Container } from '@mui/material';


export default function CourseVideo(props: { embedId: string }) {
    return (
        <div className="video-responsive" style={{
            height: '72.5vh', width: '97%', margin: '20px', borderRadius: '20px'
        }}>
            <Container maxWidth={'sm'}>

                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${props.embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                    title="Embedded youtube"
                />
            </Container>
        </div>
    )
}
