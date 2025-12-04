import { IStackBasicProps } from '../../interfaces/IStackProps';
import { SNS_KEYS, SnsResources } from '../../interfaces/ISnsResources';
import { ExampleEntityTopic } from './example/ExampleEntityTopic';

export class SnsStacks {
  static build(props: IStackBasicProps): SnsResources {
    const topics: SnsResources = {};

    topics[SNS_KEYS.EXAMPLE_ENTITY] = ExampleEntityTopic.build(props);

    return topics;
  }
}
