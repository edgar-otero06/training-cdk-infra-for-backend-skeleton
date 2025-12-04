import { Stack } from 'aws-cdk-lib';
import { IStackBasicProps } from '../interfaces/IStackProps';
import { formatToCdkProps } from '../utils/utils';
import { DynamoStacks } from './dynamo';
import { SnsStacks } from './sns';
import { SqsStacks } from './sqs';
import { getResourceTags, applyTags } from '../utils/tags';
import { Critical } from '../interfaces/IResourceTags';
import { PROJECT_NAME } from '..';

export class InfrastructureStack extends Stack {
  constructor(props: IStackBasicProps) {
    super(props.scope, props.name, formatToCdkProps(props));

    const tags = getResourceTags({
      ProjectName: PROJECT_NAME,
      Environment: props.stage,
      Owner: 'tmd-ledger',
      Critical: Critical.YES,
    });
    applyTags(this, tags);

    const stackProps = { ...props, scope: this };

    DynamoStacks.build(stackProps);
    const snsStacks = SnsStacks.build(stackProps);
    const sqsStacks = SqsStacks.build(stackProps);

    SqsStacks.bindTopicWithQueues(sqsStacks, snsStacks);
  }
}
