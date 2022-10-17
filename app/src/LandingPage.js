
import funZone from'./images/real_Location.jpg';
import jeff from './images/Jeff.jpeg';
import pizza from './images/Krust_pizza.png';

//this just creates the very bad landing page aka HOME
export default function PushingP() {
    return (
        <>
            <div id='' className='container text-center bg-transparent'>
                <div id='center' className='h1 text-dark justify-content-center'>Welcome to the Krusty Krab!</div>
            </div>
            <div className='row justify-content-center fixed-bottom'>
                <div className='col-lg-3 col-sm-4 col-xs-4'>
                    <div className="card border-radius-10" >
                        <img src={pizza} className="card-img-top" alt="location!" width='300' height='300' />
                        <div className="card-img-overlay ">
                            <h5 className="card-title text-light">Comming soon!</h5>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-4 col-xs-4'>
                    <div className="card border-radius-10" >
                        <img src={funZone} className="card-img-top" alt="location!" width='300' height='300' />
                        <div className="card-img-overlay ">
                            <h5 className="card-title">Location</h5>
                            <p className="card-text">Come on down and get KRABBY!</p>
                            <a href="https://www.google.com/maps/place/Awesome+Inc/@38.042148,-84.4946902,17z/data=!3m1!4b1!4m5!3m4!1s0x884244e842d5acf7:0x92c7783d2b2a2d15!8m2!3d38.042148!4d-84.4925015" className="btn btn-secondary">Come See us!</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-4 col-xs-12'>
                    <div className="card border-radius-10" >
                        <img src={jeff} className="card-img-top" alt="location!" width='300' height='300' />
                        <div className="card-img-overlay ">
                            <h5 className="card-title">Jeff</h5>
                            <p className="card-text">He is still with us, in our hearts!</p>
                            <a href="https://www.youtube.com/watch?v=1SiylvmFI_8" className="btn btn-secondary">Jeff</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}