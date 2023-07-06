import React from 'react'

export const Hero = ({heroName}) => {
    if(heroName==='Joker'){
         throw new Error('Not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
