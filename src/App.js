import logo from './logo.svg';
import homepage from './homepage.css';
import blinkit_final from './blinkit_final.png'
import plus from './plus.png'

function App() {
  return (
    <>
      <>
        <div className="pageBody">  
          <div className="leftSection">
            <img src={blinkit_final} alt="" className="offers"/>
            <div className="leftWrapper">
              <div className="suggestion">
                TOP PICKS FOR YOU
              </div>
              <div className="allSuggestions">

              </div>
            </div>
          </div>
          <div className="rightSection">
            <div className="myCart">
              <div className="cartWrapper">
                <div className="rightHeading">
                  YOUR CART
                </div>
                <div className="add">
                  <img src={plus} alt="" className="plusImg"/>
                  <div className="addItemHeader">ADD ITEM</div>
                </div>
                <div className="cartItems">

                </div>
                <div className="totalBill">
                  <div className="total">
                    TOTAL:
                  </div>
                  <div className="bill">
                    Rs. 40
                  </div>
                </div>
              </div>
            </div>
            <div className="checkOutButton">
              CHECK OUT
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
