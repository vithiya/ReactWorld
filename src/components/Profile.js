import React from 'react';

//function Profile(){
//    return <h1>Hello Bharathi !</h1>
//}

//Using ES6 Arrow Function
//use named export
export const Profile = props =>  {
    console.log(props);
return (
    <div>
        <h1>Hello {props.name} !</h1>
        { props.children }
    </div>

)
}

//export default Profile;