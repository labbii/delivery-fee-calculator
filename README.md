# Delivery Fee Calculator 

The Delivery Fee Calculator is a web-based tool designed to help users calculate the delivery fee for an online order. The application is built using React and Typescript and implements various conditions and calculations to determine the final delivery fee.

## Features:

 Input Fields: 
    The application provides four input fields for users to enter the required data for the calculation:
        a. Cart Value: Total value of the items in the order
        b. Delivery Distance: Distance in meters between the delivery location and the store
        c. Amount of items: Total number of items in the order
        d. Order Time: The time the order was placed

 Calculations: 
    The delivery fee is calculated based on the inputs provided by the user in the above fields. The calculation takes into consideration various conditions such as:
        a. Delivery Distance: If the delivery distance is more than 1000 meters, the delivery fee is    increased by €1 for every 500 meters.
        b. Cart Value: If the cart value is less than €10, the delivery fee is increased by the difference.
        c. Amount of items: If the number of items is 5 or more, the delivery fee is increased by €0.5 for every item over 4. If the number of items is more than 12, an additional €1.2 is added to the delivery fee.
        d. Order Time: If the order is placed between 15:00 and 18:59 on Friday, the delivery fee is increased by 20%.
        e. Maximum Delivery Fee: The delivery fee is capped at €15.

 Result Display: 
    The application displays the calculated delivery fee after the user submits the form.

## Conclusion:

The Delivery Fee Calculator provides an easy-to-use and efficient solution for calculating delivery fees for online orders. The application considers various conditions and calculations to determine the final delivery fee, making it a reliable tool.

