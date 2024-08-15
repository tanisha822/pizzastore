function Home(){
  return(
      <>
 <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/1560104/pexels-photo-1560104.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} className="d-block w-100" alt="..."/>

      
      <div className="carousel-caption d-none d-md-block">
        <h5>....Welcome to our pizza store....</h5>
        <p>please visit our items</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>....please order your favourite items....</h5>
        <p>Some items are non deliverable please cheak</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600" height={500} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>....thanks for being our customer....</h5>
        <p>thanks for order the pizza</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




<span class="badge rounded-pill text-bg-primary">VEG</span>
<span class="badge rounded-pill text-bg-secondary">NONVEG</span>
<span class="badge rounded-pill text-bg-success">PIZZA</span>
<span class="badge rounded-pill text-bg-danger">BURGER</span>
<span class="badge rounded-pill text-bg-warning">CHIKENMASALA</span>
<span class="badge rounded-pill text-bg-info">ORDERABLE</span>
<span class="badge rounded-pill text-bg-light">SPICY</span>
<span class="badge rounded-pill text-bg-dark">NONSPICY</span>
<span class="badge rounded-pill text-bg-warning">ALL ITEMS ARE AVAILABLE HERE</span>
      
      

      
      
      
      
      </>
  )
}
export default Home;