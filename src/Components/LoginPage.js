import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../utils/Navbar'

const LoginPage = () => {
    const [phone,setPhone]= useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const [processing,setProcessing] = useState('')
    const [checkPhone,setCheckPhone] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submittedotp, setSubmittedOtp] = useState(false);
    const [confirmedOtp, setConfirmedOtp ] = useState('');
    const [otp,setOtp ] = useState('');
    const [qr,setQr ] = useState('');

    function checkUser(e) {
        e.preventDefault();
        setProcessing('yes')
        setSubmitted(true);
        const data = {
            phone
        }
        axios.post('https://riceatm-admin.azurewebsites.net/users/login/checked',data)
            .then(response => {
                setCheckPhone(true);
                setConfirmedOtp(response.data.otp);
                setProcessing('')
            }).catch(e => {
                setProcessing('')
                setError('သင့္ဖုန္းနံပါတ္ျဖင့္ စာရင္းမေပးထားပါ။ စာရင္းေပးျပီး QR ကို ထုတ္ယူပါ။')
                setTimeout(() => {
                   window.location.replace('/register');
                },3000)
            })
    } 

    function otpSubmit(e) {
        e.preventDefault();

        setSubmittedOtp(true);
        if(otp.toString() === confirmedOtp.toString()) {
            axios({
                url: `https://riceatm-admin.azurewebsites.net/api/v2/client/qr/login/download/${phone}`,
                method: 'GET',
              }).then((response) => {
                  console.log(response.data);
                setSuccess('done');
                setError('');
                setQr(response.data.link);
                setOtp('')
                setCheckPhone(false);
                setSubmitted(false);
                setPhone('')
              }).catch(e => {
                setSuccess('');
                setError('သင့် Broswer သည် QR  ထုတ်ရန် အဆင်မပြေပါ။');
              })
        }  else {
            setError('တစ်ခါသုံးကုတ်ဖြည့်သွင်းခြင်းမှားယွင်းနေပါသည်။ ပြန်လည် ဖြည့်သွင်းပေးပါ။');
        }           
    }
    
    return(
        <div className='loginPage'>
            <Navbar></Navbar>
            <div className="container login-box">
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 col-md-6 offset-md-3'>
                        <div className='card login-form'>
                            <div className='card-title text-center'>
                                <h6 className='card-header'>စာရင်းပေးထားပြီးသော် ဖုန်းနံပါတ်ရိုက်ပါ။</h6>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={checkUser}>
                                    <div className='form-group'>
                                        <label htmlFor="phone">
                                            ဖုန်းနံပါတ်
                                        </label>
                                        <input type="text" className={'form-control' + (submitted && !phone ? ' is-invalid' : '')} value={phone} onChange={e => setPhone(e.target.value)} name='phone'/>
                                        {submitted && !phone &&
                                            <div className="invalid-feedback"> ဖုန်းနံပါတ် ဖြည့်ရန်လိုအပ်သည်။</div>
                                        }
                                    </div>
                                    <div className='form-group'>
                                        <button className='btn btn-success'>ဆောင်ရွက်မည်။</button>
                                        <Link to="/" className="btn btn-link">နောက်သို့ပြန်သွားမည်</Link>
                                    </div>
                                    {
                                        processing === 'yes' &&
                                        <div className="form-group">
                                            <span className='text-info'>
                                                ဆောင်ရွယ်နေပါသည်
                                            </span>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                        {
                        checkPhone === true &&
                        <div className='card login-form mt-2'>
                            <div className='card-body'>
                                <form name="form" onSubmit={otpSubmit}>
                                    <div className="form-group">
                                        <label>ဖုန်းနံပါတ်ကို တစ်ခါသုံးကုတ်ပို့ထားပါသည်။ အောက်တွင်ဖြည့်ပါ</label>
                                        <input type="number" name="otp" value={otp} onChange={(e) => { setOtp(e.target.value)}} className={'form-control' + (submittedotp && otp === ''? ' is-invalid' : '')} />
                                        {submittedotp && otp === '' &&
                                            <div className="invalid-feedback">တစ်ခါသုံးကုတ် ဖြည့်ရန်လိုအပ်သည်။
                                            </div>
                                        }
                                    </div>
                                    <div className='form-group'>
                                        <button className="btn btn-primary">
                                            တစ်ခါသုံး code ကိုဖြည့်သွင်းမည်ါ
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        }
                        {
                        error !== '' &&
                        <div className='bg-warning mt-3'>
                            <Alert className="text-white">
                                {error}
                            </Alert>
                        </div>
                        }
                         {success !== '' &&
                        <div className='bg-success mt-3'>
                            <Alert className="text-white">
                                စာရင်းပေးသွင်းခြင်း အောင်မြင်ပါသည်။ QR ကုတ်ကို download ရယူပြီးပါပြီ။
                            </Alert>
                        </div>
                        }
                    </div>
                </div>
                {qr !== '' &&
                    <div className = "row mt-4">
                        <div className='col-lg-8 offset-lg-2 col-md-6 offset-md-3 text-center'>
                            <div className='card'>
                                <div className='card-title'>
                                    <h6 className='card-header'> Your QR Code is</h6>
                                </div>
                                <div className='card-body'>
                                    <img src={qr} className='img-responsive' alt=""/>
                                </div>
                                <div className='card-footer text-right'>
                                    <button className='btn btn-primary' onClick={e => window.open(qr,'_blank')}> Download </button>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default LoginPage