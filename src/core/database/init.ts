import { logger } from "../utilities/logger";
import sequelize from "./sequelize"

const dbConnection = (): void => {
    try {
        sequelize.authenticate()
        logger.info("Database connected successfully")
    } catch (error) {
        logger.error("Unable to connect to database: ", error)
    }
}

export default dbConnection;