import React from 'react';

const BookContext = React.createContext({});

export const BookProvider = BookContext.Provider;
export const BookConsumer = BookContext.Consumer;