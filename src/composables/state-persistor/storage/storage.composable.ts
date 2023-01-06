import useStorageProxy from "./storage-proxy.composable"

export default function useStorage() {
    const proxyStorage = useStorageProxy()

    function mapToEntity<T>(
        value: string | null,
        mapper?: (value: string | null) => T | T[]
    ) {
        return mapper ? mapper(value) : value
    }

    function mapToStorage<T>(
        value: T | T[] | null,
        mapper?: (value: T | T[] | null) => string
    ) {
        return mapper ? mapper(value) : value?.toString() || ''
    }

    function getValue<T>(key: string, mapper?: (value: string | null) => T): T | null;
    function getValue<T>(key: string, mapper?: (value: string | null) => T[]): unknown {
        return mapToEntity(proxyStorage.getValue(key), mapper)
    }

    function setValue<T>(key: string, value: T, mapper?: (value: T | null) => string): void;
    function setValue<T>(key: string, value: T[], mapper?: (value: T[] | null) => string): void;
    function setValue<T>(key: string, value: T | T[], mapper?: (value: T | T[] | null) => string) {
        proxyStorage.setValue(key, mapToStorage(value, mapper))
    }

    return {
        getValue,
        setValue,
    }
}