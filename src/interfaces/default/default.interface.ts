export interface IDefault {
  readonly id: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt?: Date;
}

export interface IRelationDefault {
  readonly id: number;
}
