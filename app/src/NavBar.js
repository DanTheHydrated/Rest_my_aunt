import Bootans from './Bootan';
import goose from './images/my_project.png';

function handleclick(text) {
    setPage(text);
}

const mealOptions = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Side",
    "Appetizer",
];

export default function NavBar() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={goose} height="60" width="60" />
                        Krusty Krab!
                    </a>
                    <a className="navbar-brand"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <div className="nav-item text-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li> <a className="nav-link active" aria-current="page" text="Home" handleClick={handleclick}>Home</a> </li>
                                {mealOptions.map((mealOption) => (
                                    <li> <a className="nav-link active" aria-current="page"><Bootans text={mealOption} handleClick={handleclick} /></a></li>
                                ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}








                                {/* <a className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Menu!</a> */}