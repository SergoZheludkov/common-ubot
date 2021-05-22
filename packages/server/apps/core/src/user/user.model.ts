/* eslint-disable camelcase */
import { Table, Column, Model, CreatedAt, UpdatedAt, PrimaryKey, Default } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id: number;

  @Column({ allowNull: true })
  firstname: string;

  @Column({ allowNull: true })
  lastname: string;

  @Column({ unique: true })
  username: string;

  @Default(false)
  @Column
  is_admin: boolean;

  @CreatedAt
  created: Date;

  @UpdatedAt
  updated: Date;
}
