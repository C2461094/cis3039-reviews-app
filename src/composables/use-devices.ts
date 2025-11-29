import { ref, onMounted } from 'vue';
import { getDeviceService } from '@/config/appServices';
import { mapDtoToDevice } from '@/app/devices/map-dto-to-device';
import type { Device } from '@/app/devices/device';

const devices = ref<Device[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

export function useDevices() {
    const loadDevices = async () => {
        isLoading.value = true;
        error.value = null;
        try {
            const dtos = await getDeviceService().list();
            devices.value = dtos.map(mapDtoToDevice);   
        } catch (err) {
            console.error('Error loading devices:', err);
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