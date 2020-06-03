import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import townships from '../_helpers/townships';
import naypyitawTS from '../_helpers/naypyitawTS';
import cities from '../_helpers/city';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../utils/Navbar'
import axios from 'axios';

const RegisterPage = () => {
    const [user, setUser] = useState({
        name: '',
        street: 'Default Address',
        township: '',
        city: '',
        phone: '',
        password: 123456,
    });
    const [cityfilter,setCityfilter] = useState('yangon');
    const [submitted, setSubmitted] = useState(false);
    const [submittedotp, setSubmittedOtp] = useState(false);
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const [processing,setProcessing]= useState('');
    const [otpProcess,setOtpProcess] = useState('');
    const [otp,setOtp] = useState('');
    const [confirmedotp,setConfirmedotp] = useState('');
    const [qr,setQr] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleCityChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
        const type = e.target.value;
        console.log(type);
        switch(type) {
            case 'yangon':
                setCityfilter('yangon');
                break;
            case 'naypyitaw':
                setCityfilter('naypyitaw');
                break;
            default:
                setCityfilter('yangon');
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.name &&
            user.township && user.phone && user.city) {
            setProcessing('yes');
            axios.post('https://riceatm-admin.azurewebsites.net/users/register',user)
                .then(response => {
                    setOtpProcess('start')
                    setProcessing('');
                    setError('');
                    setConfirmedotp(response.data.otp);
                }).catch(e => {
                    setProcessing('');
                    setOtpProcess('')
                    setSuccess('')
                    setProcessing('');
                    if(e.toString().includes('400')) {
                        setError('သင့်ဖုန်းဖြင့် စာရင်းသွင်းထားပြီးပြီဖြစ်ပါသဖြင့်ထပ်မံ စာရင်းသွင်းလို့မရပါ။')
                    } else if(e.toString().includes('401')){
                        setError('ဖုန်းနံပါတ်မှာ 09 ဖြင့် စပေးပါ။');
                    } else {
                        setError('မအောင်မြင်ပါ။နောက်တစ်ကြိမ်ပြန်စမ်းပါ');
                    }
                })
        }
    }

    function otpSubmit(e) {
        e.preventDefault();

        setSubmittedOtp(true);
        if(otp.toString() === confirmedotp.toString()) {
            axios.post('https://riceatm-admin.azurewebsites.net/users/register/confirmed',user)
                .then(response => {
                    setError('');
                    setOtpProcess('');
                    setOtp('');
                    
                    axios({
                        url: `https://riceatm-admin.azurewebsites.net/api/v2/client/qr/download/${response.data._id}`,
                        method: 'GET',
                      }).then((response) => {
                        setSuccess('done');
                        setSubmitted(false);
                        setUser({
                            name: '',
                            street: 'Default Address',
                            township: '',
                            phone: '',
                            city: '',
                            password: 123456,
                        });
                        setQr(response.data.link); 
                      }).catch(e => {
                        setSuccess('');
                        setError('Please try again');
                        setTimeout(() => {
                            window.location.reload('/register')
                        })
                      })
                }).catch(e => {
                    setSuccess('');
                    setError('တစ်ခါသုံးကုတ် သတ်မှတ်ချိန်ကျော်လွန်သွားပါသဖြင့် ပြန်လည်ပြီး စာရင်းသွင်းပါ။');
                    window.location.load();
                
                })
        } else {
            setError('တစ်ခါသုံးကုတ်ဖြည့်သွင်းခြင်းမှားယွင်းနေပါသည်။ ပြန်လည် ဖြည့်သွင်းပေးပါ။')
        }
    }

    return(
        <div className='register-page'>
            <Navbar></Navbar>
            <div className="col-lg-8 offset-lg-2 mt-5 register-form">
                <div className='card register-card'>
                    <div className='card-body'>
                        <div className='text-center mt-3 mb-3'>
                            <h3>စာရင်းသွင်းခြင်း</h3>
                        </div>
                        <form name="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>ဖုန်းနံပါတ် (English ဖြင့်သာရိုက်ရန် )</label>
                                <input type="number" name="phone" value={user.phone} onChange={handleChange} className={'form-control' + (submitted && !user.phone ? ' is-invalid' : '')} />
                                {submitted && !user.phone &&
                                    <div className="invalid-feedback">ဖုန်းနံပါတ် ဖြည့်ရန်လိုအပ်သည်။
                                    </div>
                                }
                            </div>
                            <div className="form-group">
                                <label>နာမည်</label>
                                <input type="text" name="name" value={user.name} onChange={handleChange} className={'form-control' + (submitted && !user.name ? ' is-invalid' : '')} />
                                {submitted && !user.name &&
                                    <div className="invalid-feedback">နာမည် ဖြည့်ရန်လိုအပ်သည်။</div>
                                }
                            </div>
                            <div className="form-group">
                                <label>မြို့နယ်</label>
                                <select name="township" value={user.township} onChange={handleChange} className={'form-control' + (submitted && !user.township ? ' is-invalid' : '')} >
                                    <option value='0'> --- မြို့နယ် ရွေးပါ --- </option>
                                    {(cityfilter === 'yangon') ? 
                                     townships.map(township => {
                                        return(
                                        <option key={township.id} value={township.value}>{township.text}</option>
                                        )
                                    }) :
                                       
                                    naypyitawTS.map(township => {
                                        return(
                                        <option key={township.id} value={township.value}>{township.text}</option>
                                        )
                                    })
                                    }
                                </select>
                                {submitted && !user.township && user.township === '0' &&
                                    <div className="invalid-feedback">မြို့နယ် ဖြည့်ရန်လိုအပ်သည်။</div>
                                }
                            </div>
                            <div className="form-group">
                                <label>မြို့</label>
                                <select name="city" value={user.city} onChange={handleCityChange} className={'form-control' + (submitted && !user.city ? ' is-invalid' : '')} >
                                    <option value='0'> --- မြို့ ရွေးပါ --- </option>
                                    {
                                        cities.map(city => {
                                            return(
                                            <option key={city.id} value={city.value}>{city.text}</option>
                                            )
                                        })
                                    }
                                </select>
                                {submitted && !user.city && user.city === '0' &&
                                    <div className="invalid-feedback">မြို့ ဖြည့်ရန်လိုအပ်သည်။</div>
                                }
                            </div>
                            <div className="form-group">
                                {
                                    otpProcess === 'start'?  <button className="btn btn-primary" disabled>
                                        မှတ်ပုံတင်ပါ
                                    </button> :  <button className="btn btn-primary">
                                        မှတ်ပုံတင်ပါ
                                    </button>
                                }
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
                { otpProcess === 'start' &&
                <div className='card mt-4'>
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
                {success !== '' &&
                <div className='bg-success mt-3'>
                    <Alert className="text-white">
                        စာရင်းပေးသွင်းခြင်း အောင်မြင်ပါသည်။ QR ကုတ်ကို download ရယူပြီးပါပြီ။
                    </Alert>
                </div>
                }
                {error !== '' &&
                <div className='bg-warning mt-3'>
                    <Alert className="text-white">
                        {error}
                    </Alert>
                </div>
                }
            </div>
            {qr !== '' &&
                <div className='col-lg-8 offset-lg-2 col-md-6 offset-md-3 text-center mt-4'>
                    <div className='card register-card'>
                        <div className='card-title bg-info'>
                            <h6 className='card-header text-white'> Your QR Code is</h6>
                        </div>
                        <div className='card-body'>
                            <img src={qr} className='img-responsive' alt=""/>
                        </div>
                        <div className='card-footer text-right'>
                            <button className='btn btn-primary' onClick={e => window.open(qr,'_blank')}> Download </button>
                        </div>
                    </div>
                </div>

                }
        </div>
    )
}

export default RegisterPage