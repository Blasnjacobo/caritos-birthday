// useMemories.ts
import { useState, useEffect, SetStateAction } from 'react';
import { PhotoService } from '../services/PhotoService';
import { CategoryGallery } from '@services/PhotoService';

export const useMemories = () => {
    const [galleries, setGalleries] = useState<CategoryGallery[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        PhotoService.getGalleries().then((data: SetStateAction<CategoryGallery[]>) => {
            setGalleries(data);
            setIsLoading(false);
        });
    }, []);

    return {
        galleries,
        isLoading
    };
};