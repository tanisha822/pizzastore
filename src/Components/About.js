import {Component} from 'react';


class About extends Component{
    render(){
        return (
            <>
            <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to Our pizza-store  !</h1>
        <p className="lead">pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Items</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
        </div>
      </div>
    </div>
  </div>




  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">pizza 1</h5>
        <p className="card-text">One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce, mozzarella, and basil. Popular legend relates that it was named for Queen Margherita.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">pizza 2</h5>
        <p className="card-text">taly has many variations of pizza. The Neapolitan pizza, or Naples-style pizza, is made specifically with buffalo mozzarella (produced from the milk of Italian Mediterranean buffalo) .</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 4 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600" height={300} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">pizza 3</h5>
        <p className="card-text">The popularity of pizza in the United States began with the Italian community in New York City, where the Neapolitan pizza had an early influence. The first pizzeria appeared in New York City about the turn of the 20th century. </p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 5 mins ago</small>
      </div>
    </div>
  </div>
</div>
            </>
        )
    }
}


export default About;

