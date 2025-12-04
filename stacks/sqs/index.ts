import { IStackBasicProps } from '../../interfaces/IStackProps';
import { SqsResources, SqsQueueKeys } from '../../interfaces/ISqsResources';
import { SqsSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';
import { SnsResources, SNS_KEYS } from '../../interfaces/ISnsResources';
import { ExampleEntityQueue } from './example/ExampleEntityQueue';

export const TOPIC_TO_QUEUE_BINDING = {
  [SNS_KEYS.EXAMPLE_ENTITY]: [SqsQueueKeys.EXAMPLE_ENTITY],
};

export class SqsStacks {
  static build(props: IStackBasicProps): SqsResources {
    const queues: SqsResources = {};

    queues[SqsQueueKeys.EXAMPLE_ENTITY] = ExampleEntityQueue.build(props);

    return queues;
  }

  /**
   * Binds a topic to a queues. Supports multiple queues per topic.
   * @param queues - The queues to bind
   * @param topics - The topics to bind
   */
  static bindTopicWithQueues(queues: SqsResources, topics: SnsResources) {
    Object.entries(TOPIC_TO_QUEUE_BINDING).forEach(([topicKey, queueKeys]) => {
      const topic = topics[topicKey];
      queueKeys.forEach(queueKey => {
        const queue = queues[queueKey];

        topic.addSubscription(
          new SqsSubscription(queue, {
            rawMessageDelivery: true,
          }),
        );
      });
    });
  }
}
