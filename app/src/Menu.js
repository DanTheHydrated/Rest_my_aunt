import PushingP from "./LandingPage";


//This is the function that makes all the cards filled with the info about the food 
export default function Menu(props) {

  if (props.page === "Home") {
    return <PushingP />;
  }

  let pleaseWork = props.data.filter(
    (food) => food.category.title === props.page
  );

  return (
    <>
      {pleaseWork.map((meal) => {
        return (
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-stretch my-2" key={meal.id}>
            <div className="card w-100 bg-info bg-opacity-75">
              <div className="card-body">
                <h2 className="card-title text-center ">{meal.title}</h2>
                <h4 className="card-text text-center">${meal.price}</h4>
                <div className="card-text text-center align-items-center">
                  {meal.description}
                </div>
                <div className="card-text text-center align-items-center">
                Spice level: {meal.spicy_level}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

