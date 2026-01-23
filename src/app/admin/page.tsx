
'use client';

import { useState } from 'react';
import { collection, setDoc, doc, serverTimestamp, getDocs, query } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Copy, AlertTriangle, FileImage } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { compressAndConvertToDataURL } from '@/lib/storage';
import { auth, db } from '@/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function AdminPage() {
  const [user, isUserLoading] = useAuthState(auth);
  const firestore = db;
  const router = useRouter();
  const { toast } = useToast();

  const [imageNameToSave, setImageNameToSave] = useState('');
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const imagesCollectionRef = collection(firestore, 'portfolio_images');
  const [uploadedImagesSnapshot, isLoadingImages] = useCollection(query(imagesCollectionRef));

  const uploadedImages = uploadedImagesSnapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() })) as { id: string, name: string, url: string }[] | undefined;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileToUpload(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!fileToUpload || !imageNameToSave.trim() || !user || !firestore) {
      toast({
        variant: 'destructive',
        title: 'Faltan datos',
        description: 'Por favor, introduce un nombre, selecciona un archivo y asegúrate de haber iniciado sesión.',
      });
      return;
    }

    setIsUploading(true);

    try {
      const dataUrl = await compressAndConvertToDataURL(fileToUpload);

      const imageDocRef = doc(firestore, 'portfolio_images', imageNameToSave.trim());
      
      await setDoc(imageDocRef, {
        name: imageNameToSave.trim(),
        url: dataUrl,
        uploaderUid: user.uid,
        updatedAt: serverTimestamp()
      }, { merge: true });
      
      toast({
        title: '¡Éxito!',
        description: `La imagen '${imageNameToSave.trim()}' se ha guardado.`,
      });

      setFileToUpload(null);
      setImageNameToSave('');
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error: any) {
      console.error("Error en el proceso de subida:", error);
      toast({
        variant: 'destructive',
        title: 'Error en la subida',
        description: `No se pudo completar el proceso. Motivo: ${error.message}`,
      });
    } finally {
      setIsUploading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copiado al portapapeles',
      description: 'El inicio de la Data URL ha sido copiado.',
    })
  }

  if (isUserLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Panel de Administración</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Sube y gestiona las imágenes de tu portfolio. Las imágenes se optimizan y se guardan directamente en la base de datos.
        </p>
      </header>

      <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Subir Nueva Imagen</CardTitle>
            <CardDescription>Dale un nombre único y luego selecciona el archivo.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Input
              placeholder="Nombre descriptivo (ej: logo, profile)"
              value={imageNameToSave}
              onChange={(e) => setImageNameToSave(e.target.value)}
              disabled={isUploading}
              className="text-base"
            />
            
            <Input
              id="file-input"
              type="file"
              onChange={handleFileSelect}
              disabled={isUploading}
              accept="image/*"
            />

            {fileToUpload && (
              <div className="flex items-center gap-3 truncate min-w-0 p-3 border rounded-lg bg-muted/20">
                <FileImage className="w-6 h-6 flex-shrink-0"/>
                <span className="truncate font-medium">{fileToUpload.name}</span>
              </div>
            )}

            <Button onClick={handleUpload} disabled={isUploading || !fileToUpload || !imageNameToSave} className="w-full" size="lg">
              {isUploading ? 'Procesando y Subiendo...' : 'Guardar Imagen'}
            </Button>

          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Imágenes en Base de Datos</CardTitle>
            <CardDescription>Estas son las imágenes que está usando tu portfolio.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoadingImages ? (
              <div className="space-y-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            ) : uploadedImages && uploadedImages.length > 0 ? (
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {uploadedImages.map(file => (
                  <div key={file.id} className="flex items-center justify-between gap-4 p-3 border rounded-lg bg-card/50">
                    <div className="flex items-center gap-4 truncate min-w-0">
                      <img src={file.url} alt={file.name} className="w-12 h-12 rounded-md object-cover flex-shrink-0"/>
                      <div className="truncate min-w-0">
                        <p className="font-semibold text-sm truncate" title="Nombre en la BD">{file.name}</p>
                         <p className="text-xs text-muted-foreground truncate cursor-pointer hover:underline" onClick={() => copyToClipboard(file.url.substring(0, 100) + '...')} title="Click para copiar el inicio de la Data URL">{file.url.substring(0, 60)}...</p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost" onClick={() => copyToClipboard(file.url.substring(0, 100) + '...')} className="flex-shrink-0">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8 flex flex-col items-center gap-4">
                <AlertTriangle className="w-10 h-10 text-amber-500" />
                <p>No se encontraron imágenes en la base de datos.</p>
                <p className='text-sm'>Sube imágenes con nombres como 'logo', 'profile' para que la web las muestre.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
