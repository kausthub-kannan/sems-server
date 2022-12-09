import React, {useState, useEffect, useRef} from 'react';
import Navbar from '../../components/Navbar';
import { FaGoogle } from 'react-icons/fa';
import {motion} from 'framer-motion';

function Login(){

    const [values, setValues] = useState({username:"", password:""});
    const [validPass, setValidPass]=useState("");
    const change = async (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const scrollRef = useRef(null);

    //Password Check
    useEffect(() => {
        if(values.password>8){
            setValidPass("valid")
        }
        console.log("changes")
    },[values.password])

    return(<div>
        <Navbar />
            <motion.form action="" method='post' className='auth-forms'
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ root: scrollRef }}
                 transition={{delay: 0.21}}>
                <h1>Login</h1>
                <input onChange={change} name="username" type="text" placeholder='@Username' value={values.user}/>
                <input className={validPass} onChange={change} name="password" type="text" placeholder='Password' value={values.password}/>
                <motion.button type='submit' className='submit'
                        whileHover={{scale: 1.1}}>
                            Submit
                </motion.button>
                or
                <motion.button className='oauth-btn'
                        whileHover={{scale: 1.1}}>
                            Login via <FaGoogle />
                </motion.button>
            </motion.form>
    </div>)
}

export default Login;