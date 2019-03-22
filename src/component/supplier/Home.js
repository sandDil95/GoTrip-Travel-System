import React, {Component} from 'react';
import './css/Home.css';
import img1 from '../../assets/train.jpg';
import img2 from '../../assets/tiger.jpg';
import img3 from '../../assets/sigiri.jpeg';
import img4 from '../../assets/poll.jpg';

class Home extends Component{
    render(){
        return(
            <main className="inner cover lead" role="main">
                <div id="mycarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="8000">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-slider" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-slider" data-slide-to="1"></li>
                        <li data-target="#carousel-slider" data-slide-to="2"></li>
                        <li data-target="#carousel-slider" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner" roll="listbox">
                        <div className="carousel-item ">
                            <img className="slide animated pulse" src={img1} alt=""/>
                            <div className="container">
                                <div className="carousel-caption">
                                  <h1 className="item animated pulse">Welcome Supplier to help</h1>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="slide animated pulse" src={img2} alt=""/>
                            <div className="carousel-caption">
                                <div className="container">
                                    <h1 className="item animated pulse">Welcome Supplier to help</h1>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="slide animated pulse" src={img3} alt=""/>
                            <div className="carousel-caption">
                                <h1 className="item animated pulse">Welcome Supplier to help</h1>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img className="slide animated pulse" src={img4} alt=""/>
                            <div className="carousel-caption">
                                <h1 className="item animated pulse">Welcome Supplier to help</h1>
                            </div>
                        </div>
                    </div>  
                </div>

                <p>
                    Welcome to the beautiful emerald isle known as Sri Lanka !!! Let us greet you with a salutation of “Ayubowan” which means “May you live long and healthy” and offer you an exciting array of tours to enjoy and turn your vacation into a memorable.!
                </p>
            </main>
        )
    }
}
export default Home;