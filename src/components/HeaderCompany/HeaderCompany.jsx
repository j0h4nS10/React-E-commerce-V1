import '../../assets/react.svg'

function HeaderCompany() {

    return (<>
        <div id="HeaderCompany" className='fluid' style={{margin: "0 auto", background: "#E0E0E0"}}>
            <div className='centercontainer' style={{background: ""}}>
                <div className='row' style={{width: "80%", height: 100, margin: "0 auto"}}>
                <div className="col" style={{width: "50%"}}>
                    <h1 style={{textAlign: "left"}}>txt company</h1>
                    <h3 style={{}}>other text</h3></div>
                <div className="col" style={{width: "50%"}}>
                    <img style={{height: 98}} src='https://images.freeimages.com/images/previews/9da/pilatus-and-lake-lucernce-1342887.jpg'>
                </img></div>
            </div>
            </div>
        </div>
    </>)

}

export default HeaderCompany