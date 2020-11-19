import React from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/Stormie.jpg'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-layout" id="banner-layout-responsive">
                    
    
                        <div className="right-col banner-img">

                            <div className="banner-text">
                                <span className="first-title">Stormie's</span>
                                <h1>
                                    <span>A</span>
                                    <span>D</span>
                                    <span>V</span>
                                    <span>E</span>
                                    <span>N</span>
                                    <span>T</span>
                                    <span>U</span>
                                    <span>R</span>
                                    <span>E</span>
                                    <span>S</span>
                                </h1>
                                <p>Stormie's new family</p>
                            </div>
                            {/* <img src={ImgBanner}/> */}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;