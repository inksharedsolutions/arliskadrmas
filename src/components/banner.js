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
                                <span className="first-title"></span>
                                <h1>
                                    <span>A</span>
                                    <span>,</span>
                                    <span>B</span>
                                    <span>,</span>
                                    <span>C</span>
                                    <span>'</span>
                                    <span>S</span>
                                </h1>
                                <p>of Hockey</p>
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