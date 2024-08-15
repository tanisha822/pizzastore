import { useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Displayitems(){


    const [Displayitems , setDisplayitems]=useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        fetchDisplayitems();
    }, [])

    const fetchDisplayitems = () => {
        axios.get('http://localhost:5000/Displayitems')
            .then(response => {
                setDisplayitems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the Displayitems data',error)
            })
    }


    const handleDelete = (id)=> {
        axios.delete(`http://localhost:5000/Displayitems/${id}`)
        .then(response => {
            fetchDisplayitems();
        })
        .catch(error => {
            console.error('There was an error deleting the Displayitems data',error)
        })
    }



    return (
        <div className="container mt-4">
            <h2>Store Item List</h2>
            <div className="row">
                {Displayitems.map(Displayitems => (
                    <div className="col-md-4" key={Displayitems.id}>
                    <div className="card mb-4">
                        <img src={Displayitems.image} height={300}  className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{Displayitems.name}</h5>
                            <p className="card-text">Price: ${Displayitems.price}</p>
                            <p className="card-text">type: {Displayitems.type}</p>
                            <p className="card-text">Description: {Displayitems.description}</p>
                            <button  className="btn btn-danger me-2" onClick={()=> handleDelete(Displayitems.id)}>DELETE</button>
                            <button className="btn btn-warning" onClick={() => navigate(`/update-Displayitems/${Displayitems.id}`)}>UPDATE</button>
                        </div>
                        </div>
                    </div>


                ))}
            </div>


        </div>
    )
}


export default Displayitems;
