import React from 'react';

// Hook para manejar favoritos
function useFavorites() {
    const [favorites, setFavorites] = React.useState(() => {
        /* Obtención de favoritos al iniciar */
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    // Función para añadir o quitar de favoritos
    const toggleFavorite = (pokemon) => {
        setFavorites((prevFavorites) => {
            let updatedFavorites;
            if (prevFavorites.some(fav => fav.id === pokemon.id)) {
                updatedFavorites = prevFavorites.filter(fav => fav.id !== pokemon.id);
            } else {
                updatedFavorites = [...prevFavorites, pokemon];
            }
            /* Actualizacion de localStorage. */
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    /* Función de verificacion cuando un pokemon es favorito.*/
    const isFavorite = (pokemonId) => {
        return favorites.some(fav => fav.id === pokemonId);
    };

    return { favorites, toggleFavorite, isFavorite };
}

export { useFavorites };