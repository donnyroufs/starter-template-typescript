import Guard from "ts-guard-clause"

export class ConfigService {
  public static get NODE_ENV(): string {
    return Guard.against.undefined(process.env.NODE_ENV)
  }

  public static get PORT(): number {
    return +Guard.against.undefined(process.env.PORT)
  }
}
