export interface AuthStore {
    accessToken: string;
    setAccessToken: (accessToken: string) => void;
}