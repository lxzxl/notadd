import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';
@Entity({
    name: 'organization'
})
export class Organization {
    
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    organization_id: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '英文名称'
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '中文名称'
    })
    title: string;

    @Column({
        type: 'text',
        comment: '描述备注'
    })
    description: string;

    @Column({
        type: 'timestamp',
        comment: '创建时间'
    })
    create_time: Timestamp;

    @Column({
        type: 'timestamp',
        comment: '更新时间'
    })
    update_time: Timestamp;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '排序'
    })
    displayorder: string;
}