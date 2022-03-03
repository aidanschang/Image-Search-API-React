# Image-Search-API-with-React

## Overview
This APP allows users to search images through unsplash API intergrated by React.js. Result images were rendered lightly with CSS.

## Implementation

### Value of this.
Using a call back function of a prop may caused error message when the value of this. is not found. Setting the call back function an arrow function is always recommendated to avoid error messages.

### Prop
Since props can only be passed down from a parent to a child and not the other way around, I set a call back function from the parent to the child and have child to call the call back function.

### Iterate a list of objects
Using map function to render a list of objects. I also attached each pictures's key with a unique ID.

### createRef
Created a Ref under constructor to access each picture's height from their DOM elements in order to display the result pictures.

    constructor(props) {
        super(props);

        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

## Summary
