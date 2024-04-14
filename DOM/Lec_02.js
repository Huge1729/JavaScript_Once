// must learn about this EventListener
// type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

// Bubbling :-1. Event Bubbling is a concept in the DOM (Document Object Model). 
//            It happens when an element receives an event, and that event bubbles up 
//            (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree
//             until it gets to the root element.

            // 2.  stopPropagation and preventDefault are methods of the event object for stopping default behaviors
            // 3. EventTarget.addEventListener() has an optional third parameter - which takes its argument as a boolean - which controls the phase of the propagation. 
            // The parameter is called useCapture, and passing true will cause the listener to be on the capturing phase. 
            // The default is false, which will apply it to the bubbling phase.


        // Setinterval & setTimeout
        // const sayDate = function(str){
        //     console.log(str, Date.now());
        // }
    
        // const intervalId = setInterval(sayDate, 1000, "hi")
    
        // clearInterval(intervalId)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
        // const sayHitesh = function(){
        //     console.log("Hitesh");
        // }
        // const changeText = function(){
        //     document.querySelector('h1').innerHTML = "best JS series"
        // }
    
        // const changeMe = setTimeout(changeText, 2000)

        // document.querySelector('#stop').addEventListener('click', function(){
        //     clearTimeout(changeMe)
        //     console.log("STOPPED")
        // })