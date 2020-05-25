import React from 'react';

export default React.memo((props)=>{
    console.log(" React Memo - - ",props.data)
    return (<div>Render :  {props.data}</div>)
})




// const MyComponent = React.memo(function MyComponent(props) {
//     /* render using props */
//  });