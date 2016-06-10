jest.unmock('../scripts/sum');
import sum from '../scripts/sum';

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
