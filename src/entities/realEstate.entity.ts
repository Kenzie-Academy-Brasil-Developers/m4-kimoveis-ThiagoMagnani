import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";
import Address from "./address.entity";
import Category from "./category.entity";
import Schedule from "./schedule.entity";

@Entity('realEstates')
export default class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: string | number;

    @Column()
    size: number;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @Column({ type: "boolean", default: false })
    sold: boolean;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @OneToOne(() => Address, (address) => address.realEstate)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category;

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[];

}
