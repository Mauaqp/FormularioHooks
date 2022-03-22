import React from  'react';
    
const UserForms = props => {
    // Diccionario de App.js desestructurado
    const {inputs, setInputs} = props;
    // Function onChange capturará el evento desde el cliente y lo pondra en setInputs
    const onChange = e => {
        setInputs({
            //Spread operator trae todo el state y evita que se sobreescriba y borren los demás
            ...inputs,
            [e.target.name] : e.target.value,

        });
    };

    return(
        <form>
            <div>
                <label htmlFor="firstName">First Name: </label> 
                <input type="text" name="firstName" onChange={onChange} />
                <p>
                    {inputs.firstName.length > 0 && inputs.firstName.length < 2
                    ? "First name must be at least 2 characters."
                    : ""}
                </p>
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label> 
                <input type="text" name ="lastName" onChange={onChange} />
            </div>
            <div>
                <label htmlFor="email">Email Address: </label> 
                <input type="text" name="email" onChange={onChange} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password"  onChange={onChange} />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={onChange} />
                <p>
                    {inputs.confirmPassword.length > 0 &&
                    inputs.confirmPassword.length < 8
                    ? "Password must be at least 8 characters."
                    : ""}
                    {inputs.password !== inputs.confirmPassword ? "Passwords do not match." : ""}
                </p>
            </div>
        </form>
    );
};
    
export default UserForms;