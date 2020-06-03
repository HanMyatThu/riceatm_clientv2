import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer';
import About from '../Components/About';

const HomePage = () => {
    return(
        <div className='container-fluid'>
            <Navbar id='about'></Navbar>
            <div className='row home-page'>
                <div className='col-md-6 firsthalf-bg'>
                    <div className='text-box text-center'>
                        <div className="box-fig box-fig-primary">
                            <Link to='/register' className='link-set'>
                                စာရင်းပေးသွင်းမည်
                            </Link>
                        </div>   
                    </div>
                </div>
                <div className='col-md-6 secondhalf-bg'>
                <div className='text-box text-center'>
                        <div className="box-fig box-fig-secondary">
                            <Link to='/login' className='link-set'>
                                QR ကိုထုတ်ယူမည်
                            </Link>
                        </div>  
                </div>
                </div>
            </div>
            <About id='about'></About>
            <Footer></Footer>
        </div>
    )
}

export default HomePage