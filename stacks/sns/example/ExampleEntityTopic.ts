import { ITopic, Topic } from 'aws-cdk-lib/aws-sns';
import { IStackBasicProps } from '../../../interfaces/IStackProps';

export class ExampleEntityTopic {
  static build(props: IStackBasicProps): ITopic {
    return new Topic(props.scope, `example-entity-topic-${props.stage}`, {
      topicName: `example-entity-${props.stage}`,
    });
  }
}
