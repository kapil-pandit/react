import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const serverUrl = 'http://localhost:3022'
const Edit = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    console.log(':::: Update ID 1 ::::', localStorage.getItem('id'), ' :::: :');
    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setMobile(localStorage.getItem('mobile'))
        setEmail(localStorage.getItem('email'))
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(':::: Update ID 2 ::::', id, ' :::: :');
        console.log(':::: eeeeeeeeeeeee NMAE ::::', e.name, ' :::: :');
        console.log(':::: eeeeeeeeeeeee NMAE ::::', e.target.name.value, ' :::: :');
        axios.put(`${serverUrl}/history/${id}`, {
            name:e.target.name.value,
            mobile:e.target.mobile.value,
            email:e.target.email.value
        })
        .then(() => {
            navigate('/')
        })
    }

  return (
    <>
    <div className='row'>
        <div className='col-md-4'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
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
                                            <a className="nav-link" href="/">GB PRoduct</a>
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
            <form onSubmit={handleUpdate}>
                <div className='form-group'>
                    <label> Enter your Full Name  :-</label>
                    <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Input For full name' className='form-control' ></input>
                </div>
                <div className='form-group'>
                    <label> Enter your Mobile Number  :-</label>
                    <input type='number' name='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Input For Mobile Number' className='form-control' ></input>
                </div>
                <div className='form-group'>
                    <label> Enter your email :-</label>
                    <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Input For full name' className='form-control' ></input>
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

export default Edit