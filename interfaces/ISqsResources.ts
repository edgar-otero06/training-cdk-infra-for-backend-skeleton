import { IQueue } from 'aws-cdk-lib/aws-sqs';

export enum SqsQueueKeys {
  EXAMPLE_ENTITY = 'example-entity',
  TRAINING_ENTITY = 'training-entity',
}

export interface SqsResources {
  [key: string]: IQueue;
}
