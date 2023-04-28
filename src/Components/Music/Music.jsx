import react, {useEffect, useState} from "react";
import '../Music/Music.css'
import xlogo from '../../assets/x-logo-png.png'
import sadek from '../../assets/Music-sadek.png'
import sch from '../../assets/Music-sch.png'
import sofiane from '../../assets/Music-sofiane.png'
import niro from '../../assets/Music-niro.png'
import music from '../../assets/sadek.mp3'
import music2 from '../../assets/sch.mp3'
import music3 from '../../assets/sofiane.mp3'
import music4 from '../../assets/niro.mp3'

function Music (){
    
    // code pour la premiere carte de musique 

    const [selectedMusic, setSelectedMusic] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playMusic = (music) => {
        setSelectedMusic(music);
        setIsPlaying(true);
    };

    const stopMusic = () => {
        setSelectedMusic(null);
        setIsPlaying(false);
    };

    useEffect(() => {
        const audio = new Audio(selectedMusic);
        if (isPlaying) {
        audio.play();
        } else {
        audio.pause();
        }
        return () => {
        audio.pause();
        };
    }, [selectedMusic, isPlaying]);


    // code pour la deuxieme carte de musique 

    const [selectedMusic2, setSelectedMusic2] = useState(null);
    const [isPlaying2, setIsPlaying2] = useState(false);

    const playMusic2 = (music2) => {
        setSelectedMusic2(music2);
        setIsPlaying2(true);
    };

    const stopMusic2 = () => {
        setSelectedMusic2(null);
        setIsPlaying2(false);
    };

    useEffect(() => {
        const audio = new Audio(selectedMusic2);
        if (isPlaying2) {
        audio.play();
        } else {
        audio.pause();
        }
        return () => {
        audio.pause();
        };
    }, [selectedMusic2, isPlaying2]);


    // code pour la troisiéme carte de musique 

    const [selectedMusic3, setSelectedMusic3] = useState(null);
    const [isPlaying3, setIsPlaying3] = useState(false);

    const playMusic3 = (music3) => {
        setSelectedMusic3(music3);
        setIsPlaying3(true);
    };

    const stopMusic3 = () => {
        setSelectedMusic3(null);
        setIsPlaying3(false);
    };

    useEffect(() => {
        const audio = new Audio(selectedMusic3);
        if (isPlaying3) {
        audio.play();
        } else {
        audio.pause();
        }
        return () => {
        audio.pause();
        };
    }, [selectedMusic3, isPlaying3]);


    // code pour la quatriéme carte de musique 

    const [selectedMusic4, setSelectedMusic4] = useState(null);
    const [isPlaying4, setIsPlaying4] = useState(false);

    const playMusic4 = (music4) => {
        setSelectedMusic4(music4);
        setIsPlaying4(true);
    };

    const stopMusic4 = () => {
        setSelectedMusic4(null);
        setIsPlaying4(false);
    };

    useEffect(() => {
        const audio = new Audio(selectedMusic4);
        if (isPlaying4) {
        audio.play();
        } else {
        audio.pause();
        }
        return () => {
        audio.pause();
        };
    }, [selectedMusic4, isPlaying4]);

    return (
        <div className="Music-container">

            <div className="Music-titles">
                <h1 className="h1-Music-title">
                <span>Colors</span><br /> 
                are coming to restream
                </h1>

                <div className="x-Music-title">
                    <h1 className="x-Music-title-x-1">Restream</h1>
                    <img className="x-logo-img" src={xlogo} alt="" />
                    <h1 className="x-Music-title-x-2">Colors</h1>
                </div>
            </div>

            <div className="wrapper">
                    <div className="card-wrapper sadek">
                        <img src={sadek} alt="" />
                        <div className="info-wrapper sadek">
                            <h1>Changement de proprietaire</h1>
                            <span>" Faut qu't'ailles seul au fond des égouts tuer le BasilicPlanter l'épée au fond d'son crâne "</span>
                            <a className="button-wrapper" onClick={() => {
                                if (selectedMusic && isPlaying) {
                                    stopMusic();
                                } else {
                                    playMusic(music);
                                    stopMusic3();
                                    stopMusic2();
                                    stopMusic4();
                                }
                                }}>
                            {selectedMusic && isPlaying ? "Stop" : "Play"}
                            </a>
                        </div>
                    </div>

                    <div className="card-wrapper sch">
                        <img src={sch} alt="" />
                        <div className="info-wrapper">
                            <h1>Loup Noir</h1>
                            <span>" La petite maison est en ruine, quand la faim pense le cœur est en grève "</span>
                            <a className="button-wrapper" onClick={() => {
                                if (selectedMusic2 && isPlaying2) {
                                    stopMusic2();
                                } else {
                                    playMusic2(music2);
                                    stopMusic3();
                                    stopMusic4();
                                    stopMusic();
                                }
                                }}>
                            {selectedMusic2 && isPlaying2 ? "Stop" : "Play"}
                            </a>
                        </div>
                    </div>

                    <div className="card-wrapper sofiane">
                        <img src={sofiane} alt="" />
                        <div className="info-wrapper">
                            <h1>Windsor</h1>
                            <span>" J’suis pas plus fort, j’suis juste plus intelligent qu’toi et j’aurai c’que j’veux d’toi "</span>
                            <a className="button-wrapper" onClick={() => {
                                if (selectedMusic3 && isPlaying3) {
                                    stopMusic3();
                                } else {
                                    playMusic3(music3);
                                    stopMusic4();
                                    stopMusic2();
                                    stopMusic();
                                }
                                }}>
                            {selectedMusic3 && isPlaying3 ? "Stop" : "Play"}
                            </a>
                        </div>
                    </div>

                    <div className="card-wrapper niro">
                        <img src={niro} alt="" />
                        <div className="info-wrapper">
                            <h1>Papa fait le pitre</h1>
                            <span>" T'es pas le lion le plus fier de la troupe, t'es pas l'stylo le plus cher de la trousse "</span>
                            <a className="button-wrapper" onClick={() => {
                                if (selectedMusic4 && isPlaying4) {
                                    stopMusic4();
                                } else {
                                    playMusic4(music4);
                                    stopMusic3();
                                    stopMusic2();
                                    stopMusic();
                                }
                                }}>
                            {selectedMusic4 && isPlaying4 ? "Stop" : "Play"}
                            </a>

                        </div>
                    </div>
            </div>


        
        </div>

    )
}

export default Music;