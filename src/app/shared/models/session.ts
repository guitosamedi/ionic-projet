import {Speaker} from "./speaker";

export class Session {
  constructor(
    public id: number,
    public title?: string,
    public titleMobile?: string,
    public image?: string,
    public description?: string,
    // public speakers?: Speaker[]
    public speakers?: number[]
  ) {}
}
