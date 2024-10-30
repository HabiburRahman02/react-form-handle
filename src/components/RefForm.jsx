import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    useEffect(() => {
        passwordRef.current.focus();
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Name: <input ref={nameRef} type="text" name="name" id="" /><br />
                Email: <input defaultValue={'mail@sc.com'} ref={emailRef} type="email" name="email" id="" required /><br />
                Pass: <input ref={passwordRef} type="password" name="password" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;