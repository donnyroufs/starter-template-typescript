import { Describe, Test } from "@jest-decorated/core"
import { bootstrap } from "./bootstrap"

@Describe()
export class BootstrapShould {
  @Test()
  public async ReturnAWelcomeMessage(): Promise<void> {
    expect(await bootstrap()).toEqual("bootstrapped 👋")
  }
}
