import "./ItemHead.css";
const ItemHead = () => {
  return (
    <div className="item_head">
      <span className="itm_h">Sr. No</span>
      <span className="itm_h">Description</span>
      <span className="qty_h">Unit</span>
      <span className="prc_h">Price/Rate</span>
      <span className="amnt_h">Amount</span>
      <span className="act_h">ACT</span>
    </div>
  );
};
export default ItemHead;
