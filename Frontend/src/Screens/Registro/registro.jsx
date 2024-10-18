import React from 'react';
import './registro.css';

const Registro = () => {
    return (
        <div className="contenedor-registro">
            <div className="fondo-registro"></div>
            <img src="../src/assets/GifsYfotos/Logo.png" alt="Logo del Banco" className="logo" />
            <form className="formulario-registro">
                <input
                    type="text"
                    className="entrada-registro"
                    placeholder="Nombre"
                    required
                />
                <input
                    type="email"
                    className="entrada-registro"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    className="entrada-registro"
                    placeholder="Contraseña"
                    required
                />
                <input
                    type="tel"
                    className="entrada-registro"
                    placeholder="Número de Cuenta (Celular)"
                    required
                    pattern="[0-9]*" // Solo permite valores numéricos
                />
                <select className="entrada-registro" required>
                    <option value="" disabled selected hidden>Tipo</option>
                    <option value="ahorros">Ahorros</option>
                    <option value="corriente">Corriente</option>
                </select>
                <input
                    type="number"
                    className="entrada-registro"
                    placeholder="Saldo"
                    defaultValue=""
                    required
                    pattern="[0-9]*" // Solo permite valores numéricos
                />
                <button type="submit" className="boton-registro">Registrar</button>
                <button type="button" className="boton-menu-principal" onClick={() => window.location.href = '/'}>Volver al Menú Principal</button>
            </form>
        </div>
    );
};

export default Registro;
