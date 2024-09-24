1) Use Sate - 
-The Use Sate allows us to track state in function component.
                            OR
-Use state is a rcat hook which creates an state variable which help us to track state in components and updates user  interface when state change.

2) Use Effect- 
-Use Effect allows to you perform side effects component.
                            OR
-The Use effect hook allows you to perform side effects in your components.

-use Effect run after Every change .

Where to use -
1. Fethin Dat from API.
2.Directly Updating the Dom.
3.Timer Like SetTimeOut , SetInterval.


Syntax-
 useEffect(()=>{},[your Dependancy])

 3) Use Ref - 
 -Use Ref use to Access Tthe DOM element Directly.
                            OR

- That allows us to create mutable variables which will not rerender the component.

-It is also used for Accessing DOM Element.

4) Use MEmo - 
-Use MEmo Run only one of Dependancies Update.
                        OR
-The UseMemo Return Memoized value (like catching a value so that it does't need to be recalculated).

NOTE-
use Memo & Callback are same but 
-use memo return memoized value .
-use Callback returns memoized Function.

5) CallBack -
-CallBack only runs when one of its dependancies update .
                        OR
-It is let you cache a function defination between Rerender.


-It means when we use cal back it does't create multiple instance of some function when rerender happends.

6) use Contaxt -
-use Contaxt is way to  manage state Golobally.
                        OR

-That allows you acess data from any component without explicity passing it down through props at every level.

Use-
it is used for to manage global data in React Application. 

7) Use Reducer -
- Use Reducer allows for custom state logic .
                            OR
-It is similler to use state but insted of providing  state and setter function it provide state and Dispatch function.

It accept Two Argument 
-Reduser Function.
-Initial State  & returns current state Dispatch Method.

Use
-You find Youerself track on multiple pices of state that rely on complex logic.

8) Use Layout- 
-Use Layout works similarly use effect 
but it is called before user interface gets mounted.


-Use effect after printing DOM Element.
-Use Layout gets called before printing Dom Element.

9) Custom Hook-
    It Allows us to create our own hook.