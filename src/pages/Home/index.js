import './home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    function handleLogin(event) {
        event.preventDefault();

        if (email !== '' && senha !== '') {

        } else {
            alert("Preencha todos os campos!");
            return;
        }
    }

    return (
        <div className='home-container'>
            <h1>Lista de tarefas</h1>
            <span>Gerencie sua agenda de forma fácil.</span>

            <form className='form' onSubmit={handleLogin}>
                <input type='text' placeholder='Digite seu e-mail...' value={email} onChange={(e) => setEmail(e.target.value)} />

                <input autoComplete={false} type='password' placeholder='Digite sua senha...' value={senha} onChange={(e) => setSenha(e.target.value)} />

                <button type='submit'>Acessar</button>
            </form>

            <Link className='button-link' to="/register">
                Não possui uma conta? Cadastre-se agora!
            </Link>
        </div>
    );
}