import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

export default function Login() {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const manejarInicioSesion = (e) => {
        e.preventDefault();
        if (correo && contrasena) {
            console.log("Inicio de sesión:", { correo, contrasena });
            navigate('/Perfil'); 
        } else {
            alert("Por favor, completa todos los campos.");
        }
    };

    return (
        <div className="contenedor-login">
            <div className="fondo"></div> {/* Div para el fondo */}
            <img 
                src="../src/assets/GifsYfotos/Logo.png" 
                alt="Logo del Banco" 
                className="logo" 
            />
            <form className="formulario-login" onSubmit={manejarInicioSesion}>
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="entrada-login"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="entrada-login"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />
                <button type="submit" className="boton-login">Iniciar Sesión</button>
            </form>
            <button
                className="boton-toggle"
                onClick={() => navigate('/registro')}
            >
                Regístrate
            </button>
            <button
                className="boton-perfil"
                onClick={() => navigate('/Perfil')}
            >
                Ir a Perfil
            </button>
        </div>
    );
}
