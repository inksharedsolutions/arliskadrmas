import React from 'react'
import FrontBook from '../../static/books/main_book.png'
import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        

                        <div className="content-wraps">

                            <span className="italic-tag">Read, listen, and learn in various formats</span>

                            <h1>A, B, C's</h1>
                            <span>of Hockey</span>
                            <p>
                            It was exciting for us to develop this book by creating words and illustrations to go along with the letters, using hockey as a backdrop. In the making of this book, we have learned that you can accomplish anything that you put your mind to.
                            </p>

                            <Accordions/>
                        </div>

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook