 // expose the stream generator as a module method
module.exports = Bacon =>Bacon.sequentially (10,[1,2,3]);    
    