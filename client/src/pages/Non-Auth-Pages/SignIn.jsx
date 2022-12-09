import React, {useState, useEffect, useRef} from 'react';
import Navbar from '../../components/Navbar';
import { FaGoogle } from 'react-icons/fa';
import {motion} from 'framer-motion';
import axios from 'axios'

function SignIn(){

    const [values, setValues] = useState({username:"", email:"", password:""});
    const [validPass, setValidPass]=useState("");
    const scrollRef = useRef(null);


    const change = async (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const dataSender = async (e) => {
        e.preventdefault();
        try{
            const {data} = await axios({
                url: 'http://localhost:1008/signIn',
                method: 'post',
                data:{
                    ...values,
                },
                withCredentials: true,
            })
            if(data){
                if(data.response){
                    console.log(data.response);
                }else{
                    console.log(data.error);
                }
            }
        }catch (err){
             console.log(err)
        }
    }


    return(<div>
        <Navbar />
            <motion.form action="" method='post' className='auth-forms'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
                transition={{delay: 0.21}}>
                <h1>SignUp</h1>
                <input onChange={change} name="username" type="text" placeholder='@Username' value={values.user}/>
                <input onChange={change} name="email" type="text" placeholder='Email' value={values.email}/>
                <input className={validPass} onChange={change} name="password" type="text" placeholder='Password' value={values.password}/>
                <motion.button type='submit' className='submit'
                        whileHover={{scale: 1.1}}>
                            Submit
                </motion.button>
                or
                <motion.button className='oauth-btn'
                        whileHover={{scale: 1.1}}>
                            SignUp via <FaGoogle />
                </motion.button>
            </motion.form>
    </div>)
}

export default SignIn;