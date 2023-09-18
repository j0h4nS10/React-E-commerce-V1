import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Profile_pictures from '../../assets/profile_picture.jpg'


function OutTeamMain() {

    const ourTeam = [{
        name: "juan pablo",
        profetion: "constructor",
        experience: "soy constructor con experiencia de mas de 20 años en el sector de la construccion",
        img: Profile_pictures
    }, {
        name: "juan pablo",
        profetion: "constructor",
        experience: "soy constructor con experiencia de mas de 20 años en el sector de la construccion",
        img: Profile_pictures
    }, {
        name: "juan pablo",
        profetion: "constructor",
        experience: "soy constructor con experiencia de mas de 20 años en el sector de la construccion",
        img: Profile_pictures
    }]


    return (<><div className="container" style={{ width: "80%", margin: "0 auto" }}>
        <hr />
        <h1>Our Tean</h1>
        <hr />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3" style={{ margin: 2 }}>
            
            {ourTeam.map((el, index) => {
                return (<div className='col'><Card key={index} className="text-center" style={{ margin: 5 }}>
                    <Card.Body>
                        <div>
                            <Card.Img variant="top" src={el.img} />
                        </div>
                        <Card.Title style={{ margin: 5, padding: 10 }}>{el.name}</Card.Title>
                        <Card.Text>{el.profetion}</Card.Text>
                        <Card.Text>{el.experience}</Card.Text>
                        <Button variant="primary">Show more</Button><br />
                    </Card.Body>
                </Card>
                </div>
                )
            })}
        </div>
    </div></>)
}

export default OutTeamMain