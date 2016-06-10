// Copyright 2004-present Facebook. All Rights Reserved.

'use strict';

jest.unmock('../dist/sum');

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    const sum = require('../dist/sum');
    expect(sum(1, 2)).toBe(3);
  });
});
