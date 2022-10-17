import axios from "axios";
import {useState, useEffect} from 'react';
import Menu from "./Menu";
import Bootans from './Bootan';
import goose from './images/my_project.png';
import Loading from "./Loading";



//calling the api
export default function Calling() {
    const [food, setFood] = useState([]);
    const [page, setPage] = useState("Home");
    // console.log('yes')
    useEffect(() => {
        async function getFood(){
            await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/')
            .then((response)=> {
                setFood(response.data);
            });
        }
        getFood();  //sets the state of food
    }, []);
    console.log(food)

//sets the state of the page 
    function onClick(text) {
        setPage(text);
    };

    //creates the constants for food and home 
    const foods = [
        "Home",
        "Breakfast",
        "Lunch",
        "Dinner",
        "Dessert",
        "Side",
        "Appetizer",
    ];

    //shows the loading page 
    if (food.length === 0){
        return (
            <>
            <Loading />
        </>
        )
        }
        //creates the navbar and calls the menu function
        //food.map runs threw all the consts foods and creats buttons for each INCLUDING HOME!
    else if (food.length !==0) {
        return (
            <>
            <nav className="navbar sticky-top navbar-expand-lg d-flex bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={goose} height="60" width="60"/>
                        Krusty Krab!  Now open 24/7!
                    </a>
                    <a className="navbar-brand"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <div className="nav-item text-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {foods.map((foods) => (
                                    <li key={foods}> <a className="nav-link active" aria-current="page"><Bootans text={foods} onClick={onClick} /></a></li>
                                ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="row justify-content-center">
            <Menu data={food} page={page} />
            </div>
            </>
        )
    }
};
//menu is ran with the data(food) and page as props 
















{/* <ul>       
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
</ul> */}


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