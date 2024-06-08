/*props ->meaning properties 
 these are arguments passed into react components 
 React Props are like function arguments in JavaScript and attributes in HTML.
 <Component key=value />
*/

{/* propTypes -> a mechanism that ensures that the value passed is of correct datatype
  typechecking 
  age: PropTypes.number 
*/ }

{/* defaultProps => default values for props in case they are not passed from the parent component 
`   name : "Guest"
*/}
import Student from "./Student"
function App() {
  return(
    <>                         {/*num in{}*/}
      <Student name="Spongebob" age={34}  isStudent={true} />
      <Student name="Patrick" age={ 21} isStudent={true} />
      <Student name="Squidward" age={ 50} isStudent={true}/>
      <Student name="sandy" age={ 28} isStudent = {false}/>
      <Student />
      <Student name="larry " />
    </>
  );
}

export default App
