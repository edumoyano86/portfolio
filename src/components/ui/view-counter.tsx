"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Eye } from "lucide-react";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    async function trackAndFetchViews() {
      if (!db) return;
      
      const docRef = doc(db, "stats", "portfolio_views");
      
      try {
        // Primero intentamos incrementar la vista
        // Nota: en un entorno de producción estricto, esto podría requerir reglas de seguridad específicas.
        await updateDoc(docRef, {
          count: increment(1)
        });
        
        // Luego leemos el nuevo valor
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setViews(docSnap.data().count);
        }
      } catch (error: any) {
        // Si el documento no existe (código de error not-found), lo creamos
        if (error.code === 'not-found') {
          try {
            await setDoc(docRef, { count: 1 });
            setViews(1);
          } catch (e) {
            console.error("Error creating views counter:", e);
          }
        } else {
          console.error("Error updating views:", error);
        }
      }
    }

    // Para evitar múltiples incrementos en modo estricto de React durante desarrollo
    if (process.env.NODE_ENV === "production" || !window.sessionStorage.getItem('viewTracked')) {
      trackAndFetchViews();
      window.sessionStorage.setItem('viewTracked', 'true');
    } else {
      // Solo leer si ya se trackeó en esta sesión
       const fetchViews = async () => {
         try {
           const docRef = doc(db, "stats", "portfolio_views");
           const docSnap = await getDoc(docRef);
           if (docSnap.exists()) {
             setViews(docSnap.data().count);
           }
         } catch(e) {}
       };
       fetchViews();
    }
  }, []);

  if (views === null) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 md:mt-0 bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
      <Eye className="w-4 h-4 text-accent" />
      <span>{views.toLocaleString()} visitas</span>
    </div>
  );
}
