export const options = {
  discoutTargetUsage: [
    {
      key: 'cloudpayonly',
      value: 'Cloud usage fee only',
    },
    {
      key: 'cloudpaywithfee',
      value: 'Cloud usage fee + Maintenance service',
    },
  ],
  supportFeeType: [
    {
      key: 'percent',
      value: 'Percentage of usage fee',
    },
    {
      key: 'fix',
      value: 'Fixed fee',
    },
    {
      key: 'aws_developer',
      value: 'Developer (AWS fee table)',
    },
    {
      key: 'aws_business',
      value: 'Business (AWS fee table)',
    },
    {
      key: 'aws_enterprise',
      value: 'Enterprise (AWS tariff table)',
    },
    {
      key: 'aws_enterprise_on_ramp',
      value: 'Enterprise On-Ramp',
    },
    {
      key: 'no_support',
      value: 'No Support',
    },
  ],
  substitutionFeeType: [
    {
      key: 'percent',
      value: 'Percentage to usage fee (%)',
    },
    {
      key: 'fix',
      value: 'Fixed fee',
    },
    {
      key: 'automatic',
      value: 'Percentage or fixed amount, whichever is greater',
    },
    {
      key: 'usagetable',
      value: 'Price table',
    },
  ],
};
