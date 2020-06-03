import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faQrcode,faCalendarTimes,faPhone } from '@fortawesome/free-solid-svg-icons'


const About = () => {
    return(
        <div className="service-section" id="services">
            <div className="container text-center">
                <h3>RiceATM ဆိုတာဘာလည်း</h3>
                
                <div className="row mb-5">
                    <div className="col-md-3 col-sm-6 col-xs-12 mt-3">
                        <div className="service-items">
                            <div className="icon">
                                <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>
                            </div>
                            <p>လူအထိအတွေ့မရှိဘဲ ကိုယ်တိုင်ထုတ်စနစ်ဖြင့်စက်မှ ဆန်ထုတ်ယူနိုင်သောစနစ်.</p>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 col-xs-12 mt-3">
                        <div className="service-items">
                            <div className="icon">
                                <FontAwesomeIcon icon={faQrcode}></FontAwesomeIcon>
                            </div>
                            <p>QR ကုတ်စနစ်ကိုအသုံးပြုထားပြီး Online မှတစ်ဆင့် ကိုယ်တိုင် စာရင်းသွင်းပြီး ထုတ်ယူနိုင်ပါသည်။</p>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 col-xs-12 mt-3">
                        <div className="service-items">
                            <div className="icon">
                                <FontAwesomeIcon icon={faCalendarTimes}></FontAwesomeIcon>
                            </div>
                            <p>သုံးရက် တစ်ခါဆန်သွားရောက်ထုတ်ယူနိုင်ပါသည်။ </p>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 col-xs-12 mt-3">
                        <div className="service-items">
                            <div className="icon">
                                 <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            </div>
                            <p>ဖုန်းနံပါတ် တစ်ခုကို  QR code တစ်ခုထုတ်ယူနိုင်ပြီး ဖုန်းနံပါတ်မရှိသူများပါ  QR code ရရှိအောင် စီစဉ်ပေးထားပါသည်။</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="contact  text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-sm-12 col-xs-12">
                            <h3>Covid-19 ကာလကို အတူတူကျော်ဖြတ်စို့ !</h3>
                            <p>ခုအချိန်မှာ Covid-19 ဆိုတဲ့ ကူးစက်မြန်ရောဂါဆိုးကြီးကြောင့် ကျွန်တော်တို့တွေဟာ စီးပွားရေး၊လူမှုရေး စသဖြင့် အဖက်ဖက်မှာ အခက်အခဲတွေရှိနေကြပါတယ်။ ဒါပေမယ့် အားလုံး အတူတူ စည်းစည်းလုံးလုံး၊ ဖေးဖေးမမနှင့် ရှေ့စက်သွားကြမယ်ဆိုရင် အခက်အခဲတွေက လျော့နည်းလာမယ်လို့ယုံကြည်ပါတယ်။</p>
                            <div className="gap">
                                <div className="col-sm-12 col-xs-12">
                                <p className='text-warning'>အပြင်သွားတိုင်း Mask တပ်ခြင်း၊ လက်ကိုဆပ်ပြာဖြင့်ပုံမှန်ဆေးခြင်းဖြင်း Covid-19 ကို ကာကွယ်ကြပါ။</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About