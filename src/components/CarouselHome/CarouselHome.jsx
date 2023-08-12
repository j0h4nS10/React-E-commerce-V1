import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgs.search.brave.com/6SLGFTv4SNxjp44N2gWpvtSEjSFNvWJovBC38iTMpcE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8wMS8yMi8wMi9t/b3VudGFpbi1sYW5k/c2NhcGUtMjAzMTUz/OV82NDAuanBn"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgs.search.brave.com/6SLGFTv4SNxjp44N2gWpvtSEjSFNvWJovBC38iTMpcE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8wMS8yMi8wMi9t/b3VudGFpbi1sYW5k/c2NhcGUtMjAzMTUz/OV82NDAuanBn"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgs.search.brave.com/6SLGFTv4SNxjp44N2gWpvtSEjSFNvWJovBC38iTMpcE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8wMS8yMi8wMi9t/b3VudGFpbi1sYW5k/c2NhcGUtMjAzMTUz/OV82NDAuanBn"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;