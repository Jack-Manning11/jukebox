import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const gradientAnimation = keyframes`
  to {
    background-position: var(--bg-size) 0;
  }
`;

const GlobalStyles = styled.div`
  html {
    background-color: black;
    font-family: Helvetica, sans-serif;
    font-size: 1.5vw;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NavBarContainer = styled.div`
  z-index: 1000;
  position: sticky;
  width: 95%;
  display: flex;
  flex-direction: row;
  left: 0;
  top: 0;
  padding: 1vw 0vw;
  background-color: black;
`;

const NavBar = styled.div`
  margin: 0 0 0 2.5vw;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const NavLink = styled.a`
  margin: 10px 0;
  font-weight: bold;
  background-color: transparent;
  color: rgb(239, 223, 223);
  border-radius: 10%;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: rgb(128, 0, 0);
  }

  &.on-page {
    color: rgb(128, 0, 0);
  }
`;

const GradientText = styled.h2`
  margin: 1vw auto auto 5vw;
  line-height: 1;
  font-size: clamp(3rem, 30vmin, 7.5rem);
  background: linear-gradient(
    90deg,
    rgb(239, 223, 223),
    rgb(128, 0, 0),
    rgb(239, 223, 223)
  ) 0 0 / var(--bg-size) 5%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientAnimation} 26s infinite linear;

  &.hidden {
    display: none;
  }

  &.hidden-title {
    display: none;
  }
`;

const Divide = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2vw 3vw 0 3vw;
  width: 94%;
`;

const Blank = styled.div`
  padding: 0 2vw;
  flex-basis: 100%;
`;

const Title = styled.p`
  font-size: 1.2vw;
  font-weight: bold;
  text-align: left;
  padding: 2vw 0 0 0;
  color: rgb(239, 223, 223);
`;

const TextJustifyAlign = styled.p`
  font-size: 16px;
  text-align: justify;
  padding: 1vw 0;
  color: rgb(239, 223, 223);

  &.hidden {
    display: none;
  }

  &.hidden-br {
    display: none;
  }
`;

const PeopleBox = styled.div`
  padding: 1vw 3vw 0 3vw;
  width: 94%;

  &.hidden-smallscreen-smaller {
    display: none;
  }
`;

const PeopleFlexColumns = styled.div`
  display: flex;
  flex-direction: column;
`;

const PeopleFlexRows = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0vw 2vw;
`;

const Person = styled.div`
  flex-basis: 100%;
  padding: 1vw;
`;

const PersonImage = styled.img`
  padding: 1vw 0;
  height: 25vw;
  margin: auto;
`;

const PeopleText = styled.p`
  font-size: 18px;
  text-align: left;
  padding: 0vw 0 1vw;
  color: rgb(239, 223, 223);
`;

const TitlePeople = styled.p`
  font-size: 19px;
  font-weight: bold;
  text-align: left;
  padding: 2vw 0 0.5vw 2vw;
  color: rgb(239, 223, 223);
`;

const RoundButton = styled.a`
  --bg-size: 400%;
  --color-one: rgb(239, 223, 223);
  --color-two: rgb(128, 0, 0);
  font-size: clamp(2rem, 20vmin, 5rem);
  background: linear-gradient(
    90deg,
    var(--color-one),
    var(--color-two),
    var(--color-one)
  ) 0 0 / var(--bg-size) 5%;
  color: black;
  animation: ${gradientAnimation} 26s infinite linear;
  box-sizing: border-box;
  display: block;
  width: 45px;
  height: 45px;
  margin: auto auto auto 1.5vw;
  padding-top: 12px;
  line-height: 5px;
  border: 0 solid white;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  background-color: solid black;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(239, 223, 223);
    box-shadow: 0px 0px 10px rgb(239, 223, 223);
    text-shadow: 0px 0px 10px rgb(239, 223, 223);
  }
`;

const About = () => {
  return (
    <GlobalStyles>
      <NavBarContainer>
        <NavBar>
          <NavLink href="index.html">HOME</NavLink>
          <NavLink className="on-page" href="about.html">ABOUT</NavLink>
          <NavLink href="https://docs.google.com/forms/d/1KInCehTTZ-uSC-_DHUe5xv85l8g6AJ5Noz1d7AtyI0Y/viewform?edit_requested=true">CONTRIBUTE</NavLink>
          <RoundButton href="#"><FontAwesomeIcon icon={faPlay} /></RoundButton>
        </NavBar>
      </NavBarContainer>
      <GradientText className="hidden-smallscreen">CERTAIN<br />SONGS<br />ARE CURSED</GradientText>
      <GradientText className="hidden">CERTAIN<br />SONGS<br />ARE<br />CURSED</GradientText>
      <Divide>
        <Blank>
          <Title>ABOUT</Title>
          <TextJustifyAlign>
            Certain songs are cursed. They hang out uninvited in your head. There’s who you want / try to be, and then there’s who you really are, and these are the songs that make the wedge that splits the two and shows you the difference. They’ll remind you, with pin-sharp accuracy, of the smell of ex-lovers, the laughter of old friends, of lost atmospheres and environments and scenery and pointless detail, and every time you hear them by chance (and it’s always by chance) it’s akin to a need, scratching at a part of your soul that scientists have yet to document.
          </TextJustifyAlign>
          <br className="hidden-br" />
          <TextJustifyAlign>
            Certain Songs are Cursed is a creative art and scholarly research project housed at the ATLAS Institute at the University of Colorado Boulder and directed by Anthony Pinter. The project explores people's memories of their past relationships and the songs that surface those memories. Each song in the project's collection is someone's break-up song or the song that reminds them of their ex-lover or ex-relationship.
          </TextJustifyAlign>
          <br className="hidden-br" />
          <TextJustifyAlign>
            For some, the memory is good – a warm comforter of emotions brought on by the memory of a happy moment in the relationship. For others, the memory brings on sudden feelings of sadness – an unhappy reminder of when and why things fell apart, in turn, a reminder of when they were happier than they might be now.
          </TextJustifyAlign>
          <br className="hidden-br" />
          <TextJustifyAlign className="hidden">
            Exploring the collection through a myriad of physical and virtual jukeboxes, the viewer is treated to songs and memories that are sometimes discordant – the happiest of songs, delving up the saddest of memories. At its core, the project is about how we build relationships with other people, represent those relationships through digital possessions like music and song, and re-visit those memories, sometimes purposefully and sometimes by accident.
          </TextJustifyAlign>
        </Blank>
      </Divide>
      <PeopleBox>
        <TitlePeople>PEOPLE</TitlePeople>
        <PeopleFlexColumns>
          <PeopleFlexRows>
            <Person>
              <PeopleText>
                <strong>Anthony Pinter</strong> is the director of Certain Songs are Cursed and a researcher exploring human computer interaction, relationships, and music. He is also a doctoral student at the University of Colorado Boulder.
              </PeopleText>
              <PersonImage src="images/anthonyPhotoSquare.png" alt="Team photo" />
            </Person>
          </PeopleFlexRows>
        </PeopleFlexColumns>
      </PeopleBox>
    </GlobalStyles>
  );
};

export default About;
