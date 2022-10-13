import axios from "axios";
import {useState, useEffect} from 'react';



export default function Calling() {
    const [food, setFood] = useState([]);
    console.log('yes')
    useEffect(() => {
        async function getFood(){
            await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
            .then((response)=> {
                setFood(response.data);
            });
        }
        getFood();
    }, []);
    if (food.length !==0) {
        return (
            console.log(food)
        )
    }
};













// axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/ ')
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));