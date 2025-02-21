import { CreationOptional, DataTypes, Model } from "sequelize";
import sequelize from "../database/sequelize";
import { cardRequestAttribute } from "../interfaces/cards";

export type cardRequestCreationAttribute = Omit<cardRequestAttribute, 'id' | 'createdAt' | 'updatedAt'>

class requestCard extends Model<cardRequestAttribute, cardRequestCreationAttribute> {
  declare id: CreationOptional<number>
  declare branch_name: string;
  declare card_type: string;
  declare quantity: number;
  declare initiator: string;
  declare card_charges: number;
  declare batch: number;
  declare date_requested: string;
  declare status: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

requestCard.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
  },
    branch_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    initiator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_charges: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    batch: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    date_requested: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
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
  tableName: "requestedCards",
  underscored: true,
  sequelize
}
)

export default requestCard;