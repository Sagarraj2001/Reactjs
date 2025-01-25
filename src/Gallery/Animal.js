import React from 'react';
import { Link } from 'react-router-dom';

const Animal = () => {
    return (
        <>
        <div className="text-center p-4">
            <h1>Animal Image Section</h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3"> 
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://w0.peakpx.com/wallpaper/984/86/HD-wallpaper-cute-dog-for-cute-puppy-dog-pet-animal.jpg" alt="Animal 1" />
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://www.shutterstock.com/image-photo/cute-baby-elephant-playing-water-600nw-2432135173.jpg" alt="Animal 2" />
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://static.vecteezy.com/system/resources/thumbnails/030/183/962/small_2x/cute-animal-on-nature-ai-generative-free-photo.jpg" alt="Animal 3" />
            </div>
            <div className="text-center mt-3">
                <Link className='btn btn-primary' to="/">Back to Home</Link>
            </div>
        </div>
        </>
    );
}

export default Animal;
