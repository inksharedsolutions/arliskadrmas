import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/dummy.png'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
        
                <div className="grid-two-columns" id="author-container">
                    <div className="wrapper-auth-content auth-img-container">
                        <img src={AuthorImg} />
                    </div>

                    <div className="wrapper-auth-content" id="auth-content-wrapper">    
                        <p className="italic-tag margin-off"></p>
                        <h1>    
                            The Author
                        </h1>

                        <p className="author-content">
                        A Chemical Engineering graduate living in Wichita, KS, but born and raised in
                        southwestern North Dakota. He learned to love hockey while in college and
                        has a great passion for the game aŌer watching the FighƟng Sioux.
                            
                            <Link to="/about-the-author"
                             className="link-read">
                                read more
                            </Link>
                        </p>
                        
                        <p className="margin-off auth-name">
                            Arlis Kadrmas
                        </p>

                        <span className="span-tagline italic-tag">
                            Author & Writer
                        </span>
                        
                    </div>
                </div>
          
            </section>
        </>
    )
}

export default LowerMain 