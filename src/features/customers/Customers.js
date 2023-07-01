import { useSelector, useDispatch } from "react-redux";
import { addCustomer } from "./customersSlice";

export function Customers() {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();
  console.log(customers);

  return (
    <div>
      <button onClick={() => dispatch(addCustomer(prompt()))}>
        Add customer
      </button>

      {customers?.length > 0 ? (
        <div>
          {customers.map((customer, index) => (
            <p key={index}>{customer}</p>
          ))}
        </div>
      ) : (
        <div>No customers</div>
      )}
    </div>
  );
}
