import { Repository } from 'typeorm';
import { Relation } from '../relation.entity';
import { CustomRepository } from '../../../typeorm-ex/typeorm-ex.decorator';

@CustomRepository(Relation)
export class RelationRepository extends Repository<Relation> {
  async findRelations(): Promise<Relation[]> {
    return await this.find();
  }
}
