import React from 'react';

const FamilyContext = React.createContext({});

export const Provider = FamilyContext.Provider; // тот, который делится данными
export const Consumer = FamilyContext.Consumer; // тот, который будет данные употребялть