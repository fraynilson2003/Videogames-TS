export interface Propertys  {
    type?: any,
    primaryKey?: boolean,
    autoIncrement?: boolean,
    allowNull?: boolean,
    defaultValue?: any,
}

export enum orderDb {
    Asc = "ASC",
    Desc = "DESC"
}