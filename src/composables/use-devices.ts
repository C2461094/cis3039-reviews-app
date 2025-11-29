// src/composables/use-devices.ts
import { ref, inject, onMounted } from 'vue';
import type { Devices } from '@/config/appServices';
import { DEVICE_KEY } from '@/config/appServices';
import type { Device } from '@/app/devices/device';

const devices = ref<Device[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

export function useDevices() {
  const services = inject<Devices>(DEVICE_KEY);
  if (!services) throw new Error('Device services not provided');

  const loadDevices = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const result = await services.listDevices();
      devices.value = result.devices;
    } catch (err) {
      console.error('Failed to load devices:', err);
      error.value = 'Failed to load devices.';
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    if (devices.value.length === 0) {
      loadDevices();
    }
  });

  return {
    devices,
    isLoading,
    error,
    reload: loadDevices,
  };
}
