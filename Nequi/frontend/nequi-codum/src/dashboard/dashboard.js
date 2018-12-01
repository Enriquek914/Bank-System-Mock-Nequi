import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Welcome from './welcome';
import RechargeAccount from './rechargeAccount';

const styles = {
    welcome: { marginBottom: '2em' },
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em' },
};

export default () => (
    <div>
        <Welcome styles={styles} />

        <Card style={{ margin: '2em' }}>
            <CardHeader title="Welcome to Nequi" />
            <CardText>Easy Money</CardText>
            <RechargeAccount />
        </Card>

    </div>
);

