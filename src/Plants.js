import React from 'react';
import './styles/Plants.css'
import BNF from './pictures/plants/birdsnestfern.JPG'
import BOP from './pictures/plants/birdofparadise.JPG'
import BF from './pictures/plants/buttonfern.JPG'
import crassula from './pictures/plants/crassulaovata.JPG'
import dracaena from './pictures/plants/dracaena.JPG'
import GP from './pictures/plants/goldenpothos.JPG'
import MHF from './pictures/plants/maidenhairfern.JPG'
import NP from './pictures/plants/neonpothos.JPG'
import pep from './pictures/plants/peperomia.JPG'
import TA from './pictures/plants/T.aeranthosmajor.JPG'
import TB from './pictures/plants/T.bulbosa.JPG'
import TC from './pictures/plants/T.caputmedusae.JPG'
import TF from './pictures/plants/T.funckiana.JPG'
import TM from './pictures/plants/T.magnusiana.JPG'
import TS from './pictures/plants/T.stricta.JPG'
import TV from './pictures/plants/T.velutina.JPG'



const Plants = () => {
    return (
        <div className='plants'>
            <div className='plants__big__container'>
                <h3 className='plants__h'>Aren't they darling?</h3>
                <div className='plants__container'>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Bird's Nest Fern</h4>
                        <img className='plant__img' src={BNF} alt='birds nest fern' ></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Tillandsia aeranthos major</h4>
                        <img className='plant__img' src={TA} alt='tillandsia aeranthos major'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Tillandsia bulbosa </h4>
                        <img className='plant__img' src={TB} alt='tillandsia bulbosa'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Tillandsia caput medusae</h4>
                        <img className='plant__img' src={TC} alt='Tillandsia caput medusae'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Tillandsia funckiana </h4>
                        <img className='plant__img' src={TF} alt='tillandsia funckiana'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Tillandsia magnusiana</h4>
                        <img className='plant__img' src={TM} alt='tillandsia magnusiana'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Tillandsia stricta </h4>
                        <img className='plant__img' src={TS} alt='Tillandsia stricta'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Tillandsia velutina </h4>
                        <img className='plant__img' src={TV} alt='tillandsia velutina'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Bird of Paradise</h4>
                        <img className='plant__img' src={BOP} alt='bird of paradise'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Button Fern</h4>
                        <img className='plant__img' src={BF} alt='button fern'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Crassula Ovata</h4>
                        <img className='plant__img' src={crassula} alt='crassula ovata'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Dracaena Madagascar</h4>
                        <img className='plant__img' src={dracaena} alt='dracaena madacascar'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Golden Pothos</h4>
                        <img className='plant__img' src={GP} alt='golden pothos'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Maiden Hair Fern</h4>
                        <img className='plant__img' src={MHF} alt='maiden hair fern'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Neon Pothos</h4>
                        <img className='plant__img' src={NP} alt='neon pothos'></img>
                    </div>

                    <div className='plant__card'>
                        <h4 className='plant__name'>Peperomia</h4>
                        <img className='plant__img' src={pep} alt='peperomia'></img>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Plants;
