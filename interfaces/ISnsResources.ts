import { ITopic } from 'aws-cdk-lib/aws-sns';

export enum SNS_KEYS {
  EXAMPLE_ENTITY = 'example-entity',
  TRAINING_ENTITY = 'training-entity',
}

export interface SnsResources {
  [key: string]: ITopic;
}
