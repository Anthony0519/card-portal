import { logger } from "../utilities/logger";
import {
    Model,
    ModelStatic,
    Attributes,
    NonAttribute,
    FindOptions,
    Utils
} from 'sequelize'

export default class Repository<M extends Model, ModelAttributes>{
    constructor(protected model: ModelStatic<M>) {
        this.model = model;
    }

    async findByPk(id: number | string, options?: FindOptions<Attributes<M>>): Promise<ModelAttributes | null | undefined> {
        const result = await this.model.findByPk(id, options);

        return result ? <Attributes<M>>result.toJSON() : null;
    }

    async findOne(payload: FindOptions<Attributes<M>>): Promise<ModelAttributes | null> {
        const result = await this.model.findOne(payload);
    
        return result ? <Attributes<M>>result.toJSON() : null;
    }

    async findAll(payload?: FindOptions<Attributes<M>>): Promise<(Attributes<M> & NonAttribute<M>)[]> {
        const result = await this.model.findAll(payload);
    
        return result.map((item) => <Attributes<M>>item.toJSON()); 
    }

    async countAll(payload?: FindOptions<Attributes<M>>): Promise<number> {
        return await this.model.count(payload);
    }

    generateSelectQuery(options?: FindOptions<{ [key: string]: any }>): string {
        const queryInterface = this.model.sequelize?.getQueryInterface();
    
        if (!queryInterface) throw new Error('An error occurred generating a query');
    
        if (options?.include) {
          (this.model as any)._validateIncludedElements.bind(this.model)(options);
        }
    
        Utils.mapFinderOptions(options as any, this.model);
    
        const query = (queryInterface.queryGenerator as any).selectQuery(this.model.getTableName(), options, this.model);
    
        logger.info(`[DATABASE QUERY ${new Date()}] => Generated: ${query}`);
    
        return query;
      }
}