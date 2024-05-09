import Form from 'react-bootstrap/Form';
import './Switch.scss';
import { styled } from '@mui/material/styles';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: '#DADADA',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#DADADA',
        color: '#111313',
        width: '191px',
        fontFamily: 'Roboto-flex',
        fontSize: '16px',
        fontWeight: '400',
        padding: '8px 12px 8px 12px',
        borderRadius: '8px',
    },
}));
function Switch() {
    return (
        <BootstrapTooltip
            title="Учитывать аллергены при построении прогноза"
            placement="top"
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [44, 0],
                            },
                        },
                    ],
                },
            }}
        >
            <Form>
                <Form.Switch // prettier-ignore
                    type="switch"
                    id="custom-switch"
                />
            </Form>
        </BootstrapTooltip>
    );
}

export default Switch;
