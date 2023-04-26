import React from "react";
import "../Auth/Auth.css"

function Auth(){
    return(
        <div className="">
                <form>
                    <div>
                        <label for="firstName">First name:</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name"/>
                    </div>
                    <div>
                        <label for="lastName">Last name:</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name"/>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"/>
                    </div>
                    <div>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password"/>
                    </div>
                    <div>
                        <label for="confirmPassword">Confirm password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password"/>
                    </div>
                    <button type="submit">Submit</button>
                 </form>


        </div>
    )
}
export default Auth