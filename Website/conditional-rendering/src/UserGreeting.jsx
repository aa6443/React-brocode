import PropTypes from "prop-types";
function UserGreeting(props){

    /* 1.Using if else statements 
    if(props.isLoggedIn){
        return <h2>Welcome {props.userName}</h2>
    }
    else{
        return <h2>Please login to continue </h2>
    }
    */
    /*2.Using ternary operator */
    return(props.isLoggedIn   ? <h2 className="welcome-message"> Welcome { props.userName}</h2> : 
                                <h2 className="login-prompt">Please Log in to continue </h2>);
}
UserGreeting.propTypes ={
    isLoggedIn : PropTypes.bool,
    userName : PropTypes.string,

}
UserGreeting.defaultProps = {
    isLoggedIn : false,
    userName: "Guest",
}
export default UserGreeting