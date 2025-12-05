import { ITopic, Topic } from "aws-cdk-lib/aws-sns";
import { IStackBasicProps } from "../../../interfaces/IStackProps";

export class TrainingEntityTopic {
    static build(props: IStackBasicProps): ITopic {
        return new Topic(props.scope, `${props.stage}-training-entity-topic`, {
            topicName: `${props.stage}-training-entity-topic`,
        });
    }
}