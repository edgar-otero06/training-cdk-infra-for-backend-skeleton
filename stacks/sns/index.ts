import { IStackBasicProps } from '../../interfaces/IStackProps';
import { SNS_KEYS, SnsResources } from '../../interfaces/ISnsResources';
import { ExampleEntityTopic } from './example/ExampleEntityTopic';
import { TrainingEntityTopic } from './training/TrainingEntityTopic';

export class SnsStacks {
  static build(props: IStackBasicProps): SnsResources {
    const topics: SnsResources = {};

    topics[SNS_KEYS.EXAMPLE_ENTITY] = ExampleEntityTopic.build(props);
    topics[SNS_KEYS.TRAINING_ENTITY] = TrainingEntityTopic.build(props);
    return topics;
  }
}
