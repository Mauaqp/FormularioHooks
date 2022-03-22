import Reac from  'react';
const Results = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props.data;
    return (
        <div>
            <h1>Results</h1>
            <p>First Name : <em>{firstName}</em></p>
            <p>Last Name : <em>{lastName}</em></p>
            <p>Email : <em>{email}</em></p>
            <p>Password : <em>{password}</em></p>
            <p>Confirm Password : <em>{confirmPassword}</em></p>
        </div>
    )
}

export default Results;