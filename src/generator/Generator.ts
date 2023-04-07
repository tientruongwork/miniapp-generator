import BaseGenerator from "yeoman-generator";
import IPrompAnswers from "./IPrompAnswers";
import { ProjectPathByType, ProjectType } from "./constant";

class Generator extends BaseGenerator {
    private answers: IPrompAnswers = {
        projectType: ProjectType.REACT_TYPESCRIPT,
    };

    private projectTemplatesPath: string = "";

    private validateIsProjectTypeInitialized(): void {
        if (!this.answers.projectType) {
            throw new Error("Unable to reach projectType");
        }
    }

    private setProjectPaths(): void {
        this.validateIsProjectTypeInitialized();

        this.projectTemplatesPath = ProjectPathByType[this.answers.projectType];
    }

    protected async prompting() {
        this.answers = await this.prompt([
            {
                type: "list",
                name: "projectType",
                message: "Which project you'd like to generate",
                choices: [
                    {
                        name: "React typescript miniapp",
                        value: ProjectType.REACT_TYPESCRIPT,
                    },
                    {
                        name: "Nodejs typescript miniapp",
                        value: ProjectType.NODEJS_TYPESCRIPT,
                    },
                ],
            },
        ]);
        this.setProjectPaths();
    }

    protected async writing() {
        this.fs.copy(this.templatePath(this.projectTemplatesPath), this.destinationPath());
    }

    protected async install() {
        // init git repo so we can install husky
        await this.spawnCommandSync("git init .", []);
    }
}

export default Generator;
