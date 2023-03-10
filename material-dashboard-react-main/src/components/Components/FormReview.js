import React, { useContext } from 'react'
import "./FormReview.css";
import Cardone from './UI/Cardone';
import Input from './UI/Input';
import PercentageSign from './UI/PercentageSign';
import AuthContext from 'stores/AuthContext';
import Button from './UI/Button';


const FormReview = (props) => {
  const cntx = useContext(AuthContext);

  return (
    <div className="review">
      <Button className="review_btn" type="submit">
        Review
      </Button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type='submit' >
        Preview
      </button>
      <div className="extra_feature">
        <label className="currency_l lbl" htmlFor="currency">
          Currency:
        </label>
        <select
          onChange={(e) => {
            cntx.onSetCurrency(e.target.value);
          }}
          value={cntx.changeCurrency}
          className="crncy_lable"
          name="currency"
          id="crc"
        >


          <option value="&#8377;">Rupee (&#8377;)</option>
          <option value="$">Dollar ($)</option>
          <option value="&#163;">Pound (&#163;)</option>
          <option value="&#x20AC;">Euro (&#x20AC;)</option>
          {/* <option value="&#x20A9;">Won (&#x20A9;)</option>
          <option value="&#x00A5;">Renminbi (&#x00A5;)</option>
          <option value="₿">BTC (₿)</option> */}
        </select>
        <label className="tax_l lbl">Tax rate:</label>
        <Cardone>
          <PercentageSign />
          <Input
            className="tax_disc"
            onChange={(e) => {
              cntx.onSetTax(e.target.value);
            }}
            type="number"
            min="0.00"
            value={cntx.taxData}
            step="0.01"
          />
        </Cardone>
        <label className="discount_l lbl">Discount rate:</label>
        <Cardone className="taxes_disc">
          <PercentageSign />
          <Input
            className="tax_disc"
            onChange={(e) => {
              cntx.onSetDiscount(e.target.value);
            }}
            type="number"
            min="0.00"
            value={cntx.discountData}
            step="0.01"
          />
        </Cardone>
      </div>
    </div>
  )
}

export default FormReview;