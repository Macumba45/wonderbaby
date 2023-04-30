import { useCallback, useEffect, useMemo, useState } from 'react';

export const MyPicsLogic = () => {
    const images = useMemo(
        () => ({
            image1: 'https://picsum.photos/200/300',
            image2: 'https://picsum.photos/250/400',
            image3: 'https://picsum.photos/300/200',
            image4: 'https://picsum.photos/400/250',
            image5: 'https://picsum.photos/200/200',
            image6: 'https://picsum.photos/250/250',
            image7: 'https://picsum.photos/300/300',
            image8: 'https://picsum.photos/350/350',
            image9: 'https://picsum.photos/400/400',
            image10: 'https://picsum.photos/450/450',
        }),
        []
    );

    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [showDownloadButton, setShowDownloadButton] = useState(false);
    const [selectedImages, setSelectedImages] = useState(
        Array(Object.keys(images).length).fill(false)
    );
    const [openConfirmationDialog, setOpenConfirmationDialog] =
        useState(false);

    const toggleImageSelection = useCallback(
        (index: number) => {
            const newSelectedImages = [...selectedImages];
            newSelectedImages[index] = !newSelectedImages[index];
            setSelectedImages(newSelectedImages);
            setShowDownloadButton(newSelectedImages.includes(true));
        },
        [selectedImages]
    );

    const downloadImage = useCallback(async (url: string, name: string) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }, []);

    const downloadSelectedImages = useCallback(async () => {
        const imageUrls = Object.values(images);
        const selectedImageIndexes = selectedImages.reduce(
            (acc, curr, index) => {
                if (curr) {
                    return [...acc, index];
                }
                return acc;
            },
            []
        );

        for (let i = 0; i < selectedImageIndexes.length; i++) {
            const index = selectedImageIndexes[i];
            const imageName = `image${index + 1}.jpg`;
            await downloadImage(imageUrls[index], imageName);
        }
    }, [downloadImage, images, selectedImages]);

    const reloadImage = useCallback((index: number) => {
        const imageElement = document.getElementById(
            `image${index + 1}`
        ) as HTMLImageElement;
        if (imageElement) {
            imageElement.src = imageElement.src + '?' + new Date().getTime();
        }
    }, []);

    const reloadSelectedImages = useCallback(() => {
        const selectedImageIndexes = selectedImages.reduce(
            (acc, curr, index) => {
                if (curr) {
                    return [...acc, index];
                }
                return acc;
            },
            []
        );

        selectedImageIndexes.forEach((index: number) => {
            reloadImage(index);
        });
        setOpenConfirmationDialog(true);
    }, [selectedImages, reloadImage]);

    const handleReloadImages = useCallback(() => {
        setOpenConfirmationDialog(true);
    }, []);

    const handleReloadConfirm = useCallback(() => {
        reloadSelectedImages();
        setOpenConfirmationDialog(false);
    }, [reloadSelectedImages]);

    const handleReloadCancel = useCallback(() => {
        setOpenConfirmationDialog(false);
    }, []);

    useEffect(() => {
        setShouldAnimate(true);
    }, []);

    return {
        images,
        selectedImages,
        shouldAnimate,
        toggleImageSelection,
        showDownloadButton,
        downloadSelectedImages,
        reloadImage,
        reloadSelectedImages,
        handleReloadImages,
        handleReloadConfirm,
        handleReloadCancel,
        openConfirmationDialog,
    };
};
