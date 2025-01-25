import React from 'react';
import { Link } from 'react-router-dom';

const City = () => {
    return (
        <>
        <div className="text-center p-4">
            <h1>City Image Section</h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3"> 
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?cs=srgb&dl=pexels-zhangkaiyv-1139556.jpg&fm=jpg" alt="City 1" />
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://c4.wallpaperflare.com/wallpaper/707/88/852/dubai-city-aerial-view-skyscraper-wallpaper-preview.jpg" alt="City 2" />
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://plus.unsplash.com/premium_photo-1661919068698-40e7b78f196a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjBjaXR5fGVufDB8fDB8fHww" alt="City 3" />
            </div>
            <div className="text-center mt-3">
                <Link className='btn btn-primary' to="/">Back to Home</Link>
            </div>
        </div>
        </>
    );
}

export default City;
