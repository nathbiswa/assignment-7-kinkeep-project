import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '200px' }}>
            <h1 className='text-green-400 font-bold text-5xl'>404</h1>
            <h2 className='text-2xl'>This page is not found</h2>
            <p className='text-gray-400'>Sorry, the page you are looking for does not exist.</p>

            <button 
                onClick={() => navigate('/')}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: 'green',
                    borderRadius: '4px',
                    color: 'white',
                }}
            >
                Back to Home
            </button>
        </div>
    );
};

export default ErrorPage;