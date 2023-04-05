import Generator from "yeoman-generator";
import IPrompAnswers from "./IPrompAnswers";

class ReactTypescriptMiniappGenerator<
    T extends Generator.GeneratorOptions,
> extends Generator<T> {
    private answers: IPrompAnswers = { projectName: this.appname };

    constructor(arg: string | string[], opt: T) {
        super(arg, opt);
    }

    protected async prompting() {
        this.answers = await this.prompt([
            {
                type: "input",
                name: "projectName",
                message: "Your project name",
                default: this.appname,
            },
        ]);
    }

    protected writing() {
        this.fs.copy(
            this.templatePath("../templates"),
            this.destinationPath("."),
        );
        this.fs.delete("../templates/package.temp.json");
        this.fs.copyTpl(
            this.templatePath("../templates/package.temp.json"),
            this.destinationPath("package.json"),
            { projectName: this.answers.projectName },
        );
    }

    protected async install() {
        await this.spawnCommandSync("git init .", []);
    }
}

export default ReactTypescriptMiniappGenerator;
