See to use react redux we have to do these things

we need reducer,action and store

Through action we define what are the functions we want to do
Through reducer we define how to perform these actions
Through store we store the value of our initial state in a redux store

Now see we created action 
      we needed 2 action increment and decrement so we created these
      2 actions 
 
Now we need to specify what these actions do for which we created action
reducer now reducer takes 2 arguments state and than action
state tells what is the state currently of the page.We define a initial state as well

Now we create a root reducer.Since we can have multiple reducers so we nned to combine them all
in one reducer for which we pass a all reducers into a root reducer

now we create a store in store js and pass the values of the root reducer into things

Now we want a component to have this value of the store .Since we wanteveryone
to access the store value so we pass it to topmost parent ie App.jsx

Now to pass this  value we need to wrap app.jsx into Providere and to Provider pass this value as a prop
Since app.jsx is called in index.js do we go there and wrap it

Now we want to use these initial state in the app .jsx
so we go to app.jsx and use 2 functions from react-redux
1. useSelector it is used to get initial state from a reducer
So in its argument we pass a fat arrow function which takes a argument which can be anything and using that argument we called
the reducer.When we call the reducer we get the inital State of the reducer

2. we use useDispatch to call the action
we called the action in increment and decrement