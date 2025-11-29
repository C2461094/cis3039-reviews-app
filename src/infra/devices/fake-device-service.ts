// src/infra/devices/fake-device-service.ts
import type { DeviceService } from '@/app/devices/device-service';
import type { DeviceDTO } from '@/app/devices/device-service';
import { seedDevices } from '@/seed/devices';

export class FakeDeviceService implements DeviceService {
  private readonly devices: DeviceDTO[];

  constructor(seed: DeviceDTO[] = []) {
    this.devices = seed.length > 0 ? [...seed] : [];    
  }

  async list(): Promise<DeviceDTO[]> {
    // Simulate latency like a real API
    await new Promise((resolve) => setTimeout(resolve, 300));
    return this.devices;
  }
}
