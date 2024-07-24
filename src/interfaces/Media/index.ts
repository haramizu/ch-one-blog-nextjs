export interface Media {
    id: string;
    name: string;
    description: string;
    fileId: string;
    fileName: string;
    fileUrl: string;
    fileHeight: number;
    fileWidth: number;
    fileSize: number;
    fileType: string;
}

export interface MediaResponse {
    data: {
        media: Partial<Media>;
    };
}

export const MediaQuery = `
        id
        name
        description
        fileHeight
        fileId
        fileName
        fileSize
        fileType
        fileUrl
        fileWidth
`;

export const MediaFromIDQuery = (mediaId: string) => {
    return (
        `
    query Media {
    media(id: "${mediaId}") {
        ` +
        MediaQuery +
        `
    }
  }
  `
    );
};