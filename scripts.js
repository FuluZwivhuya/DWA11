
console.log('fulu');

const tallyState = {
    count: 0,
  };

  //actions
  const add = () => {
    tallyState.count += 1;
  };
  
  const minus = () => {
    tallyState.count -= 1;
  };

add(); 
minus();

console.log('currentState:', tallyState.count);

//subcribtions

const subscribers = [];

const subscribe = (callback) => {
    subscribers.push(callback);
  };

  const notifySubscribers = () => {
    subscribers.forEach((callback) => callback(tallyState.count));
  };

   const ADD= () => {
    tallyState.count += 1;
    notifySubscribers();
  };


  const MINUS= () => {
    tallyState.count -= 1;
    notifySubscribers();
  }; 

  subscribe((count) => {
    console.log('New State:', count);
  });
 
ADD();
ADD()
MINUS()

  


