// src/seed/devices.ts
import type { DeviceDTO } from '@/app/devices/device-service';

export const seedDevices: DeviceDTO[] = [
  {
    id: 'tab-001',
    brand: 'Apple',
    modelName: 'iPad Air',
    category: 'Tablet',
    description: '10.9-inch display, M1 chip',
    stock: 3,
    createdAt: new Date(),
  },
  {
    id: 'lap-002',
    brand: 'Dell',
    modelName: 'XPS 13',
    category: 'Laptop',
    description: 'Compact, high-res screen',
    stock: 2,
    createdAt: new Date(),
  },
  // Add more as needed in the future
];
