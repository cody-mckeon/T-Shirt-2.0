# T-Shirt-2.0
React, Express, MongoDB JS App

8. Build Product Screen
- Install react-router-dom
- User BrowserRouter and Route for Home Screen
- Create HomeScreen.js
- Add Product List code there
- Create ProductScreen.js
- Add New Route from product details to App.js
- Create 3 columns for product image, info, and action

13. Add Redux to Product Screen
- * Fix needed await in product Actions to get the product details

40. Upload Product Image
- nmp install multer
- define upload router
- create uploads folder
- Handle fronted

41. Delete Product in Admin
- Create Delete api in backend
- create delete constants, action, and reducer
- use it in product list screen


14 Handle Add to Cart Event
- Handle Add to Car in ProductScreen.js
- Create CartScreen.js

15 Add to Cart Action
- Create addToCart constants, actions, and reducers
- Add Reducer to store.js
- Use action in CartScreen.js
- Render CartItems.length

16. Build Shopping Cart Screen
 - Create 2 columns for cart Items and cart action
 - cartItems.length === 0 ? Cart is empty




 - show item image, name, qty, and price
 - Proceed to Checkout button
 - Implement remove from cart action

17. Implement Remove from cart
- Create removeFromCart constants, actions, and reducers
- Add reducer to store.js
- Use action in CartScreen.js

24. Create Shipping Screen
- Create CheckoutSteps.js component
- Create shipping fields
- Implement shipping constant, actions, and reducers

25. Create Payment Screen
- Create payment fields.
- Implement shipping constants, actions and reducers.

26. Design Placeorder screen
- design order summary fields
- design order action

27. Create Place Order API
- createOrder api
- create orderModel
- create orderRouter
- create post order Route

28. Implement PlaceOrder Action
- Handle place order button click
- create place order constants, action, and reducer

29. Create Order Screen
- build order api for /api/orders/:id
- create OrderScreen.js
- dispatch order details action in useEffect
- load data with useSelector
- show data like place order screen
- create order details constant, action, and reducer







