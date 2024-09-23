import React from 'react';

/* Hook para detectar si está en tamaño móvil */
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 640);

  React.useEffect(() => {
    /* Función para actualizar el estado al cambiar el tamaño de la ventana */
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }

    /* Escucha de eventos de resize */
    window.addEventListener('resize', handleResize);

    /* Limpieza del event listener */
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export { useIsMobile };