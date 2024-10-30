import { useState } from "react";

const StateForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [err, setErr] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setErr('Pass 6 er kom ache')
        }
        else {
            setErr('')
            console.log(name, email, password);
        }
    }

    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }

    return (
        <div>
            <h5>{err}</h5>
            <form onSubmit={handleSubmit}>
                Name: <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="" /><br />
                Email: <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" /><br />
                Pass: <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateForm;