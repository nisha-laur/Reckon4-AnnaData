import React, { useState } from 'react';
import './volunteer.css'

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        education: ""

    });

    let name, value;

    const handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;


        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, education } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, education

            })
        });
        // eslint-disable-next-line 
        const data = await res.json();
    }


    return (
        <>

            <img src="img1.png" id="image-2" alt="React " />
            <h1 id="mainheading"> Volunteers Form</h1>
            <h1 id="minheading">Create Account</h1>
            <form className="row g-3" method="POST">
                <div className="col-12">
                    <label className="form-label" htmlFor="name">Fullname</label>
                    <input className="form-control" type="text" autoComplete="off"
                        value={user.name}
                        onChange={handleInput}
                        name="name" id="username" />
                </div>

                <div className="col-12">
                    <label className="form-label" htmlFor="email">email</label>
                    <input className="form-control" type="text" autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                        name="email" id="email" />
                </div>

                <div className="col-md-6">
                    <label className="form-label" htmlFor="phone">phone</label>
                    <input className="form-control" type="text" autoComplete="off"
                        value={user.phone}
                        onChange={handleInput}
                        name="phone" id="phone" />
                </div>
                <div className="col-md-6">
                    <label className="form-label" htmlFor="education">Education</label>
                    <input className="form-control" type="text" autoComplete="off"
                        value={user.education}
                        onChange={handleInput}
                        name="education" id="education" />
                </div>



                <button className="btn btn-primary submiting" type="submit" onClick={PostData}>Register</button>
            </form>

            {/* <div>
                {
                    records.map((curElem) => {
                        const { id, username, email, phone, password } = curElem;
                        return (
                            <div className="showDataStyle" key={id} >
                                <p>{username}</p>
                                <p>{email}</p>
                                <p>{phone}</p>
                                <p>{password}</p>
                            </div>
                        )
                    })
                }
            </div> */}
        </>
    )
}
export default Signup