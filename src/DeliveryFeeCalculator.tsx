import React, { useState } from 'react';
import './DeliveryFeeCalculator.css';

interface DeliveryFeeCalculatorProps {}
// State variables to store the cart value, delivery distance, number of items, order time, and delivery fee.
const DeliveryFeeCalculator: React.FC<DeliveryFeeCalculatorProps> = () => {
  const [cartValue, setCartValue] = useState<number>(0);
  const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [orderTime, setOrderTime] = useState<Date>(new Date());
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  // This function updates the state `cartValue` when the cart value input value changes
  const handleCartValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCartValue(Number(event.target.value));
  };

  // This function updates the state `deliveryDistance` when the delivery distance input value changes
  const handleDeliveryDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryDistance(Number(event.target.value));
  };

  // This function updates the state `numberOfItems` when the number of items input value changes
  const handleNumberOfItemsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfItems(Number(event.target.value));
  };

  // This function updates the state `orderTime` when the order time input value changes
  const handleOrderTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderTime(new Date(event.target.value));
  };

  // This function is called when the form is submitted. It calculates the delivery fee based on the input values and updates the state `deliveryFee`
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!deliveryDistance || !cartValue || !numberOfItems || !orderTime) {
        setDeliveryFee(0);
        return;
    }
    let baseFee = 2;
    // Increase the base fee if the delivery distance is more than 1000 meters
    if (deliveryDistance > 1000) {
      baseFee += Math.ceil((deliveryDistance - 1000) / 500) * 1;
    }
    // Increase the base fee if the cart value is less than 10
    if (cartValue < 10) {
      baseFee += 10 - cartValue;
    }
    // Increase the base fee if the number of items is 5 or more
    if (numberOfItems >= 5) {
      const itemSurcharge = (numberOfItems - 4) * 0.5;
      baseFee += itemSurcharge;
      // Increase the base fee by 1.2 if the number of items is more than 12
      if (numberOfItems > 12) {
        baseFee += 1.2;
      }
    }
    // Increase the base fee by 20% if the order is placed between 3 pm and 7 pm on Friday
    if (orderTime.getUTCHours() >= 15 && orderTime.getUTCHours() < 19 && orderTime.getUTCDay() === 5) {
        baseFee *= 1.2;
      }
    // Set the base fee to 0 if the cart value is 100 or more
    if (cartValue >= 100) {
      baseFee = 0;
    }
    // Update the delivery fee to the minimum of baseFee and 15
    setDeliveryFee(Math.min(baseFee, 15));
  };


  return (
    <form className='calculateForm' onSubmit={handleSubmit}>
        <h1 className='headerTitle'>Delivery fee Calculator</h1>
      <div>
        <label htmlFor="cartValue">Cart value  </label>
        <input
          type="float"
          id="cartValue"
          placeholder='Total value in €'
          onChange={handleCartValueChange}
        />
        <label> </label>
      </div>
      <div>
        <label htmlFor="deliveryDistance">Delivery distance </label>
        <input
          type="number"
          id="deliveryDistance"
          placeholder='Distance in meters'
          onChange={handleDeliveryDistanceChange}
        />
      </div>
      <div>
        <label htmlFor="numberOfItems">Amount of items</label>
        <input
          type="number"
          id="numberOfItems"
          placeholder='Number of itmes'
          onChange={handleNumberOfItemsChange}
        />
      </div>
      <div>
        <label htmlFor="orderTime">Order time</label>
        <input type="datetime-local" id="orderTime" onChange={handleOrderTimeChange} />
      </div>
      <div className='buttonDiv'>
        <button className='calculateButton' type="submit">Calculate Delivery Price</button>    
      </div>
      <p>{cartValue >= 100 ? 'Free Delivery' : `Delivery fee: €${deliveryFee.toFixed(2)}`}</p>
     </form>
  );
};

export default DeliveryFeeCalculator;