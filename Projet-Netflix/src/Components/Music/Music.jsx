import react from "react";
import '../Music/Music.css'
import xlogo from '../../assets/x-logo-png.png'
import sadek from '../../assets/Music-sadek.png'
import sch from '../../assets/Music-sch.png'
import sofiane from '../../assets/Music-sofiane.png'
import niro from '../../assets/Music-niro.png'

function Music (){
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
                            <a className="button-wrapper" href="">Play</a>
                        </div>
                    </div>

                    <div className="card-wrapper sch">
                        <img src={sch} alt="" />
                        <div className="info-wrapper">
                            <h1>Loup Noir</h1>
                            <span>" La petite maison est en ruine, quand la faim pense le cœur est en grève "</span>
                            <a className="button-wrapper" href="">Play</a>
                        </div>
                    </div>

                    <div className="card-wrapper sofiane">
                        <img src={sofiane} alt="" />
                        <div className="info-wrapper">
                            <h1>Windsor</h1>
                            <span>" J’suis pas plus fort, j’suis juste plus intelligent qu’toi et j’aurai c’que j’veux d’toi "</span>
                            <a className="button-wrapper" href="">Play</a>
                        </div>
                    </div>

                    <div className="card-wrapper niro">
                        <img src={niro} alt="" />
                        <div className="info-wrapper">
                            <h1>Changement de proprietaire</h1>
                            <span>T'es pas le lion le plus fier de la troupe (Humble), t'es pas l'stylo le plus cher de la trousse</span>
                            <a className="button-wrapper" href="">Play</a>
                        </div>
                    </div>
            </div>


        
        </div>
    )
}

export default Music;