import React, { useState } from "react"

function StudentReg(){
    const [ data , setData ] = useState ({name : "",tel : "", email : ""});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    if(!data.name || !data.tel || !data.email){
        alert("Fill all details");
    }else{
        alert("Registration successful");
    }
    setData({name : "",tel : "", email : ""});

return (
    <div>
        <h1>StudentRegistration</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required value={data.name} onChange={handleChange} />

            <label htmlFor="tel">Mobile</label>
            <input type="text" id="tel" name="tel" required value={data.tel} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required value={data.email} onChange={handleChange} />

            <button type="submit">Register</button>
        </form>
        
    </div>
);
}

export default StudentReg;