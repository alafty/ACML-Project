import React from 'react'
import '../../Styling/video.css'
import { Container } from '@mui/material';


export default function CourseVideo(props: { embedId: string }) {
    return (
        <div className="video-responsive" style={{
            height: '70%', width: '100%',
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
