import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseConnection.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();


    async function handleRegister(event) {
        event.preventDefault();
        await createUserWithEmailAndPassword(auth, email, senha).then(() => {
            navigate('/admin', { replace: true });
        }).catch(() => {
            console.log("Erro ao fazer cadastro");
        });
        if (email !== '' && senha !== '') {

        } else {
            alert("Preencha todos os campos!");
            return;
        }
    }

    return (
        <div className='home-container'>
            <h1>Cadastre-se</h1>
            <span>Vamos criar a sua conta!</span>

            <form className='form' onSubmit={handleRegister}>
                <input type='text' placeholder='Digite seu e-mail...' value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type='password' placeholder='Digite sua senha...' value={senha} onChange={(e) => setSenha(e.target.value)} />

                <button type='submit'>Cadastrar</button>
            </form>

            <Link className='button-link' to="/">
                Já possuí uma conta? Entre agora!
            </Link>
        </div>
    );
}