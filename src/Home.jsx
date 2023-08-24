import { useEffect, useState } from "react";

export default function Home(){
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/listings")
            .then((response) => response.json)
            .then((data) => console.log(data));
    });

    return (
        <div>
            <h1>Listings</h1>
        </div>
    );
}