import React, { useEffect } from 'react';
import './styles/LandingPage.css';

const Landing = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.album-cover');
    const imageContainer = document.querySelector('.image-container');
    /* const memories = ['Us driving together, and the tumultuous nature of the relationship (on again off again)',
    'Sad memories',
    'Being replaced',
    'The break up',
    'The person that fits the topic of the song the most, and our relationship we had',
    'Reminds me of crying in my friends car screaming this song',
    'crying in my car after a breakup LOL',
    'Beer soaked nights of singing along to this song in particular',
    'Being sad and expecting someone to change and they don’t',
    'Something I could of said',
    'His favorite song, dancing in my kitchen at midnight after cooking dinner',
    'go fuck yourself',
    'I kept asking what their favorite song was and they finally showed me this one.',
    'Reminds me of the feelings i felt at the time of heartbreak',
    'Face times and crying',
    'My ex girlfriend seriously loved Taylor Swift and I was made to listen to this song constantly. The main memory is that I got her a record of the album this song is on for her birthday and the first time she played it she made me sit and watch her do a full live performance of the song (and most of the other ones but this one was probably the most intensive)',
    'How happy we used to be when we first started dating',
    'Listening to the song when upset right after a breakup, as well as seeing the song performed live once feeling much better about myself.',
    'Being ghosted and isolated!! I had a period of very unfortunate mental health and I was unable to get any support from my best friend at the time.',
    'Not knowing how to be happy without them and feeling like nothing was enjoyable anymore',
    'It reminds me of my first serious relationship',
    'Her friends were always talking smack about me, and she broke it off cause apparently I didn\'t give her enough attention',
    'There isn\'t one particular memory I think of when this song comes up. I just mainly think of that person and all the memories we had created together.',
    'The multiple times he broke up with me and thought that I would never kiss him again',
    'When breaking started happening',
    'Feelings of melancholy and sadness as well as nostalgia',
    'What could have been',
    'It reminds me about the time I broke up with the dummy and hungout with him after n my friend was playing this song n it was pretty ironic n funny but sad.',
    'The sadness I felt after my breakup',
    'Just memories of good times especially when being in the phone late at night haha',
    'It was the first time I ever said “I love you” to someone and my first serious boyfriend. Also we broke up around the time I first found the song so it reminds me of my first true heartbreak.',
    'I think about how my ex showed me this song and put it on the first ever playlist they made for me. I remember how I felt the first time I listened to that playlist and that song. I also have a bad association with that particular band and my ex which makes me extra sad!',
    'Driving in the car on our way to various outdoor spots (camping, skiing, Rocky Mtn National Park)',
    'Me realizing the meaning of the song weeks after he had dumped me - it devastated me even further than I already felt',
    'Failure',
    'the situation of why  we broke up and how i felt leading up to the break up',
    'Memories of my old best friend who was also probably my first love. Makes me sad.',
    'The ending of the relationship when things stopped feeling right.',
    'The constant bullshit that I faced towards the end of the relationship.',
    'The messiness of my cheating, regrets and the possibilities that were foregone',
    'It brings back memories of me being there for my ex-partner during the tough times of their life.',
    'It reminds me of my first break up in high school, and feeling like I could only remember the good things about the relationship afterwards.',
    'Reminds me our times together and how things didn’t work out',
    'Listening to this song on repeat with my friend after we had (within a few months of each other) left borderline abusive relationships. The song had come out only shortly before and it resonated with both of us',
    'I really related to this song right after I broke up a long term relationship.',
    'Losing a love that I never wanted to end. I was moving to a different state, and I couldn’t do long distance.',
    'I actually haven\'t broken up before, but have felt two platonic and one romantic heartbreaks. So these songs remind me of the reason for the heartbreak, for Boys Will Be Boys, it’s due to me realizing my crush never liked me back, and the fact that it is best to move on.',
    'Listening to it with my ex in her apartment. Singing it together with me singing his part and her singing Taylor’s. She showed me this song one night when we were sitting on the couch together. I think I was a bit anxious cause it was a divergence from the plan. Now, truthfully, I wish I could loop that moment.',
    'slow dancing in my childhood home back yard with only the phone speaker being held up to our ears at 11pm at night. being asked, very publicly, to homecoming as the song played over the auditorium sound system.',
    'The drive home from where we were when she ended it',
    'This was our “song”- we saw them in concert together and we would listen to it a lot together. It reminds me of being super in love with my ex boyfriend.',
    'going back in time to change things',
    'Driving my ex home after parties, he\'d always play this song which was so soft and had such strong contrast with his outgoing crazy personality.',
    'it just reminds me of bad times mostly',
    'Spite',
    'going to vermont with my ex for a ski trip',
    'just reminds me of the guy the lyrics describe',
    'sitting in a a car in high school from the first time we dated, song came on and it lined up w a lot of things between us',
    'Singing in the car late at night',
    'It makes me feel free & empowered to do whatever I please.',
    'Reminds me of planning out a future with my last ex.',
    'It reminds me of a time of anxiety and worry.',
    'Just being super happy and thinking about this girl that I was talking to.',
    'It reminds me of the breakup in general. I listened to it a lot right after we broke up',
    'Driving up to go skiing during the holidays with my ex.',
    'This song remind of failed relationships, lost friendships, and brings up a lot of self reflection.',
    'He told me that he felt comfortable with me and that this song reminded me of him. Then when I went away to college he send me a picture of this song on his Apple car play in the car.',
    'It reminds me of how everytime I was with my ex I always thought of how perfect he was, and yet how I didn\'t really feel like how I thought I should.',
    'The memory of being apart from someone close to me',
    'The last months of the relationship where things were falling apart and he was growing distant as well as the desperation of trying to talk to him while he either ignores me or simply doesn\'t respond.',
    'This song reminds me of how he blew up on me and called me “a lot to handle” and “too much” after I was nothing but grateful for everything he did, it just didn’t work out, so I dumped him. Something he couldn’t handle.',
    'This song reminds me of the summer time with this guy I was in a relationship with, we were in Golden CO looking out to the continental divide listening to this song during golden hour, and he later told me that it was at a certain point during this song where he looked at me and knew he was falling for me',
    'Sitting in the car with my boyfriend and him singing this song when it first came out. He just looked really good and idk why I just have such a distinct memory of his face and his voice.',
    'I attached this song to my past relationship. It was one of my first relationships in high school where all I wanted was attention but didn’t know the difference between good or bad attention. Looking back at that relationship makes me feel gross and this song triggers the same emotions. The specific memory was, I was hanging out at a park with them and I told them that this song reminded me of our relationship (aka this song says I should be dependent on you so I will try to be dependent on you). And I remember the feeling of just wanting their approval of me.',
    'When I was 14, my first boyfriend assaulted me while this song was playing',
    'I think about the day we broke up rather than our relationship',
    'A toxic relationship',
    'First hardest breakup from highschool',
    'it makes me reflect on the relationship, memories and moments of how i was happy because i thought i was, even if later i reflect and i really wasnt.',
    'I remember listening to this song on my drive home after we broke up, it also reminds me of conversations we had that preceded the eventual breakup.',
    'My high school breakup',
    'my ex dedicating it to me after we broke up. It makes me think about the simple happy memories we did have.',
    'The memories of first moving on',
    'Living in my parents basement',
    '“our song” 🤪🤪🤪',
    'Stupid feelings',
    'People (exs and friends) leaving me for a newer shinier cooler option',
    'How I settled for less than I should have.',
    'My ex really liked this song, so it always reminds me of them. Mostly just reminds me of my dislike for them.',
    'My ex loved this song.',
    'What we used to do together for fun',
    'ex😢',
    'This song reminds me of my lifts/workouts after a break up the summer before I came to college.',
    'I remember my ex, all the good feelings we had, and it reminds me of how special that connection was and how much I miss it, but I try not to even listen to that artist at all anymore.',
    'This song reminds of a time when I was completely in love and devoted to a single person. It makes me remember the vulnerability and trust I had with this person. It reminds me of looking in her eyes in a parked car and dancing in my kitchen.',
    'Gross cause my first girlfriend was weird',
    'The last time I was in the car with my ex',
    'Freshly broke up',
    'It encompasses the thoughts of not wanting your ex, but realizing you\'re not really over them, and you don\'t want to see them with somebody else.',
    '',
    'My ex girlfriend showing me the song and telling me she changes the lyrics to “I’m in heaven with my girlfriend” and I still hear those lyrics',
    'My ex and everything about that',
    'The person',
    'emotional distance.',
    'Post breakup with an ex',
    'Listening to the song together while feeling happy and relaxed',
    'Breaking up with a girl while also losing my best friend on the same day, crying under my bed because my two closest people were gone in one day',
    'Learning on guitar with him',
    'When we talked about how good of a drummer the band had and how it was so meme but so good',
    'First date/ time out and many other times',
    'How much this person cared for me and would do for me before another person started getting that same attention',
    'Listened to it constantly after the breakup. It was my first breakup and relationship so i felt like I was dying. Every single lyric resonated',
    'Betrayal, Crying in bed',
    'It brings up memories of how the break up happened and how I felt during that time. I felt terrified, unstable, confused, anxious, panicked, and overall I was just in a really bad place as this break up was happening. The break up was messy. We were in a very unstable place, and we’d broken up once before. Then we talked and realized we had miscommunicated and misunderstood each other because of that. Then we tried again, but I was trying to rebuild while he was still deciding what he wanted as well as talking to another girl while telling me he had feelings for me. This song reminds me of how I was led on on top of the mental and emotional hardships I was going through, and the betrayal I felt by someone I’d been vulnerable to.',
    'Very deep depression and extreme loss',
    'Searching the east coast for waves and surfing all day then getting out of the water after seeing a gorgeous sunset to get warm under a blanket with her',
    'It brings up memories of my post-breakup and the difficult emotions I felt afterwards. Listening to this song while biking or driving and processing the emotions.',
    'feeling numb in my bed',
    'Memories of me needing more and they didn’t seem willing to give it',
    'After the fact of the breakup(s), as it has remained as my main song for moving on with my life. It isn\'t about missing the other person but acknowledges how awful it can be. The main memory I have is singing it in general as a singer to direct my exes.',
    'Breaking down at 2am sitting outside shortly after our breakup, but I like this song a lot and don\'t relate it as much now.',
    'Pretty much every time my ex would call me a liar or crazy. The biggest instance would be when I asked if he was seeing someone (he was) and he started calling me delusional and crazy and putting all the guilt on me.',
    'Dancing in the dark',
    'Freshman year gf just the time',
    'Feeling weak',
    'Driving to Steamboat with my ex',
    'Just missing my ex, and just like yearning for what was even if it turned bad',
    'Me reminiscing about the good times with her',
    'I would say the memories are very negative, a lot of fear',
    'Just being in a hopeless situation and knowing that you can do nothing to change it.',
    'Starting a fresh chapter',
    'Rejection and the fact you only have yourself',
    'My ex made a video of us together on our first trip to the mountians it was my favorite song. It was our song.',
    'A guy that kinda sucks but he showed me Lana Del Rey and she\'s sick.',
    'it\'s a nice song to cry to',
    'Listening to it in the car',
    'Happy ones that are now depressing',
    'memories with my ex who was literally emotionally manipulative',
    'helping me get over a break up',
    'Makes me think of person and both the good times and the bad',
    'The heartbreaking feeling of not knowing why you\'re not chosen',
    'thats just the first one but I just feel like sobbing when I hear these songs and the fact that I want to hide form him and never see him again because hes not who he used to be',
    'It just reminds me how I messed up and will probably never get over my ex until the day I die',
    'My ex was my best friend',
    'Break up',
    'crying in my room',
    'Car rides with my ex-boyfriend, overlooks, holding each other\'s hands and being together period, not having to say anything, just being in the presence of each other.',
    'makes me think about driving in my car after a long day',
    'All the girls be would typically date and how I would compare myself to them and stalk is following',
    'Just memories of the relationship with the girl I think was my first actual love',
    'Listening to it in his car',
    'Getting broken up with even though both partners are still in love and haven\'t given up on the relationship.',
    'My ex boyfriend I WANT TO GET BACK TOGETHER WITH HIM NOWWWWWW BUT HE DOESNT WANT TO',
    'i\'d rather not comment',
    'me ex stopped saying goodnight and started drifting away, and then he cheated',
    'This song makes me remember the times of me and my ex playing this song together with me on guitar and her on vocals',
    'We used to sing it for our exes cause we hated them and when we broke up I used to sing this song to him',
    'This song\'s lyrics remind me of an almost relationship that I had and how I still will always care about this person. It\'s a classic case of right person wrong time.',
    'My ex boyfriend would sing this to me in the car or play it when he knew I was sad. It helped me remember how much he loved me and how long he loved me for.',
    'I loved this song before the breakup and when it happened I changed the lyrics to match the story and it really just gave me something to laugh about.',
    'The weeks following being broken up by my first girlfriend',
    'It reminds me of when we first started dating and everything just felt perfect',
    'My ex showed me this song and we would always listen to it together. it used to make me really sad after we broke up but that was my most recent relationship like 2 years ago now i just have memories that don\'t necessarily make me happy or sad',
    'Buried memories of my long distance relationship with the love of my life. I love him dearly we broke up for given circumstances. But we\'re still talking again. We actually started talking again just about 3 months ago.',
    'The song that I vividly remember playing when the guy who I thought I saw myself dating dropped me off at the airport when I moved to Europe.',
    'My ex cheated on me and kept trying to come back and then would go back to the other girl when I wouldn\'t let him and it was a cycle',
    'This was the first song that made me happy after I was dumped']; */

    function getRandomImage() {
      const index = Math.floor(Math.random() * images.length);
      return images[index];
    }

    function isOffScreen(image) {
      const rect = image.getBoundingClientRect();
      return rect.left < 0 || rect.right > window.innerWidth;
    }

    function animateImage(image, container) {
      if (isOffScreen(image)) {
        image.classList.remove('enlarged');
      } else {
        image.classList.add('enlarged');
      }
      container.classList.add('transparent');
      setTimeout(() => {
        image.classList.remove('enlarged');
        container.classList.remove('transparent');

        setTimeout(() => {
          animateImage(getRandomImage(), imageContainer);
        }, 1000);
      }, 7000);
    }
    animateImage(getRandomImage(), imageContainer);
    /*
    function updateBannerText() {
      const randomIndex = Math.floor(Math.random() * memories.length);
      const randomString = memories[randomIndex];
      const bannerContent = document.querySelector('.banner-content');
      bannerContent.textContent = randomString;
      const textWidth = bannerContent.offsetWidth;
      const durationFactor = 0.5;
      const animationDuration = textWidth * durationFactor / 75;
      bannerContent.style.animationDuration = `${animationDuration}s`;
    }
    updateBannerText();
    setInterval(updateBannerText, 20000); //doubled this value to try and fix scrolling timing issue
    */
  }, []);

  return (
    <div className='body-container'>
      <div class="nav-bar-container">
      <div class="nav-bar">
          <div class="drop-down-flex">
          <p id="drop-down" class="not-shown">☰</p>
          <a class="nav-link" target="blank_" href="HOME LINK"><span class="favicon-bg"><img class="favicon" src="/images/faces/transparent.png" alt='favicon for csac'/></span></a>
          </div>
          <a class="nav-link on-page show-on-click" href="https://certainsongsarecursed.com">HOME</a>
          <a class="nav-link show-on-click" href="about.html">ABOUT</a>
          <a class="nav-link show-on-click" target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/1KInCehTTZ-uSC-_DHUe5xv85l8g6AJ5Noz1d7AtyI0Y/viewform?edit_requested=true">CONTRIBUTE</a>
          <a class="nav-link show-on-click" target="_blank" rel="noreferrer" href="https://certainsongsarecursed.com/jukebox">EXPLORE</a>
      </div>
</div> 

      <div className="image-container" id="imageContainer">
        <img class="album-cover" src="/images/0.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/1.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/2.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/3.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/4.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/5.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/6.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/7.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/8.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/9.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/10.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/11.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/12.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/13.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/14.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/15.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/16.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/17.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/18.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/19.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/20.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/21.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/22.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/23.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/24.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/25.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/26.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/27.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/28.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/29.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/30.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/31.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/32.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/33.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/34.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/35.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/36.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/37.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/38.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/39.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/40.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/41.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/42.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/43.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/44.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/45.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/46.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/47.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/48.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/49.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/50.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/51.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/52.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/53.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/54.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/55.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/56.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/57.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/58.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/59.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/60.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/61.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/62.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/63.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/64.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/65.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/66.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/67.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/68.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/69.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/70.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/71.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/72.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/73.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/74.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/75.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/76.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/77.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/78.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/79.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/80.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/81.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/82.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/83.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/84.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/85.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/86.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/87.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/88.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/89.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/90.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/91.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/92.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/93.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/94.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/95.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/96.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/97.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/98.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/99.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/146.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/101.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/102.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/103.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/104.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/105.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/106.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/107.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/108.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/109.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/110.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/111.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/112.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/113.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/114.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/115.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/116.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/117.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/118.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/119.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/120.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/121.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/122.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/123.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/124.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/125.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/126.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/127.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/128.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/129.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/130.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/131.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/132.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/133.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/134.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/135.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/136.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/137.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/138.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/139.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/140.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/141.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/142.jpg" alt="album cover test" />
        <img class="album-cover" src="/images/143.jpg" alt="album cover test" />
      </div>

    </div>
  );
};

/* 
placed in between the bottom 2 closing div tags
<div className="scrolling-banner">
  <div className="banner-content">Scrolling text</div>
</div>
*/

export default Landing;
