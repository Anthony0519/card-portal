import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "card-portal api",
    version: "1.0.0",
    description: "A Restful API for card-portal",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "github",
      url: "https://github.com/Anthony0519/card-portal.git",
    },
  },
  servers: [
    {
      url: 'http://localhost:3344',
      description: 'Development server',
    },
    {
        url: "https://screening-test-cd0f.onrender.com",
        description: 'Main Production server',
    }
  ],
};

const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, '../../api/routes/**/*.ts')], // Adjust this as needed
  };

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
