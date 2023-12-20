import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addHistory } from '../store.js';
import { useNavigate, Link } from 'react-router-dom';

const serverUrl = 'http://localhost:3022'

const Single = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addHistory({
            name, mobile, email
        }));
        axios.post(`${serverUrl}/history`, {
            name, mobile, email
        }).then(()=>{
            navigate('/home')
        })
    }
    return (
        <>
                    <div className='mb-2 mt-2'>
                        <Link to='/home'><button className='btn btn-primary'>Read Data</button></Link>
                    </div>
                    <div className='bg-primary p-4 text-control'>
                        <h1>Employee Entry !</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label> Enter your Full Name  :-</label>
                            <input type='text' placeholder='Input For full name' className='form-control' onChange={e => setName(e.target.value)}></input>
                        </div>
                        <div className='form-group'>
                            <label> Enter your Mobile Number  :-</label>
                            <input type='number' placeholder='Input For Mobile Number' className='form-control' onChange={e => setMobile(e.target.value)}></input>
                        </div>
                        <div className='form-group'>
                            <label> Enter your email :-</label>
                            <input type='text' placeholder='Input For full name' className='form-control' onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='submit' className='btn btn-primary'></input>
                        </div>
                    </form>
        </>
    )
}

export default Single