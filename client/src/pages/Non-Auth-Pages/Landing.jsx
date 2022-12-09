import React, {useState, useEffect, useRef} from 'react';
import Navbar from '../../components/Navbar';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

function Landing(){

    const scrollRef = useRef(null);

    return(<div className='Landing'>
        <Navbar />
        <section>
        <div>
            <img className='bg-side' src="images/bg.png" alt="" />
            <motion.div className='head-section'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
            transition={{delay: 0.21}}>
                <h1 className="head">Sustainable Energy Monitor</h1>
                <p/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam. Quorum sine causa fieri nihil putandum est. Si quicquam extra virtutem habeatur in bonis. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Ille enim occurrentia nescio quae comminiscebatur; Itaque hic ipse iam pridem est reiectus
                <div className='getIn'>
                    <Link to="/signUp"> 
                        <motion.button className='btn1'
                        whileHover={{scale: 1.1}}>
                            SignUp
                        </motion.button>
                    </Link>
                    <Link to="/login"> 
                        <motion.button className='btn1'
                        whileHover={{scale: 1.1}}>
                            Login
                        </motion.button>
                    </Link>
            </div>
            </motion.div>
        </div>
        </section>

        <motion.section className='cd-section'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
            transition={{delay: 0.21}}>
            <motion.div className='cd-1' whileHover={{scale: 1.1}}>
            <img className="cd-img-1" src="images/chart01.png" alt="" />
            <div className='cd-cnt-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ALIO MODO. Nam et a te perfici istam disputationem volo, nec tua mihi oratio longa videri potest. Duo Reges: constructio interrete. Unum est sine dolore esse, alterum cum voluptate. Ut pulsi recurrant? Illa argumenta propria videamus, cur omnia sint paria peccata. Scio enim esse quosdam, qui quavis lingua philosophari possint; Equidem, sed audistine modo de Carneade? Torquatus, is qui consul cum Cn. Sed quia studebat laudi et dignitati, multum in virtute processerat. Nescio quo modo praetervolavit oratio. Hic nihil fuit, quod quaereremus.
            </div>
            </motion.div>
            <motion.div className='cd-1' whileHover={{scale: 1.1}}>
            <img className="cd-img-1" src="images/e-green1.png" alt="" />
            <div className='cd-cnt-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ALIO MODO. Nam et a te perfici istam disputationem volo, nec tua mihi oratio longa videri potest. Duo Reges: constructio interrete. Unum est sine dolore esse, alterum cum voluptate. Ut pulsi recurrant? Illa argumenta propria videamus, cur omnia sint paria peccata. Scio enim esse quosdam, qui quavis lingua philosophari possint; Equidem, sed audistine modo de Carneade? Torquatus, is qui consul cum Cn. Sed quia studebat laudi et dignitati, multum in virtute processerat. Nescio quo modo praetervolavit oratio. Hic nihil fuit, quod quaereremus.
            </div>
            </motion.div>
            <motion.div className='cd-1' whileHover={{scale: 1.1}}>
            <img className="cd-img-1" src="images/e-green1.png" alt="" />
            <div className='cd-cnt-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ALIO MODO. Nam et a te perfici istam disputationem volo, nec tua mihi oratio longa videri potest. Duo Reges: constructio interrete. Unum est sine dolore esse, alterum cum voluptate. Ut pulsi recurrant? Illa argumenta propria videamus, cur omnia sint paria peccata. Scio enim esse quosdam, qui quavis lingua philosophari possint; Equidem, sed audistine modo de Carneade? Torquatus, is qui consul cum Cn. Sed quia studebat laudi et dignitati, multum in virtute processerat. Nescio quo modo praetervolavit oratio. Hic nihil fuit, quod quaereremus.
            </div>
            </motion.div>
        </motion.section>

        <section>


            <div className='cards'>
                <div className="report-chart">
                <motion.img className='chart' whileHover={{scale: 1.2}} src="images/chart01.png" alt="" />
                <motion.div className='card-cnt-1'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ root: scrollRef }}
                    transition={{delay: 0.21}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ALIO MODO. Nam et a te perfici istam disputationem volo, nec tua mihi oratio longa videri potest. Duo Reges: constructio interrete. Unum est sine dolore esse, alterum cum voluptate. Ut pulsi recurrant? Illa argumenta propria videamus, cur omnia sint paria peccata. Scio enim esse quosdam, qui quavis lingua philosophari possint; Equidem, sed audistine modo de Carneade? Torquatus, is qui consul cum Cn. Sed quia studebat laudi et dignitati, multum in virtute processerat. Nescio quo modo praetervolavit oratio. Hic nihil fuit, quod quaereremus.
                </motion.div>
                </div>


                <div className="e-green">
                <motion.img className='leaf' whileHover={{scale: 1.2}} src="images/e-green1.png" alt="" />
                <motion.div className='card-cnt-2'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ root: scrollRef }}
                    transition={{delay: 0.21}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ALIO MODO. Nam et a te perfici istam disputationem volo, nec tua mihi oratio longa videri potest. Duo Reges: constructio interrete. Unum est sine dolore esse, alterum cum voluptate. Ut pulsi recurrant? Illa argumenta propria videamus, cur omnia sint paria peccata. Scio enim esse quosdam, qui quavis lingua philosophari possint; Equidem, sed audistine modo de Carneade? Torquatus, is qui consul cum Cn. Sed quia studebat laudi et dignitati, multum in virtute processerat. Nescio quo modo praetervolavit oratio. Hic nihil fuit, quod quaereremus.
                </motion.div>
                </div>


                <div className="iot-div">
                <motion.img className='iot' whileHover={{scale: 1.2}} src="images/iot.png" alt="" />
                <motion.div className='card-cnt-3'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ root: scrollRef }}
                    transition={{delay: 0.21}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ALIO MODO. Nam et a te perfici istam disputationem volo, nec tua mihi oratio longa videri potest. Duo Reges: constructio interrete. Unum est sine dolore esse, alterum cum voluptate. Ut pulsi recurrant? Illa argumenta propria videamus, cur omnia sint paria peccata. Scio enim esse quosdam, qui quavis lingua philosophari possint; Equidem, sed audistine modo de Carneade? Torquatus, is qui consul cum Cn. Sed quia studebat laudi et dignitati, multum in virtute processerat. Nescio quo modo praetervolavit oratio. Hic nihil fuit, quod quaereremus.
                </motion.div>
                </div>


            </div>
        </section>
        <section className='footer'>
            <button className='line'></button><br />
            @copyrights 2022
            <div class="icons">
            <FaInstagram class="icons"/>
            <FaTwitter class="icons"/>
            <FaGithub class="icons"/>
            </div>
        </section>
    </div>)
}

export default Landing;