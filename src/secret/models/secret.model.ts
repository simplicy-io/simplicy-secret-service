import {
  Column,
  Entity,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity()
export class Secret {
  @ObjectIdColumn()
  id: string;

  @Column()
  @Unique('UQ_Secret_secrethash', ['secrethash'])
  secrethash: string;

  /*
   * Create and Update Date Columns
   */
  @CreateDateColumn()
  creationAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
