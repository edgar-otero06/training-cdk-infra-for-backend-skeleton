import {
  DynamoResources,
  DynamoTableKeys,
} from '../../interfaces/IDynamoResources';
import { IStackBasicProps } from '../../interfaces/IStackProps';
import { ExamplesTable } from './ExamplesTable';
import { OutboxTable } from './OutboxTable';
import { OutboxIntegrationTestTable } from './OutboxIntegrationTestTable';
import { TrainingTable } from './TrainingTable';

export class DynamoStacks {
  static build(props: IStackBasicProps): DynamoResources {
    const tables: DynamoResources = {};

    tables[DynamoTableKeys.EXAMPLES] = ExamplesTable.build(props);
    tables[DynamoTableKeys.OUTBOX] = OutboxTable.build(props);
    tables[DynamoTableKeys.OUTBOX_INTEGRATION_TEST] =
      OutboxIntegrationTestTable.build(props);
    tables[DynamoTableKeys.TRAINING] = TrainingTable.build(props);
    return tables;
  }
}
