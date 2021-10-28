const BMICalculator = require('../src/js/bmiCalculator');

subject = new BMICalculator();

describe('BMICalculator', () => {
    describe('#calculateMetric()', () => {
        
        let results;

        describe('Giovanni', () => {
    
            beforeEach(() => {
                results = subject.calculateMetric({height: 1.74, weight: 67});
            });
    
            it('is expected to return a numeric value (float with 2 decimals) if given proper arguments', () => {
                expect(results.value).toEqual(22.13);
            });
    
            it('is expected to return a classification of "Normal weight', () => {
                expect(results.classification).toEqual('Normal weight');
            });

        });

        describe('Thomas', () => {
    
            beforeEach(() => {
                results = subject.calculateMetric({height: 1.86, weight: 105});
            });
    
            it('is expected to return a numeric value (float with 2 decimals) if given proper arguments', () => {
                expect(results.value).toEqual(30.35);
            });
    
            it('is expected to return a classification of "Obesity Class 1', () => {
                expect(results.classification).toEqual('Obesity Class 1');
            });

        });
        
    });
});