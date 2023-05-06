import service from './axiosService';
export const GetComents=async ()=>await service.get(import.meta.env.VITE_SERVER_2).then(e=>e.data);
export const GetPost=async ()=>await service.get(import.meta.env.VITE_SERVER_1).then(e=>e.data);