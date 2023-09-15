/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init
    return {
        increment: () => ++init,
        decrement: ()=> --init,
        reset: ()=> {
            init = count;
            return init
        }
    }
    
};
