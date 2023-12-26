import React from 'react';
import '../styling/style.css'
import { Link } from 'react-router-dom';
function Bestseller() {
  return (
    <>
      <main>
        <section className="sec2">
          <h1 style={{ fontSize: '2.5rem' }}>Best <span>Sellers</span></h1>

          <div className="wrap">
            <div className="scroll-image">
              <Link to="/"><img src="images/wireless.png" alt="bt" />
              </Link>
              <div className="description">
                <h2>Airdopes 100</h2>
                <p>₹899</p>
                <button type="button">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="scroll-image">
              <Link to="/"><img src="images/speaker2.png" alt="bt" />
              </Link>
              <div className="description">
                <h2>BRO Bass </h2>
                <p>₹1999</p>
                <button type="button">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="scroll-image">
              <Link to="/"><img src="images/wired1.png" alt="bt" />
              </Link>
              <div className="description">
                <h2>Airpods</h2>
                <p>₹1299</p>
                <button type="button">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="scroll-image">
              <Link to=""><img src="images/speaker1.png" alt="bt" />
              </Link>
              <div className="description">
                <h2>Speakers</h2>
                <p>₹1499</p>
                <button type="button">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="scroll-image">
              <Link to="">
                <img src="images/wired2.png" alt="bt" />
              </Link>
              <div className="description">
                <h2> Bass buzz</h2>
                <p>₹1799</p>
                <button type="button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="box-container">
            <div className="box" id="infobox">
              <img src="" alt="" />
              <h3>WHY US???</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, doloribus aliquid. Earum
                iusto, veniam aperiam aliquid dolor labore illum, consequuntur cumque beatae ad
                necessitatibus expedita quae quis explicabo obcaecati consectetur?</p>
            </div>

            <div className="box">
              <img src="images/logo1.png" alt="" />
              <h3>Features</h3>
              <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis impedit consectetur beatae
                velit nemo repellat, voluptatum dolorem veniam voluptate deleniti ducimus, sit harum laborum
                ea sunt tenetur nulla, quisquam eum.</p>
            </div>

            <div className="box">
              <img src="images/logo2.png" alt="" />
              <h3>Features</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quasi, perferendis ullam
                aperiam fugiat impedit alias, hic veniam, cumque non recusandae ipsa incidunt excepturi
                repudiandae necessitatibus? Odit laborum ratione assumenda.</p>
            </div>

            <div className="box">
              <img src="images/logo3.png" alt="" />
              <h3>Features</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo saepe quos
                voluptatem consequatur doloribus illum. Error vitae recusandae harum reiciendis nam id,
                voluptatibus eaque aliquid odio consectetur sit delectus.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Bestseller;

