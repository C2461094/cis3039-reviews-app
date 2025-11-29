export type DeviceDTO = {
  id: string;
  brand: string;
  modelName: string;
  category: string;
    description?: string;
  stock: number;
  createdAt: Date;
};

export interface DeviceService {
  list(): Promise<DeviceDTO[]>;
}
