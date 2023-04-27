import React, { useState } from "react";
import './Accordeon.css'

function Accordeon() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-item ${
          activeIndex === 0 ? "active" : ""
        }`}
      >
        <div className="accordion-title" onClick={() => handleClick(0)}>
          Comment avez-vous utilisé l'API de The Movie Database pour créer votre site de streaming en React ?
        </div>
        <div className="accordion-content">
        Pour notre projet de site de streaming en React, nous avons utilisé l'API de The Movie Database pour récupérer les informations sur les films tels que le titre, la description, l'image et les évaluations des utilisateurs. Nous avons ensuite utilisé ces informations pour afficher les films sur notre site de streaming en React. Pour accéder à l'API, nous avons utilisé une bibliothèque JavaScript appelée Axios qui nous a permis de faire des requêtes HTTP pour récupérer les données de l'API. 
        </div>
      </div>
      <div
        className={`accordion-item ${
          activeIndex === 1 ? "active" : ""
        }`}
      >
        <div className="accordion-title" onClick={() => handleClick(1)}>
        Quel est le rôle de Git et GitHub dans la construction de votre projet de streaming en React ?
        </div>
        <div className="accordion-content">
        Git et GitHub ont été des outils essentiels dans la construction de notre projet de streaming en React. Nous avons utilisé Git pour gérer les versions de notre code et pour travailler sur différentes fonctionnalités de manière indépendante. Nous avons créé des branches pour chaque fonctionnalité et avons travaillé sur ces branches pour éviter les conflits de code. Nous avons également utilisé GitHub pour stocker notre code et collaborer sur le projet à deux. Nous avons créé des pull requests pour fusionner nos branches et avons utilisé les commentaires pour discuter de nos changements et des améliorations à apporter au code.
        </div>
      </div>
      <div
        className={`accordion-item ${
          activeIndex === 2 ? "active" : ""
        }`}
      >
        <div className="accordion-title" onClick={() => handleClick(2)}>
        Comment avez-vous assuré un excellent design pour votre site de streaming en React ?
        </div>
        <div className="accordion-content">
        Pour assurer un excellent design pour notre site de streaming en React, pour créer des éléments d'interface utilisateur tels que des cartes et des icônes. Nous avons également utilisé des styles CSS pour personnaliser les éléments d'interface utilisateur et créer un look and feel cohérent pour notre site de streaming.
        </div>
      </div>
      <div
        className={`accordion-item ${
          activeIndex === 3 ? "active" : ""
        }`}
      >
        <div className="accordion-title" onClick={() => handleClick(3)}>
        Comment avez-vous compilé votre code pour votre projet de streaming en React ?
        </div>
        <div className="accordion-content">
        Nous avons utilisé uniquement du JSX pour écrire notre code React pour le projet de streaming. Le JSX est une extension de syntaxe qui permet d'écrire des éléments HTML dans notre code JavaScript. Nous avons utilisé un transpileur en ligne pour convertir notre code JSX en code JavaScript valide avant de l'intégrer dans notre projet. En utilisant uniquement du JSX et un transpileur en ligne, nous avons pu créer un code React optimisé pour notre projet de streaming sans utiliser d'outil de compilation ou de bibliothèque tierce.
        </div>
      </div>
      <div
        className={`accordion-item ${
          activeIndex === 4 ? "active" : ""
        }`}
      >
        <div className="accordion-title" onClick={() => handleClick(4)}>
        Comment avez-vous travaillé ensemble en équipe sur votre projet de streaming en React ?
        </div>
        <div className="accordion-content">
        Nous avons utilisé la plateforme de développement collaboratif Git et l'hébergeur de code en ligne GitHub pour travailler ensemble en équipe sur notre projet de streaming en React. Nous avons commencé par créer un dépôt Git et l'avons cloné sur nos machines locales. Nous avons ensuite créé des branches séparées pour chacune des fonctionnalités que nous voulions ajouter à notre application de streaming. Chaque fois qu'une branche était terminée, nous l'avons fusionnée avec la branche principale en utilisant des demandes de fusion sur GitHub, qui ont permis à l'un de nous de revoir et d'approuver les modifications apportées avant de les fusionner. Nous avons également utilisé des commentaires sur les demandes de fusion pour discuter des modifications apportées et pour signaler les problèmes éventuels. Enfin, nous avons utilisé les fonctionnalités de suivi des problèmes de GitHub pour signaler et résoudre les problèmes rencontrés dans notre application. Grâce à ces méthodes, nous avons pu travailler efficacement ensemble en équipe sur notre projet de streaming en React.
        </div>
      </div>
      <div
        className={`accordion-item ${
          activeIndex === 5 ? "active" : ""
        }`}
      >
        <div className="accordion-title" onClick={() => handleClick(5)}>
          Comment avez-vous créé le design exceptionnel de votre site de streaming en React et quels outils avez-vous utilisés ?
        </div>
        <div className="accordion-content">
        Nous avons créé le design exceptionnel de notre site de streaming en React en utilisant l'outil de conception d'interface utilisateur Figma. Nous avons commencé par créer des maquettes de conception pour chaque page de notre application, en utilisant des couleurs, des typographies, des images et des éléments graphiques pour créer un design cohérent et attrayant. Nous avons également utilisé des fonctionnalités de Figma telles que les composants, les styles et les règles de conception pour garantir la cohérence et la réutilisabilité de nos éléments de conception. En outre, nous avons utilisé des principes de conception tels que la hiérarchie visuelle, la lisibilité et l'accessibilité pour garantir que notre design était efficace et agréable à utiliser pour les utilisateurs. Nous avons également utilisé des outils tels que l'analyse des données utilisateur et les tests d'utilisabilité pour valider et améliorer notre design. Grâce à ces méthodes et à l'utilisation de Figma, nous avons créé un design exceptionnel pour notre site de streaming en React.
        </div>
      </div>
    </div>
  );
}

export default Accordeon;
