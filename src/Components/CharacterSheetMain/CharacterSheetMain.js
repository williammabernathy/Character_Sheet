import React from 'react';
import StatBlock from './Components/StatBlock/StatBlock';
import './CharacterSheetMain.css'

const CharacterSheetMain = () => {

    const statAttrNames = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma" ]
    
    return (
        <div className="CSMainWrapper">

            <div className="statBlockWrapper">
                {statAttrNames.map((stat, index) => (
                    <StatBlock 
                        key={index} 
                        statName={stat} 
                    />
                ))}
            </div>
            
        </div>
    );
};

export default CharacterSheetMain;