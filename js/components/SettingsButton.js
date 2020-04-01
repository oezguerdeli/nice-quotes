import React, { Fragment, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SettingsButton(props) {
    const [isPressed, setIsPressed] = useState(false);

    function handleSettings() {
        setIsPressed(true);
    }

    return (
        <Fragment>
            <Icon name="cogs" size={20} color="black" onPress={() => { handleSettings() }} />
        </Fragment>
    );
}
