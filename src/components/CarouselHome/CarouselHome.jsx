import Carousel from 'react-bootstrap/Carousel';

function CarouselHome({ props }) {
  return (<>
    <div className='mt-2'>
      {/*console.log("inside carousel", props)*/}
      <Carousel data-bs-theme="dark" style={{height: "500px" , margin: "0 auto" }}>
        {props.map((el, index) => {
          return (
            <Carousel.Item key={index} style={{height: "450px"}}>
              <img
                className="d-block w-100"
                src={el.src}
                alt={el.alt} style={{ textAlign: 'center' }}
              />
              <Carousel.Caption>
                <h5>{el.h5}</h5>
                <p>{el.p}</p>
              </Carousel.Caption>
            </Carousel.Item>)
        })}
      </Carousel>

    </div>

  </>

  );
}

export default CarouselHome;