import React from "react";

function Props({students}){

    const studentList =(nhb);

    for (let x in students ){
        studentList.push(
            <div style = {{backgroundColor:"lightblue"}}>
                <h2>{students[x].name} </h2>
                <h2>{students[x].rollno}</h2>
                <h2>{students[x].course}</h2>
            </div>
        )
    }
    return (
        <div>
            {studentList}
        </div>
    )
}