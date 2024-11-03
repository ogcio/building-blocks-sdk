declare module "unleash-client" {
  export function startUnleash(options: UnleashConfig): Promise<Unleash>;
  export class InMemStorageProvider<T> implements StorageProvider<T> {
    private store;
    set(key: string, data: T): Promise<void>;
    get(key: string): Promise<T | undefined>;
  }
}
