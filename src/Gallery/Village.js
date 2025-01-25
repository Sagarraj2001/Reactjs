import React from 'react'
import {Link} from "react-router-dom";

const Village = () => {
  return (
    <>
        <div className="text-center p-4">
            <h1>village Image Section</h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3"> 
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://w0.peakpx.com/wallpaper/112/716/HD-wallpaper-autumn-village-village-nature-autumn.jpg" alt="Village 1" />
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://www.scapesindia.com/wp-content/uploads/2015/06/landscapes-siolim-goa.jpg" alt="village 2" />
                <img className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} src="https://thumbs.dreamstime.com/b/beautiful-view-bali-rice-terraces-beautiful-view-bali-rice-terraces-bali-97875535.jpg" alt="village 3" />
            </div>
            <div className="text-center mt-3">
                <Link className='btn btn-primary' to="/">Back to Home</Link>
            </div>
        </div>
    </>
  )
}

export default Village
