import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1605091097919 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'foodtruck_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageFoodtruck',
                    columnNames: ['foodtruck_id'],
                    referencedTableName: 'foodtrucks',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('foodtrucks');
    }

}
