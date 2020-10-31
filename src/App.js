import logo from './logo.svg';
import './App.css';

function App() {

    const tab = (tab, color) => {
        window.openTab(tab, color)
    }

    const category = ['Faishon', 'Kids', 'Girls', 'Watches', 'Shirts', 'Laptops', 'Games'];

    const prod = ['ELECTRONICS', 'FASHION', 'HOME', 'BEAUTU & FRAGRANCE ', 'BABY & TOYS', 'GROCERY', 'SPORTS'];

    const listItems = category.map((item) =>
        <a className="dropdown-item" href="#">{item}</a>
    );


    const prodItems = prod.map((item) =>
        <li className="nav-item active mr-2 ml-2" >
            <a className="nav-link sub" href="#">{item} <span className="sr-only">(current)</span></a>
        </li>
    );

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "yellow" }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown" style={{ flexFlow: "row-reverse" }}>
                    <ul className="navbar-nav ">
                        <li>
                            <div className="search-container">
                                <form action="/action_page.php">
                                    <input type="text" placeholder="What are you looking for?" name="search" className="searchbar" />
                                    <button type="submit" className="searchButton"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle sign" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sign In or Sign Up
                                
    </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Create New Account</a>
                                <a className="dropdown-item" href="#">Guest Login</a>

                            </div>
                        </li>
                        <li className="nav-item active" style={{ borderLeft: "1px solid lightgrey" }}>
                            <a className="nav-link sign" href="#">Cart <span className="sr-only">(current)</span></a>
                        </li>
                        <li>
                            <img className="imgCart" src="/media/cartt.png" />
                        </li>

                    </ul>
                </div>
            </nav>


            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#f8f9fa", flexFlow: "column" }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle sub" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ALL CATEGORIES
    </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {listItems}
                            </div>
                        </li>

                        {prodItems}

                    </ul>

                </div>
            </nav>


            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" style={{ height: "25rem" }}>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/media/img4.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/media/img3.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/media/img2.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon rArrow" style={{ backgroundImage: "url(/media/d.png)" }} aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon lArrow" style={{ backgroundImage: "url(/media/dq.png)" }}></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="container">
                <input id="tab1" name="tab" type="radio" className="tab" checked />
                <input id="tab2" name="tab" type="radio" className="tab" />
                <input id="tab3" name="tab" type="radio" className="tab" />
                <input id="tab4" name="tab" type="radio" className="tab" />
                <input id="tab5" name="tab" type="radio" className="tab" />
                <input id="tab6" name="tab" type="radio" className="tab" />

                <div className="label-container">
                    <label for="tab1" className="label" checked><span className="box">DAY 1</span> <p className="box1">Beauty & fragrance</p></label>

                    <label for="tab2" className="label"><span className="box">DAY 2  </span><p className="box1">Home & kitchen</p></label>
                    <label for="tab3" className="label"><span className="box">DAY 3  </span><p className="box1">Sports & activewear</p></label>
                    <label for="tab4" className="label"><span className="box">DAY 4  </span><p className="box1">Electronics & mobiels</p></label>
                    <label for="tab5" className="label"><span className="box">DAY 5  </span><p className="box1">Baby & toys</p></label>
                    <label for="tab6" className="label" style={{ background: "yellow" }}><span className="box">DAY 6  </span><p className="box1">Fashion</p></label>
                </div>

                <div className="content-container">
                    <p className="content d-flex">
                        <div className="col-md">
                            <img className="img-fluid prodImg rounded-circle" src="/media/1.jpeg" alt="First slide" />
                        </div>
                        <div className="col-md">
                            <img className="img-fluid prodImg rounded-circle" src="/media/2.jpeg" alt="First slide" />
                        </div>
                        <div className="col-md">
                            <img className="img-fluid prodImg rounded-circle" src="/media/3.jpeg" alt="First slide" />
                        </div>
                        <div className="col-md">
                            <img className="img-fluid prodImg rounded-circle" src="/media/4.jpeg" alt="First slide" />
                        </div>
                        <div className="col-md">
                            <img className="img-fluid prodImg rounded-circle" src="/media/5.jpeg" alt="First slide" />
                        </div>
                        <div className="col-md">
                            <img className="img-fluid prodImg rounded-circle" src="/media/6.jpeg" alt="First slide" />
                        </div>
                        <div className="col-md">
                            <img className="img-fluid prodImg rounded-circle" src="/media/7.jpeg" alt="First slide" />
                        </div>
                        <div className="col-md">
                            <img className="img-fluid prodImg rounded-circle" src="/media/8.jpeg" alt="First slide" />
                        </div>
                        <div className="col-md">
                            <img className="img-fluid prodImg rounded-circle" src="/media/9.png" alt="First slide" />
                        </div>
                        <div className="col-md">
                            <img className="img-fluid prodImg rounded-circle" src="/media/10.png" alt="First slide" />
                        </div>

                    </p>
                </div>
            </div>

        </>
    )
}

export default App;
