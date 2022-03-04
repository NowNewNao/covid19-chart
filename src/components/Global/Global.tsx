import React, { FC } from 'react';
import { GlobalData } from '@/types';

const Global: FC<GlobalData> = ({ data }) => <div>{data.NewConfirmed}</div>;

export { Global };
