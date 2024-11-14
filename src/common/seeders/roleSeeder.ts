import { Role } from "src/role/entities/role.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export class SeederRole implements Seeder{
    async run(dataSource: DataSource): Promise<any> {
        const repoRole=dataSource.getRepository(Role);
        const dataRole=[
            {
                name:"admin"
            },
            {
                name:"client"
            }
        ]
        

        for(const x of dataRole){
            const query=await repoRole.findOneBy({name:x.name});
            if(!query){
                const dataRole2=repoRole.create(x);
                await repoRole.save(dataRole2);
            }
        }
    }
}