import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import Schedule from "./schedule.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", length: 25 })
    name: string;

    @Column({ type: "varchar", length: 25, unique: true })
    email: string;

    @Column({ type: "boolean", default: false })
    admin: boolean;

    @Column({ type: "varchar", length: 120 })
    password: string;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @DeleteDateColumn({ type: "date", nullable: true })
    deletedAt: string;

    @OneToMany(() => Schedule, (Schedule) => Schedule.user)
    schedules: Schedule[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hasRounds: number = getRounds(this.password)

        if (!hasRounds) {
            this.password = hashSync(this.password, 10)
        }
    }
}
