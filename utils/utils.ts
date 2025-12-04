import { IStackBasicProps } from '../interfaces/IStackProps';

export const formatToCdkProps = (props: IStackBasicProps) => {
  return {
    stackName: props.name,
    env: {
      account: props.account,
      region: props.region,
    },
  };
};
