type AlbumPhoto_Type = {
    src: string;
    alt: string;
};

export type { AlbumPhoto_Type };

type DataAlbumPhoto_Type = {
    album: AlbumPhoto_Type[];
};

export type { DataAlbumPhoto_Type };
