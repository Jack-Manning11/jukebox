import React from 'react';
import { 
    DetailsContainer, 
    SongInfoCard, 
    SongImage,
    TrackName,
    ArtistName,
    AlbumName,
} from './styles/Dashboard.styles';
import Memory from './Memory';

const Details = ({ track }) => {
    console.log(track);
    return (
        <DetailsContainer>
            <SongInfoCard>
                <a><SongImage src={track.track?.album.images[0].url} alt={track.track?.name}/></a>
                <a href={track.track?.external_urls?.spotify}><TrackName className='trackName'>{track.track?.name}</TrackName></a>
                <a><ArtistName>{track.track?.artists.map((artist) => artist.name).join(", ")}</ArtistName></a>
                <a><AlbumName>{track.track?.album.name}</AlbumName></a>
            </SongInfoCard>
            <Memory id={track?.memoryId}></Memory>
        </DetailsContainer>
    )
}

export default Details;