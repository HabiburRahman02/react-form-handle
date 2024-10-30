import { useState } from "react";

const SimpleForm = () => {
    const [err, setErr] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);


        if (e.target.password.value.length < 6) {
            setErr('Pass more then 6 char')
        }
        else {
            setErr('')
        }

    }

    return (
        <div>
            <h4>{err}</h4>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" id="" /><br />
                Email: <input type="email" name="email" id="" /><br />
                Pass: <input type="password" name="password" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;