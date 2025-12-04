import { Queue, IQueue } from 'aws-cdk-lib/aws-sqs';
import { IStackBasicProps } from '../../../interfaces/IStackProps';
import { Duration } from 'aws-cdk-lib';

export class ExampleEntityQueue {
  static build(props: IStackBasicProps): IQueue {
    const dlq = new Queue(
      props.scope,
      `example-entity-queue-dlq-${props.stage}`,
      {
        queueName: `example-entity-dlq-${props.stage}`,
      },
    );

    return new Queue(props.scope, `example-entity-queue-${props.stage}`, {
      queueName: `example-entity-${props.stage}`,
      visibilityTimeout: Duration.seconds(60),
      deadLetterQueue: {
        maxReceiveCount: 3,
        queue: dlq,
      },
    });
  }
}
