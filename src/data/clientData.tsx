// src/data/clientData.tsx
export interface ClientData {
    clientName: string;
    clientDescription: string;
    clientImage: string;
}

export const clientData: Record<string, ClientData> = {
    client1: {
        clientName: "Client One",
        clientDescription: "Description for client one.",
        clientImage: "client1.jpg"
    },
    client2: {
        clientName: "Client Two",
        clientDescription: "Description for client two.",
        clientImage: "client2.jpg"
    }
};
