import type { DeviceDTO, DeviceService } from '@/app/devices/device-service';

type HttpDeviceServiceOptions = {
  baseUrl: string;
};

export class HttpDeviceService implements DeviceService {
  private readonly baseUrl: string;

  constructor(options: HttpDeviceServiceOptions) {
    this.baseUrl = options.baseUrl;
  }

  async list(): Promise<DeviceDTO[]> {
    const res = await fetch(`${this.baseUrl}/devices`);
    if (!res.ok) throw new Error('Failed to fetch devices');
    return await res.json();
  }
}
