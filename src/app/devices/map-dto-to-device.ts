import type { DeviceDTO } from "./device-service";
import type { Device } from "./device";

export function mapDtoToDevice(dto: DeviceDTO): Device {
  return {
    id: dto.id,
    brand: dto.brand,
    modelName: dto.modelName,
    category: dto.category,
    description: dto.description,
    stock: dto.stock,
    createdAt: dto.createdAt,
  };
}