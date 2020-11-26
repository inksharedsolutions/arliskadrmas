import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
                 
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`} 
                 contextHeading={`Author`}/>
                  
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    <p>It was exciting for us to develop this book by creating words and illustrations to go along with the letters, using hockey as a backdrop.</p>
                                </h4>
                                
                                <span className="ata-span-fx">
                                    {/* author quote */}
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            A Chemical Engineering graduate living in Wichita, KS, but born and raised in
                            southwestern North Dakota. He learned to love hockey while in college and
                            has a great passion for the game aŌer watching the FighƟng Sioux. In reading
                            to his son Isaiah, he saw there was an opportunity for the A, B, C’s of Hockey.
                            He partnered with his lovely and talented wife to create this book, which was a
                            blessing and a lot of fun. 
                            </p>
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    <span className="ata-name">Arlis Kadrmas</span>
                                </span>
                            </p>
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;