import { Queue, IQueue } from 'aws-cdk-lib/aws-sqs';
import { IStackBasicProps } from '../../../interfaces/IStackProps';
import { Duration } from 'aws-cdk-lib';

export class TrainingEntityQueue {
    static build(props: IStackBasicProps): IQueue {
        const dlq = new Queue(
            props.scope,
            `${props.stage}-training-entity-queue-dlq`,
            {
                queueName: `${props.stage}-training-entity-queue-dlq`,
            },
        );

        return new Queue(props.scope, `${props.stage}-training-entity-queue`, {
            queueName: `${props.stage}-training-entity-queue`,
            visibilityTimeout: Duration.seconds(60),
            deadLetterQueue: {
                maxReceiveCount: 3,
                queue: dlq,
            },
        });
    }
}