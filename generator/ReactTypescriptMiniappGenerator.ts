import Generator from "yeoman-generator";
import IPrompAnswers from "./IPrompAnswers";

class ReactTypescriptMiniappGenerator<
    T extends Generator.GeneratorOptions,
> extends Generator<T> {
    constructor(arg: string | string[], opt: T) {
        super(arg, opt);
    }

    protected async prompting() {
        const answers: IPrompAnswers = await this.prompt([
            {
                type: "input",
                name: "projectName",
                message: "Your project name",
                default: this.appname,
            },
        ]);
        this.log("app name", answers.projectName);
    }
}

export default ReactTypescriptMiniappGenerator;
