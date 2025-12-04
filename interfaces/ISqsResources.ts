import { IQueue } from 'aws-cdk-lib/aws-sqs';

export enum SqsQueueKeys {
  EXAMPLE_ENTITY = 'example-entity',
}

export interface SqsResources {
  [key: string]: IQueue;
}
