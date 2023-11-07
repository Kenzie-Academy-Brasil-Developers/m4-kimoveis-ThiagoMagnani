import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import RealEstate from "./realEstate.entity";

@Entity('categories')
export default class Category {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", length: 25 })
    name: string;

    @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
    realEstate: RealEstate[];
}
