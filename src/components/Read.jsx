import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addHistory } from '../store.js/index.js';
import './Read.scss'
import { Link } from 'react-router-dom';
import Edit from './Edit.js';
import Single from './single.js'
const serverUrl = 'http://localhost:3022'

const Read = () => {
    const dispatch = useDispatch()
    const [dataList, setDataList] = useState([])
    function employeeList() {
        axios.get(`${serverUrl}/history`).then((response) => {
            console.log(":::::::::::::: response.data ::::::::::::::", response.data);
            setDataList(response.data)
        })
    }

    // employeeList();
    function handleRemove(id) {
        axios.delete(`${serverUrl}/history/${id}`)
            .then(() => {
                employeeList();
            })
    }

    function setDataToStorage(id, name, mobile, email) {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('mobile', mobile)
        localStorage.setItem('email', email)
    }

    useEffect(() => {
        employeeList();
    }, [])
    console.log(":::::: dataList ::::::", dataList);
    return (
        <>

        <Row>
        <Col xs={9}>
        <div className='row'>
                <div className='col-md-12'>
                    <div>
                        <nav className="navclass navbar navbar-expand-lg bg-body-tertiary">
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
                                            <a className="nav-link" href="/">Kapil's Brand</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href='/'>Disabled</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success searchBTN" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='mb-2 mt-2'>
                        <Link to='/create'><button className='addButton'>Add New Employee</button></Link>
                        <Link to='/single'><button className='addButton'>Single</button></Link>
                    </div>
                    <table className='table table-bordered table-striped table-dark table-hover'>
                        <thead>
                            <tr className='trow'>
                                <th className='history' >ID</th>
                                <th>NAME</th>
                                <th>MOBILE</th>
                                <th>EMAIL</th>
                                <th>MODIFY</th>
                                <th>REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataList.map((item, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{index}</td>
                                                <td>{item.name}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                <Link to='/edit'>
                                                    <button className='btn btn-outline-primary' onClick={() => setDataToStorage(item._id,item.name,item.email,item.mobile)}>MODIFY</button>
                                                </Link></td>
                                                <td><button className='btn btn-outline-danger' onClick={() => { if (window.confirm("Are you sure to Delete Data..!")) { handleRemove(item._id) } }}>REMOVE</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Col>
        <Col><Single /></Col>
        </Row>




        </>
    )
}

export default Read