import Home from "./Home";


export default function Menu(props) {

  if (props.page === "Home") {
    return <Home />;
  }

  let pleaseWork = props.data.filter(
    (food) => food.category.title === props.page
  );

  return (
    <>
      {pleaseWork.map((meal) => {
        return (
          <div
            className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-stretch my-2"
            key={meal.id} >
            <div className="card w-100 bg-info bg-opacity-50">
              <div className="card-body">
                <h3 className="card-title text-center ">{meal.title}</h3>
                <h5 className="card-text text-center">${meal.price}</h5>
                <div className="card-text text-center align-items-center">
                  {meal.description}

                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

