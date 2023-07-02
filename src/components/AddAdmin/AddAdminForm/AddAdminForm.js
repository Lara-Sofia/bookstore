import React, { useContext, useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {push, ref } from 'firebase/database';
import { db } from "../../../firebase/config";

const AddAdminForm = () => {
    const [adminData, setAdminData] = useState({
        name: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const { name, email, password } = adminData;
      
        try {
          const auth = getAuth();
          const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
          if (user) {
            const admin = {
              name,
              email,
              rol: 'admin'
            };
      
            const useRef = ref(db, 'user');
            await push(useRef, admin);
      
            alert('New admin registered successfully!');
            // Puedes redirigir a una página de éxito o realizar otras acciones necesarias
          }
        } catch (error) {
          alert('Error registering admin:', error);
          // Puedes mostrar un mensaje de error al usuario o realizar otras acciones necesarias
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={adminData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={adminData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={adminData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      );
    };

export default AddAdminForm;