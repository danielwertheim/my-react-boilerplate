import React from 'react';

export default class BaseComponent extends React.Component {
    bindHandlers(...handlers) {
        handlers.forEach(h => this[h.name] = h.bind(this));
    }
}