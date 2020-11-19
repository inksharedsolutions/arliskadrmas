import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/book1.png'
import SecondBook from '../../static/books/book2.png'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'arlis-kadrmas',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Stormie's Adventures`,
                                    spanFirst: `Stormie's New Family`,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>
                                        This is a story about Stormie’s secrets that she hasn’t revealed to anyone and that leads to a mystery that changes her life forever. Her secrets get revealed one at a time. Also, in this story, it also teaches life’s lessons.
                                    </p> 
                                    `,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/a-b-cs-of-hockey/',
                                        barnes: 'https://www.barnesandnoble.com/w/a-b-cs-of-hockey-arlis-kadrmas/1123034147?ean=9781643459851',
                                        amazon :'https://www.amazon.com/B-Cs-Hockey-Arlis-Kadrmas-ebook/dp/B0872HZBQJ/ref=sr_1_1?dchild=1&keywords=9781643459851&qid=1588017305&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/B-Cs-Hockey-Arlis-Kadrmas/dp/1643457276/ref=sr_1_1?dchild=1&keywords=9781643457277&qid=1588017323&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/a-b-cs-of-hockey-arlis-kadrmas/1123034147?ean=9781643457277',
                                        booksamillion:'https://www.booksamillion.com/p/B-Cs-Hockey/Arlis-Kadrmas/9781643457277?id=8049069540563&_ga=2.151035065.1857148248.1605750607-2145380449.1604906972',
                                    }
                                }} 
                            />
                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;