import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Bounce from 'react-reveal/Bounce';

export const Body = () => {

    const [keterangan, setKeterangan] = useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:3004/keterangan")
        .then((res) => setKeterangan (res.data));
    },[]);


  return (
    <div className='container'>
        <div className="page-content">
            <div className="container">
            <div className="cover shadow-lg bg-white">
                <div className="cover-bg p-3 p-lg-4 text-white">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <Bounce>
                        <div className="avatar hover-effect bg-white shadow-sm p-1">
                            <img src="images/avatar.jpg" width={200} height={200} />
                        </div>
                        </Bounce>
                    </div>
                    <div className="col-lg-8 col-md-7 text-center text-md-start">
                    <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay={0}>Hendra Ucok Luntungan</h2>
                    <p data-aos="fade-left" data-aos-delay={100}>Informatics, Klabat University</p>
                    <div className="d-print-none" data-aos="fade-left" data-aos-delay={200}><a className="btn btn-success shadow-sm mt-1" href="#contact">Hire Me</a></div>
                    </div>
                </div>
                </div>
                <div className="about-section pt-4 px-3 px-lg-4 mt-1">
                <div className="row">

                    {
                        keterangan.map(item=>{
                            return(
                                <div class="col-md-6">
                                <h2 class="h3 mb-3">About Me</h2>
                                <p>{item.about}</p>
                                </div>
                            )
                        })
                    }
                    
                
                    <div className="col-md-5 offset-md-1">
                    <div className="row mt-2">
                        <div className="col-sm-4">
                        <div className="pb-1">Age</div>
                        </div>
                        <div className="col-sm-8">
                        <div className="pb-1 text-secondary">19</div>
                        </div>
                        <div className="col-sm-4">
                        <div className="pb-1">Email</div>
                        </div>
                        <div className="col-sm-8">
                        <div className="pb-1 text-secondary">s2200051@student.unklab.ac.id</div>
                        </div>
                        <div className="col-sm-4">
                        <div className="pb-1">Phone</div>
                        </div>
                        <div className="col-sm-8">
                        <div className="pb-1 text-secondary">+6285240892099</div>
                        </div>
                        <div className="col-sm-4">
                        <div className="pb-1">Address</div>
                        </div>
                        <div className="col-sm-8">
                        <div className="pb-1 text-secondary">Airmadidi Bawah, Kec. Airmadidi</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <hr className="d-print-none" />
                <div className="skills-section px-3 px-lg-4">
                <h2 className="h3 mb-3">Personal Skills</h2>
                <div className="row">
                    <div className="col-md-6">
                    <div className="mb-2"><span>Time Management</span>
                        <div className="progress my-1">
                        <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay={100} data-aos-anchor=".skills-section" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="mb-2"><span>Creativity</span>
                        <div className="progress my-1">
                        <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay={200} data-aos-anchor=".skills-section" style={{width: '80%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="mb-2"><span>Analysis</span>
                        <div className="progress my-1">
                        <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay={300} data-aos-anchor=".skills-section" style={{width: '85%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="mb-2"><span>Teamwork</span>
                        <div className="progress my-1">
                        <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={400} data-aos-anchor=".skills-section" style={{width: '80%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="mb-2"><span>Communication</span>
                        <div className="progress my-1">
                        <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={500} data-aos-anchor=".skills-section" style={{width: '75%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="mb-2"><span>Problem Solving</span>
                        <div className="progress my-1">
                        <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={600} data-aos-anchor=".skills-section" style={{width: '85%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <hr className="d-print-none" />
                <div className="work-experience-section px-3 px-lg-4">
                <h2 className="h3 mb-4">Interest</h2>
                <Bounce bottom>
                <div className="timeline">
                    <div className="timeline-card timeline-card-primary card shadow-sm">
                    <div className="card-body">
                        <div className="h5 mb-1">Sing and Music</div>
                        <div>I've had an interest in music since I was a kid. I've joined several choirs both in church and campus, and active in the ministry as a song guide.</div>
                    </div>
                    </div>
                    <div className="timeline-card timeline-card-primary card shadow-sm">
                    <div className="card-body">
                        <div className="h5 mb-1">Watching Movie and Series </div>
                        <div>Watching a Movie or Series is what i would choose to do when i have free time. I particularly like movies or series with horror and thriller genres. My favorite horror movies are The Conjuring and Pet Sematary.</div>
                    </div>
                    </div>
                    <div className="timeline-card timeline-card-primary card shadow-sm">
                    <div className="card-body">
                        <div className="h5 mb-1">Reading Novels </div>
                        <div>In addition to watching, I also read. I like to imagine the books I read. Just like movies, I like reading with horror and thriller genres. I have read more than 50 books this year.</div>
                    </div>
                    </div>
                </div>
                </Bounce>
                </div>
                <hr className="d-print-none" />
                <div className="page-break" />
                <div className="education-section px-3 px-lg-4 pb-4">
                <h2 className="h3 mb-4">Education</h2>
                <Bounce bottom>
                <div className="timeline">
                    <div className="timeline-card timeline-card-success card shadow-sm">
                    <div className="card-body">
                        <div className="h5 mb-1">SMP Negeri 2 Airmadidi</div>
                        <div className="text-muted text-small mb-2">2014 - 2017</div>
                    </div>
                    </div>
                    <div className="timeline-card timeline-card-success card shadow-sm">
                    <div className="card-body">
                        <div className="h5 mb-1">SMA Negeri 1 Airmadidi</div>
                        <div className="text-muted text-small mb-2">2017 - 2020</div>
                    </div>
                    </div>
                    <div className="timeline-card timeline-card-success card shadow-sm">
                    <div className="card-body">
                        <div className="h5 mb-1">Informatics <span className="text-muted h6">at Klabat University</span></div>
                        <div className="text-muted text-small mb-2">2020 - Present</div>
                    </div>
                    </div>
                </div>
                </Bounce>
                </div>
                <hr className="d-print-none" />
                <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
                <h2 className="h3 text mb-3">Contact</h2>
                <div className="row">
                    <div className="col-md-7 d-print-none">
                    <div className="my-2"><form action="https://formspree.io/your@email.com" method="POST">
                        <div className="row">
                            <div className="col-6">
                            <input className="form-control" type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-6">
                            <input className="form-control" type="email" id="email" name="_replyto" placeholder="Your E-mail" required />
                            </div>
                        </div>
                        <div className="form-group my-2">
                            <textarea className="form-control" style={{resize: 'none'}} id="message" name="message" rows={4} placeholder="Your Message" required defaultValue={""} />
                        </div>
                        <button className="btn btn-primary mt-2" type="submit">Send</button>
                        </form>
                    </div>
                    </div>
                    <div className="col">
                    <div className="mt-2">
                        <h3 className="h6">Address</h3>
                        <div className="pb-2 text-secondary">Airmadidi Bawah, Kec. Airmadidi</div>
                        <h3 className="h6">Phone</h3>
                        <div className="pb-2 text-secondary">+6285240892099</div>
                        <h3 className="h6">Email</h3>
                        <div className="pb-2 text-secondary">s2200051@student.unklab.ac.id</div>
                    </div>
                    </div>
                    <div className="col d-none d-print-block">
                    <div className="mt-2">
                        <div>
                        <div className="mb-2">
                            <div className="text-dark"><i className="fab fa-whatsapp mr-1" /><span>https://wa.me/6285240892099</span>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="text-dark"><i className="fab fa-facebook mr-1" /><span>https://m.facebook.com/hendra.luntungan.35?eav=AfZEAsJuCiaqfwebKzoqTL31Ssh4YSVoXF4YJkVI03v1vbplJBet6BvEpjizzQ1OB6Y&amp;paipv=0</span>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="text-dark"><i className="fab fa-instagram mr-1" /><span>https://www.instagram.com/luntunganuh/</span>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="text-dark"><i className="fab fa-github mr-1" /><span>https://github.com/hendraluntungan</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div></div>
        </div>
    </div>
  )
}
