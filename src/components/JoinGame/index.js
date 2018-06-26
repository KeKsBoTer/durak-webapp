import * as React from 'react';

import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import styles from './style.css'

class JoinGame extends React.Component {

    render() {
        return (
            <Card className={styles.container} title="Durak">
                <Link to="/play">
                    <Button>Start a Game</Button>
                </Link>
            </Card>
        );
    }
}

export default JoinGame;
