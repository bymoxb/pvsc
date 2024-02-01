export enum ProsConsValues {
  LOW = "1",
  MEDIUM = "2",
  HIGH = "3",
}

export const ProsConsText = Object.freeze({
  "1": "LOW",
  "2": "MEDIUM",
  "3": "HIGH",
})

export type ProsCons = {
  id: string;
  item: string;
  value: ProsConsValues;
}

export enum TypeTable {
  PROS,
  CONS,
}

export type ProsConsTable = {
  subject: string;
  pros: Array<ProsCons>;
  cons: Array<ProsCons>;
}
