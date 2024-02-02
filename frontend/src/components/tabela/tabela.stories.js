import { Tabela } from './index';
import { tableHeaders, mock } from '../helpers/dataMock'

export default {
    title: 'Components/Tabela',
    component: Tabela,

    argTypes: {
        tableHeaders: {
            defaultValue: tableHeaders,
            // control: { type: 'object' }
        },
        data: {
            defaultValue: mock,
            // control: { type: 'object' }
        },
    },
};

export const Default = (args) => <Tabela {...args} />;
