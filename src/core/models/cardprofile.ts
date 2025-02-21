import { CreationOptional, DataTypes, Model } from "sequelize";
import sequelize from "../database/sequelize";
import { cardProfileAttribute } from "../interfaces/cards";

export type cardProfileCreationAttribute = Omit<cardProfileAttribute, 'id' | 'createdAt' | 'updatedAt'>

class cardProfile extends Model<cardProfileAttribute, cardProfileCreationAttribute> {
    declare id: CreationOptional<number>
    declare card_holder: string;
    declare masked_pan: number;
    declare expiration: string;
    declare batch: number;
    declare date_issued: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

cardProfile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        card_holder: {
            type: DataTypes.STRING,
            allowNull: false
        },
        masked_pan: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        expiration: {
            type: DataTypes.STRING,
            allowNull: false
        },
        batch: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date_issued: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
    tableName: "cardProfiles",
    underscored: true,
    sequelize
}
)

export default cardProfile