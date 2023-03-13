import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [ results, setResults ] = useState([]);
    const [ error, setError ] = useState("")

    const searchApi = async (search_term) =>{
        try {
           const response = await yelp.get("/search", {
            params: {
                limit: 50,
                term: search_term,
                location: "san jose"
            }
           });
           setResults(response.data.businesses)
           //console.log(response.data);
        } catch(err){
            setError("Something went wrong...")
            console.log(err);
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [
        searchApi, results, error
    ]
}