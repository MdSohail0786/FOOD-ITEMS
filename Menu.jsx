import "./menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu-items">
        <hr />
        <div className="menuheading">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          </h5>
          <h1>FOOD MENU </h1>
        </div>
        <hr />
        <div className="boxes">
          <div className="menubox1">
            <div class="row">
              <img src="chicken.jpeg" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col">
              <div class="card-body">
                <h5>CHICKEN FRIES</h5>
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer .
                </p>
                <p>
                  <small class="text-body-secondary">Prise$.Rs.100.</small>
                </p>

                <button>ADD To Cart</button>
              </div>
            </div>
          </div>
          <div className="menubox2">
            {" "}
            <div class="row">
              <img src="burgur.png" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col">
              <div class="card-body">
                <h5>BURGUR</h5>
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-body-secondary">Prise$.Rs.80.</small>
                </p>

                <button>ADD To Cart</button>
              </div>
            </div>
          </div>
          <div className="menubox3">
            <div class="row">
              <img src="pizza.jpg" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col">
              <div class="card-body">
                <h5>Pizza</h5>
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-body-secondary">Prise$.Rs.70.</small>
                </p>

                <button>ADD To Cart</button>
              </div>
            </div>
          </div>
          <div className="menubox4">
            {" "}
            <div class="row">
              <img src="recipe.jpg" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col">
              <div class="card-body">
                <h5>CHOWMINE</h5>
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-body-secondary">Prise$.Rs.100.</small>
                </p>

                <button>ADD To Cart</button>
              </div>
            </div>
          </div>
          <div className="menubox5">
            {" "}
            <div class="row">
              <img src="special.jpg" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col">
              <div class="card-body">
                <h5>INDIAN THALI</h5>
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-body-secondary">Prise$.Rs.120.</small>
                </p>

                <button>ADD To Cart</button>
              </div>
            </div>
          </div>
          <div className="menubox6">
            {" "}
            <div class="row">
              <img src="india.jpeg" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col">
              <div class="card-body">
                <h5>CURD DISH</h5>
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-body-secondary">Prise$.Rs.100.</small>
                </p>

                <button>ADD To Cart</button>
              </div>
            </div>
          </div>
          <div className="menubox7">
            {" "}
            <div class="row">
              <img src="images.jpg" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col">
              <div class="card-body">
                <h5>ALL IN ONE </h5>
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-body-secondary">Prise$.Rs.200.</small>
                </p>

                <button>ADD To Cart</button>
              </div>
            </div>
          </div>
          <div className="menubox8">
            {" "}
            <div class="row">
              <img src="download.jpg" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col">
              <div class="card-body">
                <h5>CAKE</h5>
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-body-secondary">Prise$.Rs.100.</small>
                </p>

                <button>ADD To Cart</button>
              </div>
            </div>
          </div>
          <div className="menubox9">
            {" "}
            <div class="row">
              <img
                src="frenchfrice.webp"
                class="img-fluid rounded-start"
                alt=""
              />
            </div>
            <div class="col">
              <div class="card-body">
                <h5>FRENCH FRIES</h5>
                <p>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <small class="text-body-secondary">Prise$.Rs.60.</small>
                </p>

                <button>ADD To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
