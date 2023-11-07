import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import RealEstate from "./realEstate.entity";

@Entity('addresses')
export default class Address {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", length: 45 })
    street: string;

    @Column({ type: "varchar", length: 8 })
    zipCode: string;

    @Column()
    number: number;

    @Column({ type: "varchar", length: 20 })
    city: string;

    @Column({ length: 2 })
    state: string;

    @OneToOne(() => RealEstate, (realEstate) => realEstate.address)
    realEstate: RealEstate;
}
