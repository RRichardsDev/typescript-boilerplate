type DefaultConfig = {
  port: number,
  host: string,
  dbUri: string
};
export const config: DefaultConfig = {
  port: 3001,
  host: 'localhost',
  dbUri: 'mongodb://localhost:27017/rest-api'

}
