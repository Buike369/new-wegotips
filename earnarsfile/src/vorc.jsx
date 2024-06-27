import React, { useState } from "react";
import "./style/vorc.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import Footer from "./footer";


const Vic = () => {
  

  const [show1, setShow1] = useState("ultimate")




  const odds = [
    { id: 1, selection: "selection1", stake: "stake" },
    { id: 2, selection: "selection2", stake: "stake" },
    { id: 3, selection: "selection3", stake: "stake" },
    { id: 4, selection: "selection4", stake: "stake" },
    { id: 5, selection: "selection5", stake: "stake" },
    { id: 6, selection: "selection6", stake: "stake" },
    { id: 7, selection: "selection7", stake: "stake" },
    { id: 8, selection: "selection8", stake: "stake" },
    { id: 9, selection: "selection9", stake: "stake" },
    { id: 10, selection: "selection10", stake: "stake" },
    { id: 11, selection: "selection11", stake: "stake" },
    { id: 12, selection: "selection12", stake: "stake" },
    { id: 13, selection: "selection13", stake: "stake" },
    { id: 14, selection: "selection14", stake: "stake" },
  ];





  const odd1 = [
    { id: 1, selection: "selection1", stake: "stake" },
    { id: 2, selection: "selection2", stake: "stake" },


  ];



  const  onChangeHandler =(e)=>{

    const val = e.target.value;
   

    switch(val) {
      case "ultimate":
        // code block
        setShow1("ultimate")

        break;
      case "2chanceBet":
        // code block
        setShow1()
        break;
      case "Arbitrage":
          // code block
          setShow1("backbet")
        break;
      case "bonusBet":
            // code block
            setShow1("bonusBet")
        break;
      case "dutchingBet":
              // code block
              setShow1("dutching")
         break;
     case "hedgingBet":
            // code block
            setShow1("hedging")
        break;
     case "stakingBet":
           // code block
           setShow1("staking")
       break;
    case "layBet":
         // code block
         setShow1("lay")
      break;
    case "oddCalculator":
          // code block
          setShow1("odd")
       break;
      default:
        // code block
        setShow1("ultimate")
    }
    

  }
  return (
    <div className="Cov</div>er_BackgroundColor">
      <div style={{padding:"0 10px"}}>
  
      {/* mobile view */}
      
      <div className="Du">
        <ul className="Bet_CC">
          <li className="VirtualP" style={{backgroundColor:show1 === "ultimate" ? "#3d3491" :""}} onClick={()=>setShow1( "ultimate")}>Ultimate Virtual Bet</li>
         
          <li className="VirtualP" style={{backgroundColor:show1 === "backbet" ? "#3d3491" :""}} onClick={()=>setShow1("backbet")} >Arbitrage Bet </li>
          <li className="VirtualP" style={{backgroundColor:show1 === "bonusBet" ? "#3d3491" :""}}  onClick={()=>setShow1("bonusBet")}>Bonus Bet</li>
          <li className="VirtualP" style={{backgroundColor:show1 === "dutching" ? "#3d3491" :""}} onClick={()=>setShow1("dutching")} >Dutching Bet</li>
          <li className="VirtualP" style={{backgroundColor:show1 === "hedging" ? "#3d3491" :""}} onClick={()=>setShow1("hedging")} >Hedging Bet</li>
          <li className="VirtualP" style={{backgroundColor:show1 === "staking" ? "#3d3491" :""}} onClick={()=>setShow1("staking")} >Staking Bet</li>
          <li className="VirtualP"  style={{backgroundColor:show1 === "lay" ? "#3d3491" :""}}  onClick={()=>setShow1("lay")}>Lay Bet</li>
          <li className="VirtualP" style={{backgroundColor:show1 === "odd" ? "#3d3491" :""}} onClick={()=>setShow1("odd")}>Odd Calculator</li>
        </ul>
      </div>
      <div className="pink">
      <div className="Car">
      <select id="cars" name="cars" className="Car2" onChange={onChangeHandler} >
           <option value="ultimate" id={1}>Ultimate Virtual Bet</option>
           {/* <option value="2chanceBet" id={2}>2Chance Bet</option> */}
           <option value="Arbitrage" id={2}>Arbitrage Bet</option>
           <option value="bonusBet" id={3}>Bonus Bet</option>
           <option value="dutchingBet" id={4}>Dutching Bet</option>
           <option value="hedgingBet" id={5}>Hedging Bet</option>
           <option value="stakingBet" id={6}>Staking Bet</option>
           <option value="layBet" id={7}>lay Bet</option>
           <option value="oddCalculator" id={9}>Odd Calculator</option>
           
  </select>
      </div>
      </div>
 
      <div className="New_Month">

     {show1 === "ultimate"? 
        <div className="Enter_Expected_Profit">
          <p className="ExposeMass">Enter Expected profit</p>
          <div className="ExposeMass1">
            <div className="infu1 ">
            <span className="Editj">Recommended:</span>
            </div>
            <div className="nfu2">
              <input type="text" placeholder="₦50" className="infu42" />
            </div>
            <div className="infu1">
              <span className="Editj">Edit</span>
            </div>
          </div>
          <div className="Team_Odd_Tip">
            <div className="Win_Loss">
              <p className="Win_Loss1">Team Odd</p>
              <div className="school24">
                <input type="text" placeholder="Enter odd" className="infu3" />
              </div>
              <div className="Team_Odd_Tip">
                <div className="school245">
                  <button className="Win_ButTON addWin">WIN</button>
                </div>
                <div className="school245">
                  <button className="Win_ButTON addWin12">LOSS</button>
                </div>
              </div>
              <div className="Total56">
                <div className="Wefe">Total : 15</div>
                <div className="Wefe">Total : 45</div>
              </div>
            </div>
            <div className="Win_Loss">
              <p className="Win_Loss1">Beting Amount</p>
              <div className="school24">
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="infu3"
                />
              </div>
              <p className="InvestTotal">Total Investment</p>
              <p className="moneyInBank">₦50000</p>
            </div>
          </div>

          <div className="Streak_Loss">Lossing Streak To Capital Ratio</div>
          <div className="NumLosDiv addingOne">
            <div className="DivNumbering ">Number of losses</div>
            <div className="DivNumbering">Minimum Capital</div>
          </div>
          <div className="NumLosDiv">
            <div className="DivNumbering">0 - 5</div>
            <div className="DivNumbering">₦500</div>
          </div>
          <div className="NumLosDiv addingOne">
            <div className="DivNumbering">5 - 10</div>
            <div className="DivNumbering">₦4,500</div>
          </div>
          <div className="NumLosDiv">
            <div className="DivNumbering">10 - 15</div>
            <div className="DivNumbering">₦19,500</div>
          </div>
          <div className="NumLosDiv addingOne">
            <div className="DivNumbering">15 - 20</div>
            <div className="DivNumbering">₦49,500</div>
          </div>
          <div className="NumLosDiv">
            <div className="DivNumbering">20 - 25</div>
            <div className="DivNumbering">₦99,750</div>
          </div>
          <div className="NumLosDiv addingOne">
            <div className="DivNumbering">25 - 30</div>
            <div className="DivNumbering">₦190,750</div>
          </div>
          <div className="NumLosDiv">
            <div className="DivNumbering">30 - 35</div>
            <div className="DivNumbering">₦390,750</div>
          </div>
          <div className="NumLosDiv addingOne">
            <div className="DivNumbering">35 - 40</div>
            <div className="DivNumbering">₦990,750</div>
          </div>
        </div>
        :""}
        
        {show1 === "backbet" ? (
          <div className="backBet">
            <div className="betBackF">
              <div className="betBackFIN">
                <p className="marTop bottomMargin boldFont">Back Bet</p>
                <p className="bottomMargin1">Bet:</p>
                <div>
                  <form>
                    <input
                      type="number"
                      placeholder="5"
                      className="cityTouch"
                    />
                    <div className="bottomMargin">
                      {" "}
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Calculate</label>
                    </div>
                    <p className="bottomMargin1">Odds:(the higher)</p>
                    <input
                      type="number"
                      placeholder="5.6"
                      className="cityTouch"
                    />
                  </form>
                </div>
              </div>
              <div className="betBackFIN">
                <p className="marTop bottomMargin boldFont">Lay Bet</p>
                <p className="bottomMargin1">Bet:</p>
                <div>
                  <form>
                    <input
                      type="number"
                      placeholder="78"
                      className="cityTouch"
                    />
                    <div className="bottomMargin">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Calculate</label>
                    </div>
                    <p className="bottomMargin1">Odds:(the higher)</p>
                    <input
                      type="number"
                      placeholder="16"
                      className="cityTouch"
                    />
                    <p className="bottomMargin1">Commission: %</p>
                    <input
                      type="number"
                      placeholder="0"
                      className="cityTouch"
                    />
                    <p>Total bet:22.5</p>
                  </form>
                </div>
              </div>
            </div>

            <div className="betTotalDiv">
              <div className="ratesAt">
                <p className="boldFont">Profit Breakdown</p>
                <p>
                  <span className="bolding">Rate :</span>155.45
                </p>
                <p>
                  {" "}
                  <span className="bolding">Total bet :</span>22.45e
                </p>
              </div>
              <div>
                <table>
                  <tr>
                    <th></th>
                    <th>Back</th>
                    <th>Lay</th>
                    <th></th>
                    <th>Total</th>
                    <th>Profits</th>
                  </tr>
                  <tr>
                    <td>If Back Bet wins</td>
                    <td>+28$</td>
                    <td>-17.5$</td>
                    <td>=</td>
                    <td>+10.5$</td>
                    <td>+5.5$</td>
                  </tr>
                  <tr>
                    <td>If Lay Bet wins</td>
                    <td>+28$</td>
                    <td>-17.5$</td>
                    <td>=</td>
                    <td>+10.5$</td>
                    <td>+5.5$</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}


    {show1 === "odd"? 
      <div>
        <div className="backBet diviveNax">
          <div className="DeciFac">Decimal to Fraction</div>
          <div className="FracDeci">
            <form>
              <input
                type="number"
                placeholder="odd eg 2.5* "
                className="deciNum_Input"
              />

              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="backBet ">
          <div className="DeciFac">Fraction to Decimal</div>
          <div className="FracDeci">
            <form>
              <div className="ChangeFracDi">
                <div className="toty">
                  <input type="number" placeholder=" " className="AMQ" />
                </div>
                <div className="divide">/</div>
                <div className="toty">
                  {" "}
                  <input type="number" placeholder="" className="AMQ" />
                </div>
              </div>

              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
    :""}

     {show1 === "bonusBet"? 
        <div className="backBet ">
          <div className="DeciFac">Bonus Bet</div>
          <div className="FracDeci">
            <form>
              <div className="ChangeFracDi">
                <div className="outYre2">
                  <label className="thisR" id="">
                    Bonus Bet
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>
                <div className="outYre2">
                  <label className="thisR" id="">
                    Outcome 1
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>

                <div className="outYre2">
                  <label className="thisR" id="">
                    Odds
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>
              </div>
              <div className="ChangeFracDi">
                <div className="outYre2"></div>
                <div className="outYre2">
                  <label className="thisR" id="">
                    Outcome 2
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>

                <div className="outYre2">
                  <label className="thisR" id="">
                    Odds
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>
              </div>

              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
       :""}


     { show1 === "dutching"? 
        <div className="backBet ">
          <div className="DeciFac">Dutching</div>
          <div className="FracDeci">
            <form>
              {odds.map((rate) => (
                <div className="foorms" key={rate.id}>
                  <div className="Stake_Dive">
                    <input
                      type="number"
                      placeholder={rate.selection}
                      className="foorms_input"
                    />
                  </div>
                  <div className="Stake_Dive">
                    <div className="Div_Stake">{rate.stake}</div>
                  </div>
                </div>
              ))}
              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        :""}


      {show1 === "hedging"? 
        <div className="backBet ">
          <div className="DeciFac">Hedging</div>
          <div className="FracDeci">
            <form>
              {odd1.map((rate) => (
                <div className="foorms" key={rate.id}>
                  <div className="Stake_Dive">
                    <label className="thisR">Back Stake</label>
                    <input
                      type="number"
                      placeholder={rate.selection}
                      className="foorms_input"
                    />
                  </div>
                  <div className="Stake_Dive">
                    <label  className="thisR">Back Price</label>
                    <input
                      type="number"
                      placeholder={rate.selection}
                      className="foorms_input"
                    />
                  </div>
                </div>
              ))}
              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        :""}


      {show1 === "lay"? 
        <div className="backBet ">
          <div className="DeciFac">Lay</div>
          <div className="FracDeci">
            <form>
              <div className="ChangeFracDi">
                <div className="outYre2">
                  <label className="thisR" id="">
                    {" "}
                    Bet Stake*
                  </label>
                  <input type="number" placeholder="" className="AMQ lin" />
                </div>
                <div className="outYre2">
                  <label className="thisR" id="">
                    Back odds*
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin " />
                </div>

                <div className="outYre2">
                  <label className="thisR" id="">
                    Back Commission*
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>
              </div>
              <div className="ChangeFracDi">
                <div className="outYre2"></div>
                <div className="outYre2">
                  <label className="thisR" id="">
                    Lay Odds*
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>

                <div className="outYre2">
                  <label className="thisR" id="">
                    Lay Commission*
                  </label>
                  <input type="number" placeholder=" " className="AMQ lin" />
                </div>
              </div>

              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        :""}
       {show1 === "staking"?
        <div className="backBet ">
          <div className="DeciFac">Staking</div>
          <div className="FracDeci">
            <form>
              <div className="foorms">
                <div className="Stake_Dive">
                  <label className="thisR">Bank Balance</label>
                  <input
                    type="number"
                    placeholder=""
                    className="foorms_input"
                  />
                </div>
                <div className="Stake_Dive">
                  <label className="thisR">Aggressive</label>
                  <input
                    type="number"
                    placeholder=""
                    className="foorms_input"
                  />
                </div>
              </div>

              <div className="ButtonShift">
                <div className="Deci_DivButton">
                  <button className="calB">Calculator</button>
                  <button className="calB">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        :""}
      </div>
      <div></div>
      </div>

      <div className="bkFR">
       <div style={{padding:"0 10px"}}>
                <div className="MessageDivCov">
               <div className="Package_Up">
                   <h1 className="alap">Don't miss out on Fantastic News</h1>
                   <p className="Each_Time_your">
                       Subscribe to our newsletter and be the first to receive news.
                   </p>
                   <form>
                    <div className="newsInput">
                        <input type="email" placeholder="Enter Your Email"  className="newsBro"/>
                        <FontAwesomeIcon icon={faPaperPlane} className="EmailSentIcon" />
                    </div>
                   </form>
                   <img src="/img/news.svg" alt=""  className="messageImg"/>
               </div>
               <img src="/img/undrawWorld1.svg" alt="" className="papag" />
                <img src="/img/undrawWorld1.svg" alt="" className="papag1" />
               
               </div>
               </div>
               </div>

      <Footer />
    </div>
  );
};

export default Vic;
