import React from 'react';

// Hook para manejar favoritos
function useFavorites() {
    // Estado que mantiene la lista de favoritos
    const [favorites, setFavorites] = React.useState(() => {
        // Intenta obtener los favoritos guardados en local storage al iniciar
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    // Función para añadir o quitar de favoritos
    const toggleFavorite = (pokemon) => {
        setFavorites((prevFavorites) => {
            let updatedFavorites;
            // Verifica si el Pokémon ya es favorito
            if (prevFavorites.some(fav => fav.id === pokemon.id)) {
                // Si ya es favorito, lo elimina
                updatedFavorites = prevFavorites.filter(fav => fav.id !== pokemon.id);
            } else {
                // Si no es favorito, lo añade
                updatedFavorites = [...prevFavorites, pokemon];
            }
            // Guarda los favoritos actualizados en local storage
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    // Función para verificar si un Pokémon es favorito
    const isFavorite = (pokemonId) => {
        return favorites.some(fav => fav.id === pokemonId);
    };

    return { favorites, toggleFavorite, isFavorite };
}

export { useFavorites };