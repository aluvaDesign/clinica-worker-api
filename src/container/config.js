if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

export default {
  PORT: process.env.PORT || 4000,
  COSMOS_ENDPOINT: process.env.COSMOS_ENDPOINT,
  COSMOS_KEY: process.env.COSMOS_KEY,
  COSMOS_CONTAINER: process.env.COSMOS_CONTAINER,
  COSMOS_TABLE_CLINICARECORD: process.env.COSMOS_TABLE_CLINICARECORD,
  MAX_ITEM_COUNT_CLINICARECORD: process.env.MAX_ITEM_COUNT_CLINICARECORD,
  COSMOS_TABLE_DOCUMENT: process.env.COSMOS_TABLE_DOCUMENT,
};
