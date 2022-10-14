import axios from "axios";
import {useState, useEffect} from 'react';
import Menu from "./Menu";



export default function Calling() {
    const [food, setFood] = useState([]);
    // console.log('yes')
    useEffect(() => {
        async function getFood(){
            await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
            .then((response)=> {
                setFood(response.data);
            });
        }
        getFood();
    }, []);
    console.log(food)
    if (food.length !==0) {
        return (
            <>
            <ul>       
                {food.map((e) => {
                    return (
                <li> 
                    {e.title}
                    {e.category.title}
                    {e.description}
                    {e.price}
                </li> 
                )
                })}
            </ul>
            <Menu menuFood = {food}/>
            // </>
        )
    }
};








    // food.forEach((e) => {

    // let mealTime = food.category;
    // let description = food.description;
    // let price = food.price;
    // let spiceLevel = food.spicy_level;
    // let foodName = food.title;
    // });





// axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/ ')
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));