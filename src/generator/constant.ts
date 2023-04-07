export enum ProjectType {
    REACT_TYPESCRIPT = "reactTypescript",
    NODEJS_TYPESCRIPT = "nodejsTypescript",
}

export const ProjectPathByType = {
    [ProjectType.REACT_TYPESCRIPT]: "./react-typescript",
    [ProjectType.NODEJS_TYPESCRIPT]: "./nodejs-typescript",
};
