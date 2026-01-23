
'use client';

import imageCompression from 'browser-image-compression';

/**
 * Comprime una imagen en el navegador y la convierte a una Data URL (Base64).
 * @param file El archivo de imagen a procesar.
 * @returns Una promesa que se resuelve con la Data URL de la imagen comprimida.
 */
export async function compressAndConvertToDataURL(file: File): Promise<string> {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    // 1. Comprime la imagen
    const compressedFile = await imageCompression(file, options);
    
    // 2. Convierte la imagen comprimida a Data URL
    const dataUrl = await imageCompression.getDataUrlFromFile(compressedFile);
    
    // 3. Devuelve la cadena de texto para ser guardada en Firestore
    return dataUrl;
  } catch (error) {
    console.error('Error durante la compresión de la imagen:', error);
    throw new Error('No se pudo procesar la imagen. Por favor, intenta con otra.');
  }
}
