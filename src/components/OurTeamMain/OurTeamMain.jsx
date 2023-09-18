import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OutTeamMain() {

    const ourTeam = [{
        name: "juan pablo",
        profetion: "constructor",
        experience: "soy constructor con experiencia de mas de 20 años en el sector de la construccion",
        img: "https://imgs.search.brave.com/WPLJR6VWvjI-McVml-2deHQ_O_63gc1ujo9CJ0IUmz0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMw/NTg1NjUxL2VzL2Zv/dG8vcGFzYXBvcnRl/LWltYWdlbi1kZS11/bi1pdGFsaWFuby1t/dWplci1ydWJpYS1j/b24tcGVsby1sYXJn/by5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9eDlCN0xSLTFO/QTZoUEZrVWo0SXlJ/Z0lmTnVRMl9OeERI/NndlYzkwdF82WT0"
    }, {
        name: "juan pablo",
        profetion: "constructor",
        experience: "soy constructor con experiencia de mas de 20 años en el sector de la construccion",
        img: "https://imgs.search.brave.com/WPLJR6VWvjI-McVml-2deHQ_O_63gc1ujo9CJ0IUmz0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMw/NTg1NjUxL2VzL2Zv/dG8vcGFzYXBvcnRl/LWltYWdlbi1kZS11/bi1pdGFsaWFuby1t/dWplci1ydWJpYS1j/b24tcGVsby1sYXJn/by5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9eDlCN0xSLTFO/QTZoUEZrVWo0SXlJ/Z0lmTnVRMl9OeERI/NndlYzkwdF82WT0"
    }, {
        name: "juan pablo",
        profetion: "constructor",
        experience: "soy constructor con experiencia de mas de 20 años en el sector de la construccion",
        img: "https://imgs.search.brave.com/WPLJR6VWvjI-McVml-2deHQ_O_63gc1ujo9CJ0IUmz0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMw/NTg1NjUxL2VzL2Zv/dG8vcGFzYXBvcnRl/LWltYWdlbi1kZS11/bi1pdGFsaWFuby1t/dWplci1ydWJpYS1j/b24tcGVsby1sYXJn/by5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9eDlCN0xSLTFO/QTZoUEZrVWo0SXlJ/Z0lmTnVRMl9OeERI/NndlYzkwdF82WT0"
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