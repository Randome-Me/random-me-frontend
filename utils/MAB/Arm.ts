import store from "store"
import { pull } from "store/slice/user"
import { ArmState, BanditArm } from "types/mab"
import Mutable from "types/mutable"

export class Arm {
  readonly name: string
  readonly bias: number
  readonly pulls: number
  readonly reward: number
  readonly _id: string

  constructor({ name, bias, pulls, reward, _id }: BanditArm) {
    this.name = name
    this.bias = bias
    this.pulls = pulls
    this.reward = reward
    this._id = _id
  }

  rate(): number {
    return this.pulls > 0 ? this.reward / this.pulls : 0
  }

  /**
   * Return a tuple [pulls, reward]
   */
  state(): ArmState {
    return [this.pulls, this.reward]
  }

  pull(reward: 0 | 1) {
    ;(this as Mutable<Arm>).pulls += 1
    ;(this as Mutable<Arm>).reward += reward
    // save the state of this arm to the sever
    // save the state of this arm to the store
    store.dispatch(pull({ reward, optionId: this._id }))
  }
}
