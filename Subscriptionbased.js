   // expose the stream generator as a module method
   module.exports = function(Bacon, stream, action, actionOnValue)  {
    
    stream
    .doAction(action)
    .log('Value:')
    .onValue(actionOnValue);
return stream;
  };