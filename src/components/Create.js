import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addHistory } from '../store.js';
import { useNavigate, Link } from 'react-router-dom';

const serverUrl = 'http://localhost:3022'

const Create = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e, ' :::: e :::: ');
        dispatch(addHistory({
            name, mobile, email
        }));
        axios.post(`${serverUrl}/history`, {
            name, mobile, email
        }).then(()=>{
            navigate('/')
        })
    }
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid container">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                    <a className="navbar-brand" href="/">RTK</a>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Kapil's Brand</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href='/'>Disabled</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    <div className='mb-2 mt-2'>
                        <Link to='/'><button className='btn btn-primary'>Read Data</button></Link>
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
                </div>
            </div>
        </>
    )
}

export default Create