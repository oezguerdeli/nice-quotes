import React, { Fragment } from 'react';
import { Button, Share } from 'react-native';

export default function ShareButton(props) {
    const { text, author } = props;

    function onShare() {
        Share.share({ message: text + ' -' + author });
    }

    return (
        <Fragment>
            <Button title="Share this Quote" onPress={() => onShare()} />
        </Fragment>
    );
}
