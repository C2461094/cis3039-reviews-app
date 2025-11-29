// --- Device Service Setup ---
import type { DeviceService } from '@/app/devices/device-service';
import { HttpDeviceService } from '@/infra/devices/http-device-service';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

let _deviceService: DeviceService | undefined;

export function getDeviceService(): DeviceService {
  if (!_deviceService) {
    _deviceService = new HttpDeviceService({ baseUrl: apiBaseUrl });
  }
  return _deviceService;
}

export const DEVICE_KEY = 'DeviceService' as const;
