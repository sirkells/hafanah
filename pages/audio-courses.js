import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Library from '../components/AudioPlayer/Library';
import Player from '../components/AudioPlayer/Player';
import RegisterForm from '../components/ProfileAuthentication/RegisterForm';
import Footer from '../components/_App/Footer';

import { useState } from "react";

const AudioCourses = () => {
    const [songs, setsongs] = useState([
        {
           title: "song 1",
           artist: "artist 1",
           img_src: "./images/img1.jpg",
           src: "./audios/Måneskin - Beggin ( Testo)_2.mp3",
        },
        {
           title: "song 2",
           artist: "artist 2",
           img_src: "./images/img2.jpg",
           src: "./audios/Young Dumb & Broke Khalid .mp3",
        },
      ]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Courses" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Courses" 
            />  

            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-12">
                            <Player
                                song={songs[currentSongIndex]}
                                nextSong={songs[nextSongIndex]}
                            />
                        </div>
                        {/* <div className="col-lg-6 col-md-12">
                            <Library />
                        </div> */}
                        {/* <div className="col-lg-6 col-md-12">
                            <RegisterForm />
                        </div> */}
                    </div>
                </div>
            </div>
        
            <Footer />
        </React.Fragment>
    )
}

export default AudioCourses;