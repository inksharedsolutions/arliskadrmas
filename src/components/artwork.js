import React from 'react'

/* Artwork Images */
import Img1 from '../../static/illustration/7.jpg'
import Img2 from '../../static/illustration/8.jpg'
import Img3 from '../../static/illustration/9.jpg'
import Img4 from '../../static/illustration/10.jpg'
import Img5 from '../../static/illustration/11.jpg'
import Img6 from '../../static/illustration/12.jpg'


const Artwork = () =>{
    
    

    return (
        <>
            <section className="artworks-section">
                <h1>Illustrations</h1>
                <div className="art-row">
                
                    <div className="art-columns">
                        <img 
                        alt={`artwork-img`} 
                        src={Img1} />
                    </div>

                    <div className="art-columns">
                        <div className="two-columns">
                            <img 
                            alt={`artwork-img`} 
                            src={Img2} />
                            <img 
                            alt={`artwork-img`} 
                            src={Img4} />
                        </div>                
                        <img 
                        alt={`artwork-img`} 
                        src={Img3} />
                    </div>

                    <div className="art-columns">
                        <img 
                        alt={`artwork-img`} 
                        src={Img6} />
                        <img 
                        alt={`artwork-img`} 
                        src={Img5} />
                    </div>
                </div>
            </section>        
        </>
    )
}

export default Artwork