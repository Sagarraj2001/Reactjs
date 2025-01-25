import React from 'react';
import { Link } from 'react-router-dom';

const Bird = () => {
    return (
        <>
        <div className="text-center p-4">
            <h1>Bird Image Section</h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3"> 
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://w0.peakpx.com/wallpaper/431/272/HD-wallpaper-beautiful-bird-beautiful-bird-nature-thumbnail.jpg" alt="Bird 1" />
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://images.pexels.com/photos/459198/pexels-photo-459198.jpeg?cs=srgb&dl=pexels-pixabay-459198.jpg&fm=jpg" alt="Bird 2" />
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://cdn.pixabay.com/photo/2018/04/30/13/47/wallpaper-3362711_1280.jpg" alt="Bird 3" />
            </div>
            <div className="text-center mt-3">
                <Link className='btn btn-primary' to="/">Back to Home</Link>
            </div>
        </div>
        </>
    );
}

export default Bird;
