import React from "react";
import pizza from './images/Myproject(1).png';

//Just the spinner with the image inside 
export default function Loading() {
    return (
        <>
            <div className='container'>
                <div className='row vh-100'>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <img src={pizza} height='200' width='200' className="spinner-border text-info" role="status"/>
                        </div>
                    </div>
                </div>
            
        </>
    )
};