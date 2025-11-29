import type { Device } from './device';
import type { DeviceService } from './device-service';

export type ListDevicesResult = {
  devices: Device[];
};

export async function listDevices(
  deviceService: DeviceService,
): Promise<ListDevicesResult> {
  const devices = await deviceService.list();
  return { devices };
}
