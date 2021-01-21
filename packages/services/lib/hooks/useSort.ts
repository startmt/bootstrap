import { useState } from 'react';

const defaultSort = {
};

export const useSort = (props = {}) =>
    useState(() => Object.assign({}, defaultSort, props));
