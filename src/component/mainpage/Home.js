import React, {Component} from 'react';
import './css/Home.css';
import img1 from '../../assets/train.jpg';
import img2 from '../../assets/tiger.jpg';
import img3 from '../../assets/sigiri.jpeg';
import img4 from '../../assets/poll.jpg';

class Home extends Component{
    loginClick(){
        
    }
    render(){
        return(
            <main className="inner cover lead" role="main">
                <div id="mycarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="8000">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-slider" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-slider" data-slide-to="1"></li>
                        <li data-target="#carousel-slider" data-slide-to="2"></li>
                        <li data-target="#carousel-slider" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner" roll="listbox">
                        <div className="carousel-item ">
                            <img className="slide animated pulse" src={img1} alt=""/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1 className="item animated pulse">Welcome you all to the GoTrip travel platform</h1>
                                    <p className="page">To Join with us</p>
                                    <small className="outline">Click here</small><br/>
                                    <button type="button" className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="slide animated pulse" src={img2} alt=""/>
                            <div className="carousel-caption">
                                <div className="container">
                                <h1 className="item animated pulse">Welcome you all to the GoTrip travel platform</h1>
                                <p className="page">To Join with us</p>
                                <small className="outline">Click here</small><br/>
                                <button type="button" className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="slide animated pulse" src={img3} alt=""/>
                            <div className="carousel-caption">
                                <h1 className="item animated pulse">Welcome you all to the GoTrip travel platform</h1>
                                <p className="page">To Join with us</p>
                                <small className="outline">Click here</small><br/>
                                <button type="button" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img className="slide animated pulse" src={img4} alt=""/>
                            <div className="carousel-caption">
                                <h1 className="item animated pulse">Welcome you all to the GoTrip travel platform</h1>
                                <p className="page">To Join with us</p>
                                <small className="outline">Click here</small><br/>
                                <button type="button" onClick={this.loginClick} className="btn btn-primary" >
                                        Login
                                </button>
                            </div>
                        </div>
                    </div>  
                </div>

                <p>
                    Welcome to the beautiful emerald isle known as Sri Lanka !!! Let us greet you with a salutation of “Ayubowan” which means “May you live long and healthy” and offer you an exciting array of tours to enjoy and turn your vacation into a memorable.!
                </p>
                <p>
                    Ceylon Island Travel was establishing in 2008 by two professional hands that over 10 years experience in the Sri Lanka, Maldives tourism & hotel industry. We mainly organize Sri Lankan tour packages for clients to meet their each and every requirement to make their stay is a memorable one with us. You can select your destination with accommodation and transport. Ceylon Island Travel has its own unique and adventurous tour packages that you can choose from. Also we organize special holiday packages to celebrate your special occasions with dear ones.
                </p>
                <p>
                    Sri Lanka is one of the most sorts for tourist destinations in the world. It is advantageously situated between West Asia and South East Asia has been a significant stop on the silk route. To express the richness, beauty and the intensity of affection: the visitors addressed the country as Serendib, Ceylon, Teardrop of India, Resplendent Isle, Island of Dharma, and Pearl of the Orient.(Lanka Facts, 2012).
                </p>
                <p>
                    Today, visitors are welcomed to Sri Lanka to experience the nation’s glittering tapestry of culture, and the rich abundance of nature, so handsomely bestowed, and to give credence to the old adage that good things come in small packages. Its landscape orientation especially the Warm Sun kissed Beaches creates mix of opportunities which lead to the final holiday destination. The diversity of temperatures, vegetation and scenery grab a large sense towards Srilanka. It is a most demanding country for lovers of nature and wild life because tourism offers safaris, Treks, Nature walks and Camping that could be a marvelous experience for them. The entire island is swarming with birds and animals. And the animals like elephants and leopards are not scarce. Though foods are not much expensive: they are tasty and the people of the country are very friendly and helpful.This colourful collection act as an indicator of its richness.
                </p>
                <p>
                    All requirements are equipped in the country and it is to be one of the best tourist destinations with absolute peace, political stability and the climatic changes can be seen through beautiful waterfalls, rivers, sceneries, tea estates and many other attractive places. Sri Lanka is owned for a rich heritage and it has a recorded history of more than 2500 years and archaeological sites over 250,000.There are 8 world heritage sites within the country that was approved by the UNESCO and they are the hill capital kandy, the sacred city of Anuradapura, The Dutch fort of Galle, The ancient city of Polonnaruwa, The rock fortress of Sigiriya, The golden rock temple of Dambulla, the beautiful Horton plains and the Singharaja rain forest (Sri Lanka Tourism Development Authority, 2011). So, without a doubt a land like Sri lanka cannot be found because it has something to offer for everyone.
                    The increase of tourism occurred in 2011 and is expected to climb further in the coming years. Colombo the capital city, the Cultural Triangle (Dambulla, Polonnaruwa and Anuradhapura), the cities like Kandy and Galle, and most of the southern beach towns which are equipped with good tourist facilities, the roads connecting many of those destinations are improving. The pro of Sri Lanka as a tourism destination is threefold. Firstly, it is a real tourism destination. Secondly, a tourist can travel the whole compact island within few days because it consists only 65,610 square km.Thirdly, it has unparalleled diversity of tourism product. For the ease of communicating the diversity of Sri Lanka in 2010, 8 different products namely; heritage, beaches, wildlife, mind and body wellness, scenic beauty festivals, Essence and sports and adventure are started to position around the country by the tourism authorities. (Sri Lanka Tourism Development Authority, 2011). Art and culture, spices, tea, gems, handy crafts and its people are the unique features of Srilanka which are also known as the essence of the country. From the ancient time the travellers and the traders have attracted to Sri Lanka and it is a languorous tropical island of deep spirituality and serenity. Sri Lanka grabbed the Western imagination as the Tahiti of the East.
                </p>
            </main>
        )
    }
}
export default Home;