import React, { useEffect, useState } from 'react';
import { supabase } from './supabase'; // Assure-toi que supabase est bien configuré

const ProductCRUD = () => {
  const [products, setProducts] = useState([]);
  const [imageFile, setImageFile] = useState(null);

// Fonction pour récupérer l'URL publique d'une image
const getImageUrl = (filePath) => {
    const { publicURL } = supabase.storage
      .from('product-img')
      .getPublicUrl(filePath); // Utilise filePath directement
  
    return publicURL;
  };
  

  const createProduct = async (product) => {
    if (imageFile) {
      // Upload l'image sur Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('product-img')
        .upload(`public/${imageFile.name}`, imageFile);
  
      if (uploadError) {
        console.error('Erreur lors de l\'upload de l\'image:', uploadError);
        return;
      }
  
      console.log('Image uploadée avec succès:', uploadData.path);
  
      // Obtenir l'URL publique de l'image en utilisant le path
      const publicURL = getImageUrl(uploadData.path); // Utilise le path de uploadData
  
      // Ajouter l'URL de l'image au produit
      const productWithImage = { ...product, image: publicURL };
  
      // Affiche le produit avant insertion
      console.log('Produit avant insertion:', productWithImage);
  
      const { data, error } = await supabase
        .from('products')
        .insert([productWithImage]);
  
      if (error) {
        console.error('Erreur lors de la création du produit:', error);
      } else {
      console.log('Produit apres insertion:', productWithImage);
        console.log('Produit créé avec succès:', data);
        fetchProducts(); // Récupérer les produits après l'ajout
      }
    } else {
      console.log('Aucune image sélectionnée');
    }
  };
  

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Erreur lors de la récupération des produits:', error);
    } else {
      // Récupérer les URL des images
      const productsWithImages = data.map(product => ({
        ...product,
        image: getImageUrl(product.image), // Utilise le champ image qui devrait contenir le path
      }));
  
      console.log('Produits récupérés:', productsWithImages);
      setProducts(productsWithImages);
    }
  };
  

  // Fonction pour mettre à jour un produit (on met à jour le premier produit ici pour l'exemple)
  const updateProduct = async () => {
    if (products.length > 0) {
      const productId = products[0].id;
      const updatedProduct = {
        name: 'Produit Modifié',
        description: 'Description mise à jour',
        category: 'Catégorie Modifiée',
        price: 29.99,
      };

      const { data, error } = await supabase
        .from('products')
        .update(updatedProduct)
        .eq('id', productId);

      if (error) {
        console.error('Erreur lors de la mise à jour du produit:', error);
      } else {
        console.log('Produit mis à jour avec succès:', data);
        fetchProducts(); // Récupérer les produits après la mise à jour
      }
    } else {
      console.log('Aucun produit à mettre à jour');
    }
  };

  // Fonction pour supprimer un produit (on supprime le premier produit ici pour l'exemple)
  const deleteProduct = async () => {
    if (products.length > 0) {
      const productId = products[0].id;

      const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);

      if (error) {
        console.error('Erreur lors de la suppression du produit:', error);
      } else {
        console.log('Produit supprimé avec succès:', data);
        fetchProducts(); // Récupérer les produits après la suppression
      }
    } else {
      console.log('Aucun produit à supprimer');
    }
  };

  // useEffect pour récupérer les produits au chargement de la page
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fonction pour gérer la sélection d'une image
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Fausses données de produit
  const fakeProduct = {
    ref_restaurant: 'REST123',
    name: 'Produit Test',
    description: 'Ceci est un produit de test',
    category: 'Test Catégorie',
    price: 19.99,
  };

  return (
    <div>
      <h1>Gestion des Produits</h1>

      {/* Champ pour sélectionner une image */}
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {/* Bouton pour créer un produit */}
      <button style={buttonStyle} onClick={() => createProduct(fakeProduct)}>Ajouter un produit</button>

      {/* Bouton pour afficher les produits dans la console */}
      <button style={buttonStyle} onClick={fetchProducts}>Afficher les produits</button>

      {/* Bouton pour mettre à jour un produit (le premier de la liste) */}
      <button style={buttonStyle} onClick={updateProduct}>Mettre à jour un produit</button>

      {/* Bouton pour supprimer un produit (le premier de la liste) */}
      <button style={buttonStyle} onClick={deleteProduct}>Supprimer un produit</button>

      <h3>Liste des produits</h3>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <img src={`https://ehjbdvbicusntqbhlqun.supabase.co/storage/v1/object/public/product-img/${prod.image}`} alt={prod.name} style={{ width: '100px', height: '100px' }} />
            <p>{prod.name} - {prod.price}€ - {prod.category}</p>
          </li>
        ))}
      </ul>
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

export default ProductCRUD;
