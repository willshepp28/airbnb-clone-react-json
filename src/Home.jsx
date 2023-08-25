import { useEffect, useState } from "react";

export default function Home(){
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/listings")
            .then((response) => response.json())
            .then((data) => setListings(data));
    });

    return (
        <div>
            <h1>Listings</h1>
            <div className="row">
                {listings.map((listing) => (
                <div className="col" key={listing.listingId}>
                <div className="card" style={{ width: '18rem' }}>

                <img src="https://via.placeholder.com/640x360" className="card-img-top" alt={listing.title} />
                <div className="card-body">
                    <h5 className="card-title">{listing.title}</h5>
                    <p className="card-text">{listing.description}</p>
                </div>
                </div>
            </div>
                ))}
            </div>
        </div>
    );
}