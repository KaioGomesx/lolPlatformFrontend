import React from "react";

import { ProfileMain, ProfilePicture, ProfilePui, ProfileMpinf, ProfileCtr } from "./styles";

export default function ProfileCard(){
    return(
        <ProfileMain>
            <ProfilePicture>
                <img src="https://66.media.tumblr.com/33642333894cbd3b9d211cfeb8229d17/tumblr_prpqtkMaqJ1vo6vclo1_250.jpg" alt="profile"/>
            </ProfilePicture>
            <ProfilePui>
                <div className="NameU">Usuário</div>
                <div className="GameU"><strong>League Of Legends</strong></div>
                <div className="RankU"><span>Elo/Rank</span></div>
            </ProfilePui>
            <ProfileMpinf>
                <div className="infoU">
                    <div className="info0">56%</div>
                    <div className="info1">Taxa de Vitória</div>
                </div>
                <div className="infoU">
                    <div className="info0">4.2</div>
                    <div className="info1">Taxa de CS</div>
                </div>
                <div className="infoU">
                    <div className="info0">Top/Mid</div>
                    <div className="info1">Lane</div>
                </div>
            </ProfileMpinf>
            <ProfileCtr>
                <button>Sair</button>
            </ProfileCtr>
        </ProfileMain>
    );
}