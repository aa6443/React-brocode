// props is going to be javascript object 

import propTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
            {/* boolean is not directly displayed so we use ternary operator*/}
            <p>Is student: {props.isStudent ? "Yes" : "No" } </p> 
        </div>
    );
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}
Student.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent : false,
}
export default Student