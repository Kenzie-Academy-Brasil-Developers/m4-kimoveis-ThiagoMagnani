import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./user.entity";
import RealEstate from "./realEstate.entity";

@Entity('schedules')
export default class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "date" })
    date: string;

    @Column({ type: "time" })
    hour: string;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate;

    @ManyToOne(() => User, (user) => user.schedules)
    user: User;

}
