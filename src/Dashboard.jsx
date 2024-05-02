import React, { useState, useEffect, useRef } from 'react';
import useAuth from './hooks/useAuth';
import Player from './Player';
import Details from './Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import SpotifyWebApi from 'spotify-web-api-node';
import {
    DashBoardContainer,
    PlayerContainer,
    BackButton,
    AlbumContainer, 
    Album, 
    TextContainer,
    Buffer,
    Track,
    Artist,
    SoftBox,
    Shuffle,
    Info,
    DetailsBox,
    AlbumImg,
    CurrTrack
} from './styles/Dashboard.styles';


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
});

const Dashboard = ({ code }) => {
    const accessToken = useAuth(code);
    const [playingTrack, setPlayingTrack] = useState();
    const [trackList, setTrackList] = useState([]);
    const [songs, setSongs] = useState([]);
    const [centeredIndex, setCenteredIndex] = useState(0);
    const albumContainerRef = useRef(null);
    const [show, setShow] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const [shuffle, setShuffle] = useState(false);
    const [inactivityTimer, setInactivityTimer] = useState(5000);
    const playlistId = "5zTUX59PIGj24TuLWBxnQC";  

    useEffect(() => {
        let timer;
        if (show) {
            timer = setTimeout(() => {
                setShow(false);
            }, inactivityTimer);
        }
    
        return () => {
            clearTimeout(timer);
        };
    }, [show, inactivityTimer]);

    function chooseTrack(e) {
        let idNum = parseInt(e.target.id);
        setPlayingTrack(songs[e.target.id]);
        fillTrackList(idNum);
        setScrollPos(idNum);
        setShow(true);
    }

    function fillTrackList(id){
        let indexes = [];
        if(shuffle){
            while (indexes.length < 5) {
                const i = Math.floor(Math.random() * (songs.length-1));
                if(!indexes.includes(i)){
                    indexes.push(i);
                }
                setTrackList([songs[id].track?.uri, songs[indexes[1]]?.track?.uri, songs[indexes[2]]?.track?.uri, songs[indexes[3]]?.track?.uri]);
            }
        } else {
            if(id <= songs.length-4){
                setTrackList([songs[id].track.uri, songs[id+1].track.uri, songs[id+2].track.uri, songs[id+3].track.uri, songs[0].track.uri]);
                indexes = [id, id+1, id+2, id+3, 0];
            } else if(id <= songs.length-3){
                setTrackList([songs[id].track.uri, songs[id+1].track.uri, songs[id+2].track.uri, songs[0].track.uri, songs[1].track.uri]);
                indexes = [id, id+1, id+2, 0, 1];
            } else if(id <= songs.length-2){
                setTrackList([songs[id].track.uri, songs[id+1].track.uri, songs[0].track.uri, songs[1].track.uri, songs[2].track.uri]);
                indexes = [id, id+1, 0, 1, 2];
            } else if(id <= songs.length-1){
                setTrackList([songs[id].track.uri, songs[0].track.uri, songs[1].track.uri, songs[2].track.uri, songs[3].track.uri]);
                indexes = [id, 0, 1, 2, 3];
            } else {
                setTrackList([songs[id].track.uri, songs[id+1].track.uri, songs[id+2].track.uri, songs[id+3].track.uri, songs[id+4].track.uri]);
                indexes = [id, id+1, id+2, id+3, id+4];
            }
        }
        countDuration(indexes);
    }

    function countDuration(indexes){
        let totalCount = 0;
        for(let i = 0; i < indexes.length; i++){
            totalCount += songs[indexes[i]].track.duration_ms;
        }
        setInactivityTimer(totalCount);
    }

    const onBackButtonClick = () => {
        setShow(false);
        setTimeout(() => {
            const element = document.getElementById(scrollPos);
            if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                inline: 'center'
            });
            }
            }, 250);
    };

    useEffect(() => {
        if(!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if(!accessToken) return;

        let cancel = false;
        let offset = 0;
        const allTracks = [];

        const fetchPlaylistTracks = async () => {
            try {
                const { body } = await spotifyApi.getPlaylistTracks(playlistId, { offset: offset });
                if (cancel) return;

                allTracks.push(...body.items);

                if(allTracks.length < body.total){
                    offset += 100;
                    await fetchPlaylistTracks();
                } else {
                    songHandling(allTracks);
                }
            } catch (err) {
                console.log("Error fetching the tracks: ", err);
            }
        };

        fetchPlaylistTracks();
        return () => (cancel = true);
    }, [playlistId, accessToken]);

    const songHandling = (allTracks) => {
        for(let i = 0; i < allTracks.length; i++){
            allTracks[i].memoryId = i;
        }
        console.log(allTracks);
        setSongs(allTracks);
    }

    useEffect(() => {
        // Add a scroll event listener to track the centered image index
        const handleScroll = () => {
          if (!albumContainerRef.current) return;
          const container = albumContainerRef.current;
          const containerWidth = container.clientWidth;
          const scrollLeft = container.scrollLeft;
          const albumWidth = (window.innerWidth/100)*25; //24vw
    
          // Calculate the centered index based on the scroll position
          const index = Math.floor((scrollLeft-(albumWidth*2)+(containerWidth/2))/albumWidth);
          setCenteredIndex(index);
        };
    
        const container = albumContainerRef.current;
        if (container) {
          container.addEventListener("scroll", handleScroll);
        }
    
        return () => {
          if (container) {
            container.removeEventListener("scroll", handleScroll);
          }
        };
      }, [songs, show]);

      const handleTrackSkip = (track) => {
        let correctTrack;
        for(let i = 0; i < songs.length; i++){
            if(track.id === songs[i].track.id){
                correctTrack = songs[i];
                setScrollPos(i);
            }
        }
        setPlayingTrack(correctTrack);
      };


    return (
        <DashBoardContainer>
                <AlbumContainer ref={albumContainerRef}>
                    <Buffer></Buffer>
                    <Buffer></Buffer>
                    {songs.map((song, index) => (
                        <Album key={index} onClick={chooseTrack}>
                            <AlbumImg src={song.track?.album?.images[0].url} alt={song.track?.album?.name} id={index}/>
                        </Album>
                    ))}
                    <Buffer id={songs.length}></Buffer>
                    <Buffer id={songs.length+1}></Buffer>
                </AlbumContainer>
                <SoftBox>
                    {songs[centeredIndex] && (
                        <TextContainer>
                            <Track>{songs[centeredIndex].track?.name}</Track>
                            <Artist>{songs[centeredIndex].track?.artists.map((artist) => artist.name).join(", ")}</Artist>
                        </TextContainer>
                    )}
                </SoftBox>
            <PlayerContainer>
                {playingTrack ? (
                    <CurrTrack onClick={() => {
                        setShow(true)
                    }}></CurrTrack>
                ) : null}
                <Shuffle id='shuffle'>
                    <FontAwesomeIcon icon={faShuffle} onClick={() => {
                        setShuffle(!shuffle);
                        if(shuffle){
                            document.getElementById('shuffle').style.color = "#efdfdf";
                        } else {
                            document.getElementById('shuffle').style.color = "#800000";
                        }
                    }}/>
                </Shuffle>
                <Player accessToken={accessToken} trackList={trackList} onTrackSkip={handleTrackSkip}/>
            </PlayerContainer>
            {show ? (
                <DetailsBox>
                    <BackButton onClick={onBackButtonClick}>
                        <p>&#8592;</p>
                    </BackButton>
                    <Details track={playingTrack}/>
                </DetailsBox>
            ): null}
            <Info>
                <a href="https://jackmanning.me/jukebox/index.html">?</a>
            </Info>
        </DashBoardContainer>
    );
};

export default Dashboard;