function About(){
    return(
        <>
        <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center my-5">
                            <h1 className="display-5 fw-bolder  mb-2">About</h1>
                            <p className="lead  mb-4" style={{textAlign: "justify"}}>At our ecommerce app , we believe in responsible pet ownership. That's why we offer educational resources and workshops to help you become a knowledgeable and caring pet guardian. Our team is here to answer your questions, address any concerns, and provide guidance on topics such as pet nutrition, training, and healthcare.</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                <a className="btn  btn-lg px-4" href="#!">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;