import React from "react";


export default function Loading() {
    return (
        <>
            <div className='container'>
                <div className='row vh-100'>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};