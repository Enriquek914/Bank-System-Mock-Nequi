import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Welcome from './welcome';

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
            <CardHeader title="Welcome to CodumNequi" />
            <CardText>Easy Money</CardText>
        </Card>

    </div>
);

