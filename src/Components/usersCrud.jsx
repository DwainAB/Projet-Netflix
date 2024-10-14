import React, { useEffect, useState } from 'react';
import { supabase } from './supabase';

const UserCRUD = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(6); // ID par défaut

  const fetchUsers = async () => {
    const { data } = await supabase
      .from('users')
      .select('*');
    console.log(data);
    setUsers(data);
  };

  const createUser = async () => {
    const newUser = {
      ref_restaurant: 'restaurant initial',
      place_id: 'test initial',
      firstname: 'john',
      lastname: 'doe',
      email: 'jane.smith@test.com',
      password: 'test',
      phone: '0102030405',
      address: 'Test address',
      role: 'users',
      id_notification: 'id de notif', 
    };

    const { data, error } = await supabase
      .from('users')
      .insert([newUser]);

    if (error) console.log('Error creating user:', error);
    else fetchUsers();
  };

  const updateUser = async () => {

    if (!userId) {
      console.log('User ID is not set');
      return; 
    }

    const updatedUser = {
      ref_restaurant: 'restaurant_2',
      place_id: 'test',
      firstname: 'Jane',
      lastname: 'Doe',
      email: 'jane.doe@example.com',
      password: 'test',
      phone: '0102030405',
      address: 'Test address',
      role: 'users',
      id_notification: 'id de notif',
    };

    const { data, error } = await supabase
      .from('users')
      .update(updatedUser)
      .eq('id', userId);

    if (error) console.log('Error updating user:', error);
    else {
      console.log('User updated successfully:', data);
      fetchUsers();
      setUserId(null); 
    }
  };

  const deleteUser = async (id) => {
    const { data, error } = await supabase
      .from('users')
      .delete()
      .eq('id', id);

    if (error) console.log('Error deleting user:', error);
    else fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Gestion des utilisateurs</h1>
      <button onClick={fetchUsers} style={buttonStyle}>Récupérer tous les utilisateurs</button>
      <button onClick={createUser} style={buttonStyle}>Ajouter un utilisateur</button>
      <button onClick={updateUser} style={buttonStyle}>Modifier un utilisateur</button>
      <button onClick={() => deleteUser(9)} style={buttonStyle}>Supprimer</button>
    </div>
  );
};

const buttonStyle = {
  width: 'auto',
  height: '40px',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '16px',
  margin: '5px',
};

export default UserCRUD;
