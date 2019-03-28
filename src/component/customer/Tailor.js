import React, { Component } from 'react';
import img5 from '../../assets/img5.jpg';

class Tailor extends Component {
    render(){
        return(
            <main className="inner cover lead" role="main">
               <img src={img5} />
               <br></br>
              <div class="container">
              <div class="span12">
              <br></br>
              
              <h1>                         Plan Your Own Trip</h1>
              </div>
              </div>
              <br></br>
              <div class="container">
              <div class="span12">

              <p> Whether you want to modify a tour package on our website or have an itinerary built from scratch, the local travel consultants at Ceylon Island Travel can create your ideal trip. In addition to the benefits of all our tours - booking handpicked hotels, transportation, excursions and more - customized tours offer a personalized experience. You decide where to visit, how long to spend and what type of accommodation suits you best. Let us know what we can do for you by completing the form below. Please provide as many details as possible, even estimates are helpful.</p>
              </div>
              </div>
              <br></br>
              <div class="container">
              <form>
              <div class="form-group">
              <label for="inputName">Full Name</label>
              <input type="text" class="form-control" id="inputName" placeholder=""></input>
              </div>

              <div class="form-group">
              <label for="InputEmail">Email Address</label>
              <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Please Enter Valid email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              <div class="form-group">
              <label for="inputNum">Phone Number</label>
              <input type="text" class="form-control" id="inputNum" placeholder=""></input>
              </div>

              <div class="form-group">
              <label for="inputarival">Arrival Date</label>
              <input type="text" class="form-control" id="inputarival" placeholder="dd/mm/yyyy"></input>
              </div>

              <div class="form-group">
              <label for="inputPickup">Pickup Place</label>
              <input type="text" class="form-control" id="inputPickup" placeholder=""></input>
              </div>

              <div class="form-group">
              <label for="place">Interesting Place To Visit</label>
              <select class="form-control" id="place">
              <option>Anuradhapura</option>
              <option>Galle</option>
              <option>Jappna</option>
              <option>Nuwaraeliya</option>
              <option>Hambantota</option>
              </select>
              </div>

              <div class="form-group">
              <label for="duration">Tour Duration (Days)</label>
              <select class="form-control" id="duration">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              </select>
              </div>

              <div class="form-group">
              <label for="people">No of People</label>
              <select class="form-control" id="people">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              </select>
              </div>

              <div class="form-group">
              <label for="room">Preferred  Accommodation</label>
              <select class="form-control" id="room">
              <option>AC</option>
              <option>Non AC</option>
              </select>
              </div>

              <div class="form-group">
              <label for="additional">Any Additional Information</label>
              <textarea class="form-control" id="additional" rows="3"></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary">Send</button>

              </form>
              <br></br>
              </div>
             
                
            </main>
        )
    }
}
export default Tailor;