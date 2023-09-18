
import { useNavigate } from "react-router-dom"
import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import NavbarMain from "../../components/NavbarMain/NavbarMain";
import FooterMain from "../../components/FooterMain/FooterMain";


const Pagenotfound = () => {

  const Navigate = useNavigate();


  return (<><HeaderCompany></HeaderCompany>
  <NavbarMain></NavbarMain>
  <div className="container">
    <div className="d-felx justify-content-center align-item-center"> 
      <div className="col-6 p-2 bg-body-tertiary rounded-3" style={{margin: "0 auto"}}>
        <div className="py-5">
          <h1 className="display-5 fw-bold">Oppsss</h1>
          <p className="">Error 404 you might not be here.</p>
          <p className="">Remember you must Login to use the whole website</p>
          <button onClick={() => { Navigate('/home') }} className="btn btn-primary btn-lg" 
          type="button">Go Home</button>
        </div>
      </div>
    </div>
  </div>
  <FooterMain></FooterMain>
  </>)

}

export default Pagenotfound