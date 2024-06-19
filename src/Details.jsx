import React from 'react';
import { 
    DetailsContainer, 
    SongInfoCard, 
    SongImage,
    TrackName,
    ArtistName,
    AlbumName,
    BackButtonLink
} from './styles/Dashboard.styles';
import Memory from './Memory';

const Details = ({ track }) => {
    return (
        <DetailsContainer>
            <SongInfoCard>
                <BackButtonLink href={track.track?.album?.external_urls?.spotify} target="blank_"><SongImage src={track.track?.album.images[0].url} alt={track.track?.name}/></BackButtonLink>
                <BackButtonLink href={track.track?.external_urls?.spotify} target="blank_"><TrackName className='trackName'>{track.track?.name}</TrackName></BackButtonLink>
                <BackButtonLink href={track.track?.artists[0]?.external_urls?.spotify} target="blank_"><ArtistName>{track.track?.artists.map((artist) => artist.name).join(", ")}</ArtistName></BackButtonLink>
                <BackButtonLink href={track.track?.album?.external_urls?.spotify} target="blank_"><AlbumName>{track.track?.album.name}</AlbumName></BackButtonLink>
            </SongInfoCard>
            <Memory id={track?.memoryId}></Memory>
        </DetailsContainer>
    )
}

export default Details;