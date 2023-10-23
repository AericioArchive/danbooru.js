import { Redis } from "ioredis";

export class DanbooruCache {
  private readonly redis: Redis;
  public defaultDuration: number;

  constructor(host: string, port: number, defaultDuration = 300) {
    this.redis = new Redis({
      host,
      port,
      connectionName: "danboorujs",
    });

    this.redis.on("connect", () => {
      console.info(`[redis] connected to ${host}:${port}.`);
    });
    this.redis.on("error", () => {
      console.error(`[redis] connection to ${host}:${port} failed.`);
    });

    // By default, all requests will be cached for 5 minutes.
    this.defaultDuration = defaultDuration;
  }

  public set(key: string, value: Record<string, unknown>, duration?: number) {
    return this.redis.setex(key, duration ?? this.defaultDuration, JSON.stringify(value));
  }

  public async get(key: string): Promise<Record<string, any>> {
    const data = await this.redis.get(key);
    return data ? JSON.parse(data) : null;
  }

  public exists(key: string) {
    return this.redis.exists(key);
  }
}
